import "./RatingFilter.css";
import { Rating } from "./Rating";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

function RatingFilter() {
  const { rateOption, setRateOption, applyFilters } = useContext(SearchContext);

  const ratingStarts = [5, 4, 3, 2, 1];

  const selectRate = (element) => {
    setRateOption(element.id);
  };

  useEffect(() => {
    applyFilters();
  }, [rateOption]);

  return (
    <div className="RatingFilterContainer">
      <h2>Rates:</h2>
      <div className="RatingsContainer">
        <fieldset>
          {ratingStarts.map((option, index) => (
            <div key={index} className="RadioBox">
              <input
                type="radio"
                id={option}
                name="radioGroup"
                onChange={(e) => selectRate(e.target)}
              />
              <label htmlFor={option}>
                <Rating stars={option} />
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
}

export { RatingFilter };
