import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Catalog from "../Home/Catalog";
import Content from "../Home/Content";
import Header from "../Home/Header";
import axios from "axios";
import Card from "../Home/Card";

const Home = () => {
  const [products, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      let response = await axios.get(" http://localhost:3000/posts ");
      setProduct(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <Catalog data={products} />
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 pb-10">
        {products.map((product) => (
          <div className="h-full" key={product.id}>
            <Card name={product.namaProduct} price={product.hargaProduct} desc={product.KeteranganProduct} image={product.img} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Home;
