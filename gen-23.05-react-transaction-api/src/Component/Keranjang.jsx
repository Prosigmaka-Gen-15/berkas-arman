import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, IncreaseAmount, DecreaseAmount } from "../Store/ProductSlice";

const Keranjang = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((cart, id) => (
        <div key={id} className="flex flex-col gap-2 p-3">
          <div className="flex bg-blue-400 rounded-xl px-4 py-4 mx-10 my-2 gap-5">
            <div className="px-10">
              <img className=" h-64 w-auto object-cover cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out" src={cart.gambar} />
            </div>
            <div className="flex items-center cursor-pointer text-xl gap-5 font-semibold">
              <h1>{cart.nama}</h1>
              <h1>Rp {parseInt(cart.harga * cart.amount).toLocaleString()}</h1>
            </div>
            <div className="flex text-xl font-semibold items-center justify-center">
              <div className="flex flex-row w-24 justify-between px-3 py-1 border border-gray-400 items-center rounded-full bg-gray-200">
                <button onClick={() => dispatch(DecreaseAmount(cart.id))} className="w-4 h-4 flex items-center justify-center text-green-700 rounded-full">
                  -
                </button>
                <p className="text-green-700">{cart.amount}</p>
                <button onClick={() => dispatch(IncreaseAmount(cart.id))} className="w-4 h-4 flex items-center justify-center text-green-700 rounded-full">
                  +
                </button>
              </div>
              <button onClick={() => dispatch(DeleteProduct(id))} className="bg-red-400 rounded-md px-3 m-3">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Keranjang;
