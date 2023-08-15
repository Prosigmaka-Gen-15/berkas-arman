import React from "react";
import { RiSearchLine, RiShoppingCart2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetData } from "../store/authSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(resetData());
    navigate("/");
  };

  return (
    <div className="flex shadow-md mb-2 py-12 bg-gray-950 text-white justify-between items-center px-3">
      <div className="flex mx-5">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex gap-1">
        <button className="text-xl">
          <RiSearchLine />
        </button>
        <input type="search" className="rounded-md" />
      </div>
      <div class="flex gap-2 ">
        <button className="bg-yellow-400 p-2 rounded-md text-black font-semibold">Detail Product</button>
        <button onClick={() => navigate("/keranjang")} className="p-2 rounded-md text-xl bg-slate-900 font-semibold">
          <RiShoppingCart2Line />
        </button>
        <button onClick={handleLogout} className="bg-red-400 p-2 rounded-md text-black font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
