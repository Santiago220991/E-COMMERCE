import { ResultPreview } from "./ResultPreview";
import { SortFilter } from "./SortFilter";
import { Cart } from "../Cart";
import "./ResultInfoBar.css";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

function ResultInfoBar() {
  const { isCartOpen } = useContext(SearchContext);

  return (
    <div className="ResultInfoBarContainer">
        <ResultPreview />
        <SortFilter />
      {isCartOpen && <Cart />}
    </div>
  );
}

export { ResultInfoBar };
