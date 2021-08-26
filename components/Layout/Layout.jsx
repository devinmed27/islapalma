import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import s from "./Layout.module.scss";
// import Context from "../../context/index";

const Layout = ({ children }) => {
  return (
    <div className={s.container}>
      <Header/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
