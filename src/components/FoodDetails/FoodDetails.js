import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleFood from "../SingleFood/SingleFood";

const FoodDetails = () => {
  const { foodID } = useParams();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [foodID]);

  return (
    <div>
      {foods.map((food) => (
        <SingleFood key={food.idMeal} food={food}></SingleFood>
      ))}
    </div>
  );
};

export default FoodDetails;
