import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand w-50" to="/">
            <img className="w-25" src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav menu">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Shop
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/order"
              >
                Order Review
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/inventory"
              >
                Manage Inventory
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
