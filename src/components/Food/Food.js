import React from "react";
import { Link, useHistory } from "react-router-dom";

const Food = (props) => {
  const { idMeal, strMealThumb, strMeal, strCategory, strArea } = props.food;

  const history = useHistory();
  const linkUrl = `/food/${idMeal}`;
  const linkCategories = `/categories/${strCategory}`;

  const handleDetailsButton = () => {
    history.push(linkUrl);
  };

  return (
    <div className="shadow-lg text-center rounded w-3/4">
      <img
        className="block  mx-auto rounded-t"
        src={strMealThumb}
        alt={strMeal}
      />
      <div className="py-8">
        <h1 className="text-3xl text-indigo-600 font-bold mb-6">{strMeal}</h1>
        <p className="text-xl font-bold">Category: {strCategory}</p>
        <p className="text-lg italic mt-2">Origin: {strArea}</p>
        <div>
          <button
            onClick={handleDetailsButton}
            className="mt-6 mb-2 bg-indigo-600 text-white rounded px-6 py-2"
          >
            Details
          </button>
          <Link
            to={linkCategories}
            className="block underline text-indigo-600 text-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
