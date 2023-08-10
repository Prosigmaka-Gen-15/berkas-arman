import React from "react";
import Sidebar from "../Component/Sidebar";
import Keranjang from "../Component/Keranjang";

const Shop = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <section className="flex-1 ">
        <Keranjang />
      </section>
    </div>
  );
};

export default Shop;
