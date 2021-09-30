import React from "react";
import { useHistory } from "react-router";

const Category = (props) => {
  const { strMeal, strMealThumb, idMeal } = props.category;

  const history = useHistory();
  const viewMealButton = () => {
    history.push(`/food/${idMeal}`);
  };
  return (
    <div className="text-center">
      <img className="block mx-auto mb-4" src={strMealThumb} alt={strMeal} />
      <h1 className="text-3xl text-center font-bold h-16">{strMeal}</h1>
      <button
        className="mt-16 mb-2 bg-indigo-600 text-white rounded px-6 py-2"
        onClick={viewMealButton}
      >
        View Meal
      </button>
    </div>
  );
};

export default Category;
