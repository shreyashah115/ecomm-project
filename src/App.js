import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { getProducts } from "utils/firebase";
import loadable from "@loadable/component";

const Header = loadable(() => import("components/Header"));
const Banner = loadable(() => import("./pages/Banner"));
const Product = loadable(() => import("components/Product"));
const Cart = loadable(() => import("components/Cart"));
const Favourite = loadable(() => import("components/Favourite"));
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

  useEffect(() => {
    getProducts().then((doc) => {
      setProducts({
        productsData: doc,
        loading: false,
      });
    });
  });

  return (
    <Router>
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
        <Route path="/cart" children={<Cart data={products} />} />
        <Route path="/favourites" children={<Favourite data={products} />} />

        <Route path="*">
          <FourOhFour />
        </Route>
        <Route path="/404">
          <FourOhFour />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
