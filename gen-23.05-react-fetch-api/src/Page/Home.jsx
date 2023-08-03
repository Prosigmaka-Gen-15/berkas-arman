import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Catalog from "../Home/Catalog";
import Content from "../Home/Content";
import Header from "../Home/Header";
import axios from "axios";

const Home = () => {
  const [products, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      let response = await axios.get(" http://localhost:3000/posts ")
      setProduct(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(products)

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Catalog data={products} />
    </>
  );
};

export default Home;
