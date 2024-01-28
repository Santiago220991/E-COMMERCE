import { useContext } from "react";
import "./CartLogo.css";
import { SearchContext } from "../../contexts/SearchContext";

function CartLogo() {
  const { isCartOpen, setIsCartOpen } = useContext(SearchContext);

  const handleClick = () => {
    isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  };

  return (
    <button className="LogoButton" onClick={handleClick}>
      <div className="cartLogoContainer">
        <img src="src/assets/CartLogo/shopping-cart.png" />
      </div>
    </button>
  );
}

export { CartLogo };
