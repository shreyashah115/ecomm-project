import React from "react";

// import loadable from "@loadable/component";

// const Header = loadable(() => import("components/Header"));
// const Filters = loadable(() => import("components/Filters"));
// const Footer = loadable(() => import("components/Footer"));

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
