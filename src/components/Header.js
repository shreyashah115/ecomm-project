import React from "react";
import siestaa from "img/siestaa.webp";
import siestaMobile from "img/siesta-mobile.webp";
import Banner from "../pages/Banner";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="page-header">
        <Link to="/" className="logo">
          <img src={siestaMobile} alt="logo" />
        </Link>

        <nav aria-label="Primary" className="navigation">
          <button className="toggle-menu" id="toggle-menu">
            <span className="menu-icon material-icons-round">menu</span>
            <span className="close-icon material-icons-round">close</span>
          </button>

          <ul className="menu" id="menu">
            <li className="dropdown">
              <a className="menu-links" href="#">
                Products
              </a>
              <div className="dropdown-content">
                <a href="#">Beds</a>
                <a href="#">Sofa beds</a>
                <a href="#">Mattresses</a>
              </div>
            </li>
            <li>
              <a className="menu-links" href="#">
                Offers
              </a>
            </li>
            <li>
              <a className="menu-links" href="#">
                What's New
              </a>
            </li>
            <li>
              <a className="menu-links" href="#">
                My Profile
              </a>
            </li>
          </ul>
        </nav>

        <div className="search-container">
          <form className="search">
            <label>
              <input type="search" name="find" id="find" placeholder="Search" />
            </label>
          </form>
        </div>
        <div className="additional-links">
          <a href="#">
            <span className="material-icons-round favorite_border"> </span>
          </a>
          <a href="#">
            <span className="material-icons-round shopping-cart">
              shopping_cart
            </span>
          </a>
        </div>
      </header>
      <Banner />
    </>
  );
};

export default Header;
