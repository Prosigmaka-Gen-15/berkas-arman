import React from "react";
import Navbar from "../Home/Navbar";
import Catalog from "../Home/Catalog";
import Content from "../Home/Content";
import Header from "../Home/Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Catalog />
    </>
  );
};

export default Home;
