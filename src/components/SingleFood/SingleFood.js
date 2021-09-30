import React from "react";
import { useHistory } from "react-router";

const SingleFood = (props) => {
  const {
    strMeal,
    strTags,
    strCategory,
    strArea,
    strMealThumb,
    strInstructions,
  } = props.food;

  const ingredients = Object.values(props.food).slice(9, 29);
  const measures = Object.values(props.food).slice(29, 49);

  const history = useHistory();

  const backButton = () => {
    history.push("/restaurant");
  };

  return (
    <div className="mx-auto my-32 px-16">
      <div className="flex">
        <div>
          <img
            className="w-3/4 block mx-auto rounded-lg"
            src={strMealThumb}
            alt={strMeal}
          />
          <div className="flex items-center justify-around">
            <div className="my-8">
              <h2 className="my-4 text-2xl font-bold">Ingredients</h2>
              {ingredients.map((ingredient) => (
                <p>{ingredient}</p>
              ))}
            </div>
            <div className="my-8">
              <h2 className="my-4 text-2xl font-bold text-right">Measures</h2>
              {measures.map((measure) => (
                <p className="text-right">{measure}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold mb-6 text-indigo-600">
              {strMeal}
            </h1>
          </div>
          <p className="mb-6">
            <span className="font-bold text-xl block mb-4">
              Category: {strCategory}
            </span>{" "}
            <span className="font-bold text-xl">Origin: {strArea}</span>
          </p>
          <p className="text-justify text-lg mb-6">
            <span className="font-bold text-xl">Recipe:</span> {strInstructions}
          </p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-indigo-600 text-xl font-bold">
              Tags: {strTags}
            </span>
            <button
              onClick={backButton}
              className=" mb-2 bg-indigo-600 text-white rounded px-6 py-2"
            >
              Back to Restaurant 👈
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
