import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header flex items-center justify-around my-6">
      <div className="brand-name">
        <h1 className="text-4xl text-indigo-600 font-bold">FooodZa!</h1>
      </div>
      <nav>
        <NavLink
          className="nav-link mr-8 text-lg"
          activeClassName="nav-link-active bg-indigo-600 py-2 px-6 text-white rounded"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link nav-link mr-8 text-lg"
          activeClassName="nav-link-active bg-indigo-600 py-2 px-6 text-white rounded"
          to="/restaurant"
        >
          Restaurant
        </NavLink>
        <NavLink
          className="nav-link mr-8 text-lg"
          activeClassName="nav-link-active bg-indigo-600 py-2 px-6 text-white rounded"
          to="/suggestion"
        >
          Suggestion
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
