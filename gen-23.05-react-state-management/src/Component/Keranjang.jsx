import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct } from "../Store/ProductSlice";

const Keranjang = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cart.map((cart, id) => (
        <div key={id} className="flex flex-col gap-2 m-3">
          <div className="flex bg-blue-400 rounded-xl px-4 py-4 mx-10 my-2 gap-5">
            <div className="px-10">
              <img className=" h-64 w-auto object-cover cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out" src={cart.gambar} />
            </div>
            <div className="flex items-center cursor-pointer text-xl gap-5 font-semibold">
              <h1>{cart.nama}</h1>
              <h1>Rp.{cart.harga}</h1>
            </div>
            <div className="flex text-xl font-semibold items-center justify-center">
              <button onClick={() => dispatch(DeleteProduct(id))} className="bg-red-400 rounded-md px-3 m-3">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Keranjang;
