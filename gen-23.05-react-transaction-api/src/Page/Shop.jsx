import React from "react";
import Keranjang from "../Component/Keranjang";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Shop = () => {
  return (
    <div className="w-full min-h-screen flex">
      <section className="flex-1 ">
        <Navbar />
        <Keranjang />
        <Footer />
      </section>
    </div>
  );
};

export default Shop;
