import React from "react";
import siestaMobile from "img/siesta-mobile.webp";
import { Link } from "react-router-dom";

const Header = (props) => {
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
              <Link to="/" className="menu-links">
                Products
              </Link>

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
          <Link to={`/favourites`}>
            <span className="material-icons-round favorite_border"> </span>
          </Link>

          <Link to={`/cart`}>
            <span className="material-icons-round shopping-cart">
              shopping_cart
            </span>
            <span>{props.totalCart}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
