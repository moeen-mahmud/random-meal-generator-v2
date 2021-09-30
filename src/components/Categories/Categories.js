import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl text-indigo-600 font-bold">
        Food Categories
      </h1>
      <div className="grid grid-cols-3 place-items-center gap-16 my-16 px-16">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
