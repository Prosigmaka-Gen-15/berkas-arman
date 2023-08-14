import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, cart) => total + cart.harga * cart.amount, 0);

  return (
    <div className="bg-blue-400 rounded-lg bottom-0 w-full sticky">
      <footer className="mx-auto flex flex-col md:gap-0 md:flex-row items-center justify-end my-0 p-3">
        <div>
          <div className="flex justify-end items-end m-3 p-3">
            <h3>Harga Total : Rp {parseInt(totalPrice).toLocaleString()}</h3>
          </div>
          <div className="flex justify-end items-end p-3 mx-3 my-2">
            <button onClick={() => navigate("/keranjang/pembayaran")} className="bg-green-400 rounded-md p-3 m-3">
              Checkout
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
