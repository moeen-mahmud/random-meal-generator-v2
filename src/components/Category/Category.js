import React from "react";

const Category = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    props.category;
  return (
    <div>
      <img className="block mx-auto" src={strCategoryThumb} alt={strCategory} />
      <h1 className="text-3xl font-bold my-8">{strCategory}</h1>
      <p className="overflow-auto h-32 p-4 rounded-xl scrollbar scrollbar-thumb-indigo-600 scrollbar-track-indigo-200">
        <span className="text-xl font-bold">Description: </span>
        {strCategoryDescription}
      </p>
    </div>
  );
};

export default Category;
