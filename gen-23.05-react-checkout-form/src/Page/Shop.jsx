import React from "react";
import Sidebar from "../Component/Sidebar";
import Keranjang from "../Component/Keranjang";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Shop = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <section className="flex-1 ">
        {/* <Navbar /> */}
        <Keranjang />
        <Footer />
      </section>
    </div>
  );
};

export default Shop;
