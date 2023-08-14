import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddProduct } from "../Store/ProductSlice";

const Card = ({ productId, image, name, price, desc }) => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const handlesubmit = (event) => {
    event.stopPropagation();
    if (token !== "") {
      const data = {
        id: productId,
        nama: name,
        harga: price,
        gambar: image,
        amount: amount,
      };
      dispatch(AddProduct(data));
    }
    navigate("/login");
    // alert("Login dulu BOSS!!!");
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center justify-center bg-gray-100 rounded-xl px-4 py-4 ">
        <img onClick={() => navigate("/detail/" + productId)} className="h-64 w-auto object-cover cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out" src={image} alt="Card Image" />
      </div>
      <div onClick={() => navigate("/detail/" + productId)} className="flex flex-row justify-between cursor-pointer">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h1 className="text-xl font-semibold">Rp {parseInt(price).toLocaleString()}</h1>
      </div>
      <div className="flex items-center">
        <p>{desc}</p>
      </div>
      <div className="flex items-center">
        <button onClick={handlesubmit} className="transition ease-in-out duration-300 flex justify-center border border-black rounded-3xl px-4 py-1 font-semibold hover:bg-green-700 hover:text-white hover:border-green-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
