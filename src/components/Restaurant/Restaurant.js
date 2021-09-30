import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [searchText]);

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <div>
      <div className="block text-center">
        <input
          className="border-2 border-indigo-600 w-1/2 py-2 px-2 mt-16 rounded"
          placeholder="Search foods!"
          type="text"
          name="search"
          onChange={handleSearch}
        />
      </div>
      <div>
        <div className="grid grid-cols-3 place-items-center gap-16 my-16 px-16">
          {foods.map((food) => (
            <Food food={food} key={food.idMeal}></Food>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
