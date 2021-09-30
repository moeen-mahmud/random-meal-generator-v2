import React, { useState } from "react";
import Suggested from "../Suggested/Suggested";

const Suggestion = () => {
  const [meals, setMeals] = useState([]);

  const generateButton = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  };

  return (
    <div>
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">Hungry?</h1>
        <p className="text-xl">Get yourself a meal 🍲</p>
        <button
          className="mt-6 mb-2 bg-indigo-600 text-white rounded px-6 py-2"
          onClick={generateButton}
        >
          Generate
        </button>
      </div>
      <div>
        {meals.map((meal) => (
          <Suggested key={meal.idMeal} meal={meal}></Suggested>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
