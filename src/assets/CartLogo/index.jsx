import { useContext } from "react";
import "./CartLogo.css";
import { SearchContext } from "../../contexts/SearchContext";
import cartLogo from '/src/assets/CartLogo/shopping-cart.png';

function CartLogo() {
  const { isCartOpen, setIsCartOpen } = useContext(SearchContext);

  const handleClick = () => {
    isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  };

  return (
    <button className="LogoButton" onClick={handleClick}>
      <div className="cartLogoContainer">
        <img src={cartLogo} />
      </div>
    </button>
  );
}

export { CartLogo };
