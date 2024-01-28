import "./Cart.css";

const Cart = () => {
  return (
    <div className="CartContainer">
      <div className="SubtotalContainer">
        <strong>Subtotal</strong>
        <p>`${2000}`</p>
        <button>Continue</button>
      </div>
      <div className="ProductAddedContainer">
        <div className="ProductAddedImageCloseContainer">
          <div className="ProductAddedImageContainer">
            <img
              src={
                "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              }
              alt={"product-image"}
            />
          </div>
          <button>X</button>
        </div>
        <p>{2000}</p>
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
    </div>
  );
};

export { Cart };
