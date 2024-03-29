import "./Cart.css";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

const Cart = () => {
  const { cartProducts, setCartProducts, addProductToCart, subtotal } =
    useContext(SearchContext);

  const removeCartProduct = (productTitle) => {
    const selectedItems = cartProducts.filter(
      (product) => product.title !== productTitle
    );
    setCartProducts([...selectedItems]);
  };

  return (
    <div className="CartContainer">
      <div className="SubtotalContainer">
        <strong>Subtotal</strong>
        <p>{subtotal}</p>
        <button>Continue</button>
      </div>
      {cartProducts.map((product, index) => (
        <div className="ProductAddedContainer" key={`product-${index}`}>
          <div className="ProductAddedImageCloseContainer">
            <div className="ProductAddedImageContainer">
              <img src={product.image} alt={"product-image"} />
            </div>
            <button onClick={() => removeCartProduct(product.title)}>X</button>
          </div>
          <p>{`$${product.price}`}</p>
          <div className="ProductAddedQuantityController">
            <button
              onClick={() =>
                addProductToCart(product.title, product.quantity - 1)
              }
              disabled={product.quantity <= 1}
            >
              <p>-</p>
            </button>
            <p>{product.quantity}</p>
            <button
              onClick={() =>
                addProductToCart(product.title, product.quantity + 1)
              }
            >
              <p>+</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Cart };
