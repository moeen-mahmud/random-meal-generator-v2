import React, { useEffect, useState } from "react";

const Restaurant = () => {
  const [foods, setFoods] = useState("");

  const handleSearch = () => {};

  return (
    <div>
      <div className="block text-center">
        <input
          className="border-2 border-indigo-600 w-1/2 py-2 px-2 my-8 rounded"
          placeholder="Search foods!"
          type="text"
          name="search"
        />
      </div>
      <div>
        <h1>All foods go here</h1>
      </div>
    </div>
  );
};

export default Restaurant;
