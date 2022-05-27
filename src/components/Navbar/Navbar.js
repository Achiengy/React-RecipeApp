import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>
          <span>My Recipe</span>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
          {" "}
          <li>About</li>
        </Link>
          <Link to="/contact">
          {" "}
          <li>Contact</li>
        </Link>
        </ul>
      </div>
      <button>LogOut</button>
    </div>
  );
};

export default Navbar;
