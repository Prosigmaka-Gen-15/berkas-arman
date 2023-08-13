import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Pembayaran = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [selectedShipping, setSelectedShipping] = useState(0);
  const jasaPengiriman = 90;
  const biayaAdmin = 1000;

  const totalPrice = cart.reduce((total, cart) => total + cart.harga * cart.amount, 0);

  const submitCheckOut = () => {
    alert("berhasil !! silahkan pesan lagi :) ");
    window.location.reload(navigate("/"));
  };

  const handleShippingChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setSelectedShipping(selectedValue);
  };
  const optionsPengiriman = [
    { nama: "JNE", harga: 100 },
    { nama: "JNT", harga: 150 },
    { nama: "SiCepat", harga: 200 },
  ];

  const totalPriceFinal = cart.reduce((total, item) => total + item.harga * item.amount, 0) + selectedShipping + biayaAdmin;

  const metodePembayaran = [
    {
      nama: "COD (Cash On Delivery)",
    },
    {
      nama: "ShopePay",
    },
    {
      nama: "BCA",
    },
    {
      nama: "MANDIRI",
    },
    {
      nama: "Kartu Kredit / Debit",
    },
  ];
  const detailPembayaran = [
    {
      nama: "Subtotal Produk",
      total: totalPrice,
      className: "text-right p-2 mx-2",
    },
    {
      nama: "Total Ongkos Kirim",
      total: selectedShipping,
      className: "text-right p-2 mx-2",
    },
    {
      nama: "Biaya Layanan",
      total: "1.000",
      className: "text-right p-2 mx-2",
    },
    {
      nama: "Total Pembayaran",
      total: totalPriceFinal,
      className: "text-xl text-red-600 font-bold text-right p-2 mx-2",
    },
  ];
  return (
    <div>
      {/* header */}
      <nav className="py-6 px-3 bg-green-500 drop-shadow-2xl mb-5 ml-3 mr-3 mt-3 ">
        <section className="container mx-auto lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          <div onClick={() => navigate("/")} className="flex items-center w-30 h-8 cursor-pointer">
            <span className="font-bold text-xl">Shopcart</span>
          </div>
          <div className="flex flex-col lg:flex-row list-none gap-2 lg:gap-4 font-semibold text-sm items-center lg:pl-10 cursor-pointer">
            <input type="search" className="rounded-xl p-2" placeholder="Search Product" />
            <li>Check Out</li>
          </div>
        </section>
      </nav>
      {/* detail product yang dipesan */}
      <div className="m-4 flex justify-center">
        <div className="w-11/12 border-r border-b border-l rounded-xl border-gray-400 bg-blue-400 p-4 flex flex-col justify-between leading-normal">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Harga</th>
                <th>Jumlah </th>
                <th>Total Product</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cart, id) => {
                return (
                  <tr>
                    <td className="flex flex-row gap-4 items-center p-2">
                      <img src={cart.gambar} className="h-16" />
                      {cart.nama}
                    </td>
                    <td className="text-center">Rp. {cart.harga}</td>
                    <td className="text-center">{cart.amount}</td>
                    <td className="text-center">{cart.amount * cart.harga}</td>
                  </tr>
                );
              })}
              <tr>
                <td className="text-right font-bold p-2" colSpan={3}>
                  Sub total Product ({totalPrice} )
                </td>
                <td className="text-center p-2 text-red-600 font-bold">Rp{totalPrice}</td>
              </tr>
              <tr>
                <td className="font-bold text-right p-2" colSpan={3}>
                  Opsi Pengiriman :
                  {optionsPengiriman.map((option, index) => (
                    <label className="mx-2" key={index}>
                      <input type="radio" name={option.nama} value={option.harga} onChange={handleShippingChange} checked={selectedShipping === option.harga} />
                      {option.nama}
                    </label>
                  ))}
                </td>
                <td className="text-center p-2">Rp{selectedShipping}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* metode Pembayaran */}
      <div className="m-4 flex justify-center">
        <div className="w-11/12 border-r border-b border-l rounded-xl border-blue-400 bg-blue-400 p-4 flex flex-col justify-between leading-normal">
          {/* pilih metode pembayaran */}
          <div className="flex gap-6 items-center border-b-2 py-4">
            <h1 className="text-lg font-bold">Metode Pembayaran</h1>
            {metodePembayaran.map((metode, index) => {
              return (
                <button key={index} className="bg-green-400 rounded-md p-2 font-semibold hover:bg-green-600">
                  {metode.nama}
                </button>
              );
            })}
          </div>
          {/* Detail pembayaran */}
          <div className="flex flex-col items-end py-4 gap-4">
            <div>
              <table>
                {detailPembayaran.map((detail, index) => {
                  return (
                    <tr>
                      <td className="text-left pr-6 mx-2">{detail.nama}</td>
                      <td className={detail.className}>Rp{detail.total}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="flex gap-6">
              <button onClick={() => navigate("/keranjang")} className="bg-red-400 hover:bg-red-800 w-32 rounded-lg">
                Cancel
              </button>
              <button onClick={submitCheckOut} className="bg-green-400 hover:bg-green-800 w-32 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
