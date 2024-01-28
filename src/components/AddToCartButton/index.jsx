import "./AddToCartButton.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";

const AddToCartButton = () => {
  const { productsInitial, setCartProducts, cartProducts, titleProduct } =
    useContext(SearchContext);

  const addProductToCart = () => {
    const alreadyExistInCart = cartProducts.filter((product) =>
      product.title.includes(titleProduct)
    );
    if (alreadyExistInCart.length===0) {
      const selectedProduct = productsInitial.filter((product) =>
        product.title.includes(titleProduct)
      );
      setCartProducts([...cartProducts, ...selectedProduct]);
    }
  };

  return (
    <div className="AddToCartContainer">
      <div className="AddToCartContainerCounter">
        <button>
          <p>-</p>
        </button>
        <p>1</p>
        <button>
          <p>+</p>
        </button>
      </div>
      <button onClick={addProductToCart}>
        <p>Add</p>
      </button>
    </div>
  );
};
export { AddToCartButton };
