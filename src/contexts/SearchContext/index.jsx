import { useState, useEffect, createContext } from "react";
import { HigherToLower, LowerToHigher, ByName } from "../../utils/sorting";
import roundRating from "../../utils/rounding"

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsInitial, setProductsInitial] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [rateOption, setRateOption] = useState(5);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList.sort(ByName));
        setProductsInitial(productList);
        setIsLoading(false);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const sortProducts = (sortValue) => {
    if (sortValue === "Name") {
      setProducts([...products.sort(ByName)]);
    } else if (sortValue === "Price_Low") {
      setProducts([...products.sort(LowerToHigher)]);
    } else if (sortValue === "Price_High") {
      setProducts([...products.sort(HigherToLower)]);
    }
  };

  const applyFilters = () => {
    const filteredProducts = productsInitial.filter((product) => {
      const categoryCheck =
        categoryOptions.length === 0 ||
        categoryOptions.some((category) => product.category === category);
      const ratingCheck =
        rateOption === 0 || roundRating(product.rating.rate) <= rateOption;
      return categoryCheck && ratingCheck;
    });
    setProducts(filteredProducts);
  };

  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  });

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        sortProducts,
        categoryOptions,
        setCategoryOptions,
        applyFilters,
        rateOption,
        setRateOption,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
