import React from "react";
import siestaa from "img/siestaa.png";
import siestaMobile from "img/siesta-mobile.png";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <header className="page-header">
        <a href="index.html" className="logo">
          <img
            className="product"
            srcSet={`${siestaa} 1920w, ${siestaa} 960w, ${siestaMobile} 480w`}
            sizes="(min-width: 1920px) 500px,
      (min-width: 800px) 500px,
      480px"
            src="img/siesta-mobile.png"
            alt="Siesta logo"
          />
        </a>

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
