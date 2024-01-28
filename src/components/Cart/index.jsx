import "./Cart.css";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

const Cart = () => {
  const { cartProducts } = useContext(SearchContext);
  console.log(cartProducts)
  return (
    <div className="CartContainer">
      <div className="SubtotalContainer">
        <strong>Subtotal</strong>
        <p>`${2000}`</p>
        <button>Continue</button>
      </div>
      {cartProducts.map((product, index) => (
        <div className="ProductAddedContainer" key={`product-${index}`}>
          <div className="ProductAddedImageCloseContainer">
            <div className="ProductAddedImageContainer">
              <img src={product.image} alt={"product-image"} />
            </div>
            <button>X</button>
          </div>
          <p>{`$${product.price}`}</p>
          <div className="ProductAddedQuantityController">
            <button>
              <p>-</p>
            </button>
            <p>1</p>
            <button>
              <p>+</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Cart };
