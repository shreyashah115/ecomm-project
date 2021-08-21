import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Layout from "components/Layout";
import product2 from "img/product/image-2.webp";
import product3 from "img/product/image-3.webp";
import black from "img/bed-mobile/black.webp";
import grey2 from "../img/bed-mobile/grey-2.webp";
import facebook from "img/svg/facebook-square-brands.svg";
import instagram from "img/svg/instagram-square-brands.svg";
import twitter from "img/svg/twitter-square-brands.svg";
import Header from "components/Header";


const Product = ({ data }) => {
  const { slug } = useParams();

  const loading = data.loading;

  let filteredProducts = data.productsData.filter(function (product) {
    return product.slug.includes(slug);
  });

  let slideIndex = 1;
  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return;

    let dots = document.getElementsByClassName("img-bg");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  return (
    <>
      {loading ? (
        <p>Please wait while the page loads.</p>
      ) : (
        <Layout>
          <Header />
          <hr />
          <main className="products">
            <h2 className="subheading">Product details</h2>
            <section>
              <article className="product">
                <header className="product-header">
                  <div className="container">
                    <div className="mySlides">
                      <div className="numbertext">1 / 4</div>
                      <img className="gallery" src={black} />
                    </div>

                    <div className="mySlides">
                      <div className="numbertext">2 / 4</div>
                      <img className="gallery" src={grey2} />
                    </div>

                    <div className="mySlides">
                      <div className="numbertext">3 / 4</div>
                      <img className="gallery" src={product2} />
                    </div>

                    <div className="mySlides">
                      <div className="numbertext">4 / 4</div>
                      <img className="gallery" src={product3} />
                    </div>

                    <a className="prev" onClick={() => plusSlides(-1)}>
                      ❮
                    </a>
                    <a className="next" onClick={() => plusSlides(1)}>
                      ❯
                    </a>

                    <div className="row">
                      <div className="column">
                        <img
                          className="gallery img-bg cursor"
                          src={black}
                          onClick={() => currentSlide(1)}
                          alt="Black bed"
                        />
                      </div>
                      <div className="column">
                        <img
                          className="gallery img-bg cursor"
                          src={grey2}
                          onClick={() => currentSlide(2)}
                          alt="Grey bed in room"
                        />
                      </div>
                      <div className="column">
                        <img
                          className="gallery img-bg cursor"
                          src={product2}
                          onClick={() => currentSlide(3)}
                          alt="Black bed close up"
                        />
                      </div>
                      <div className="column">
                        <img
                          className="gallery img-bg cursor"
                          src={product3}
                          onClick={() => currentSlide(4)}
                          alt="Bed with mattress"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{filteredProducts[0].name}</h3>
                    <p>{filteredProducts[0].description}</p>
                    <data value={filteredProducts[0].amount}>
                      <strong>${filteredProducts[0].amount}.00</strong>
                    </data>
                    <p>{}</p>
                    <div className="ratings">
                      <span className="material-icons-round star-rate">
                        {" "}
                        star_rate{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star_rate{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star_rate{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star_rate{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star_half{" "}
                      </span>
                      <span className="total-ratings">
                        ({filteredProducts[0].total_ratings})
                      </span>
                    </div>
                    <hr />
                    <p>
                      <strong>Size</strong>
                    </p>
                    <p>{filteredProducts[0].type}</p>
                    <hr />
                    <p>
                      <strong>Availability</strong>
                    </p>
                    <p>In-store</p>
                    <hr />
                    <p>
                      <strong>Colors</strong>
                    </p>
                    <button className="color-buttons white">White</button>
                    <button className="color-buttons black">Black</button>
                    <button className="color-buttons beige">Beige</button>
                    <div className="add-buttons">
                      <button type="button" className="main-button add-cart">
                        <span className="material-icons-round">
                          {" "}
                          add_shopping_cart{" "}
                        </span>
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        className="main-button add-wishlist"
                      >
                        <span className="material-icons-round add-fav">
                          favorite_border
                        </span>
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </header>
              </article>
            </section>
          </main>

          <aside className="questions">
            <h3>Questions & Answers:</h3>

            <p>
              <strong>
                "How much weight can the queen size hold?" asked by Christie
              </strong>
            </p>

            <hr />

            <p>
              A: "The weight capacity of the pre-selected queen-size platform
              bed is 500 pounds." Ronald from Siesta on Apr 20, 2021
            </p>

            <hr />

            <p>
              <strong>Q: "Is the box spring required?" asked by Taylor</strong>
            </p>
            <p>
              A: "The box spring is not required." Paolo from Siesta on Apr 17,
              2021
            </p>

            <hr />
            <p>
              <strong>
                {" "}
                Q: "Does the bed require a box spring?" asked by Cindy
              </strong>
            </p>

            <p>
              A: "The bed does not require a box spring." Rose Shiell from
              Siesta on Apr 17, 2021
            </p>
            <a href="#" className="underline-link">
              See all questions and answers &#8594;
            </a>
          </aside>
          <hr />
          <footer className="page-footer">
            <nav aria-label="Legal" className="footer-nav">
              <button type="button" className="main-button mobile-app">
                Install the Siesta Mobile App
              </button>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <img src={facebook} alt="Facebook logo" width="32" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="Instagram logo" width="32" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="Twitter logo" width="32" />
                  </a>
                </li>
              </ul>
              <ul className="legal">
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Accessibility Policy</a>
                </li>
              </ul>
              <p className="copyright">Copyright © Siesta - 2021</p>
            </nav>
          </footer>
        </Layout>
      )}
    </>
  );
};

export default Product;
