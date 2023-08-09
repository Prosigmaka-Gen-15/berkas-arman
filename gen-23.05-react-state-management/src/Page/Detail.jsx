import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MainContent from "../Detail/MainContent";
import Navbar from "../Home/Navbar";

const Detail = () => {
  const { productId } = useParams();

  const [item, setItem] = useState({});

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts/" + productId);
      setItem(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div>
      <Navbar />
      <MainContent item={item} />
    </div>
  );
};

export default Detail;
