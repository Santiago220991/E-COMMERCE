import "./AddToCartButton.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext, useEffect } from "react";

const AddToCartButton = () => {
  const {
    cartProducts,
    titleProduct,
    productQuantity,
    setProductQuantity,
    addProductToCart,
  } = useContext(SearchContext);

  useEffect(() => {
    const selectedProduct = cartProducts.filter(
      (product) => product.title === titleProduct
    );
    if (selectedProduct.length > 0) {
      setProductQuantity(selectedProduct[0].quantity);
    } else setProductQuantity(1);
  }, []);

  const add = () => {
    const newValue = productQuantity + 1;
    setProductQuantity(newValue);
  };

  const subtract = () => {
    const newValue = productQuantity - 1;
    setProductQuantity(newValue);
  };

  return (
    <div className="AddToCartContainer">
      <div className="AddToCartContainerCounter">
        <button onClick={subtract} disabled={productQuantity <= 1}>
          <p>-</p>
        </button>
        <p>{productQuantity}</p>
        <button onClick={add}>
          <p>+</p>
        </button>
      </div>
      <button onClick={() => addProductToCart(titleProduct, productQuantity)}>
        <p>Add</p>
      </button>
    </div>
  );
};
export { AddToCartButton };
