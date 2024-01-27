import "./TypeFilter.css";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

function TypeFilter({ name, options }) {
  const { categoryOptions, setCategoryOptions, applyFilters } =
    useContext(SearchContext);

  const addCategory = (element) => {
    if (element.checked === true) {
      setCategoryOptions([...categoryOptions, element.id]);
    } else if (element.checked === false) {
      const newCategoryOptions = categoryOptions.filter(
        (value) => value != element.id
      );
      setCategoryOptions(newCategoryOptions);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [categoryOptions]);
  
  return (
    <div className="TypeFilterContainer">
      <h2>{name}:</h2>
      {options.map((option, id) => (
        <div key={id} className="CheckBox">
          <input
            type="checkbox"
            id={option.id}
            name={option.label}
            onChange={(e) => addCategory(e.target)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export { TypeFilter };
