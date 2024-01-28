import "./AddToCartButton.css";
const AddToCartButton = () => {
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
      <button>
        <p>Add</p>
      </button>
    </div>
  );
};
export { AddToCartButton };
