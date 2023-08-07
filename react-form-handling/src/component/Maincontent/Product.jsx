import React, { useState } from "react";
import Card from "../Card";

const Product = () => {
  const [form, setform] = useState({});
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 px-6 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 pb-10 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Product;
