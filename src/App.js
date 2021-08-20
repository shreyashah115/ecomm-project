import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import firebase from "utils/firebase";

import loadable from "@loadable/component";

const Header = loadable(() => import("components/Header"));
const Banner = loadable(() => import("./pages/Banner"));
const Product = loadable(() => import("components/Product"));
const Cart = loadable(() => import("components/Cart"));
const Filters = loadable(() => import("components/Filters"));
const Footer = loadable(() => import("components/Footer"));
const Layout = loadable(() => import("components/Layout"));
const FourOhFour = loadable(() => import("components/FourOhFour"));

const App = () => {
  const [products, setProducts] = useState({
    productsData: [],
    loading: true,
  });
  const { productsData, loading } = products;

  const db = firebase.firestore();

  useEffect(() => {
    setProducts({
      productsData: [...productsData],
      loading: true,
    });

    // READ: student data
    db.collection(`products`)
      .get()
      .then((snapshot) => {
        setProducts({
          productsData: snapshot.docs.reduce(
            (products, doc) => [...products, doc.data()],
            []
          ),
          loading: false,
        });
      });
  }, []);

  return (
    <Router>
      {/* <UserContext.Provider value={{data:userData, updateUsername:updateUsername}}> */}
      <Switch>
        <Route exact path="/">
          <Layout>
            <Header />
            <Banner />
            <Filters data={products} />
            <Footer />
          </Layout>
        </Route>

        <Route path="/product/:slug" children={<Product data={products} />} />
        {/* <Route path="/product/:slug" children={<Product />} /> */}
        <Route path="/cart" children={<Cart data={products} />} />

        <Route path="*">
          <FourOhFour />
        </Route>
        <Route path="/404">
          <FourOhFour />
        </Route>
        <Redirect to="/404" />
      </Switch>
      {/* </UserContext.Provider> */}
    </Router>
  );
};

export default App;

// const filterButtonClick = () => {
//   let filterButton = document.querySelector(`a.main-button.dialog`);
//   if (!filterButton) {
//     return;
//   }
//   filterButton.addEventListener(`click`, (event) => {
//     let overlay = document.querySelector(`.overlay`);
//     overlay.style.visibility = "visible";
//     overlay.style.opacity = 1;
//   });

//   let closeButton = document.querySelector(`a.close`);

//   closeButton.addEventListener(`click`, (event) => {
//     let overlay = document.querySelector(`.overlay`);
//     overlay.style.visibility = "hidden";
//     overlay.style.opacity = 0;
//   });
// };

// filterButtonClick();

// let navToggle = document.querySelector(`#toggle-menu`);
// let menu = document.querySelector(`.menu`);
// let closeIcon = document.querySelector(`.close-icon`);
// let menuIcon = document.querySelector(`.menu-icon`);

// navToggle.addEventListener(`click`, (event) => {
//   let menu = document.getElementById(`menu`);

//   if (!menu.style.display || menu.style.display === `none`) {
//     menu.style.display = `block`;
//     closeIcon.style.display = `block`;
//     menuIcon.style.display = `none`;
//   } else {
//     menu.style.display = `none`;
//     closeIcon.style.display = `none`;
//     menuIcon.style.display = `block`;
//   }
// });
