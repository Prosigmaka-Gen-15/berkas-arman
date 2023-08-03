import React from "react";
import { useState } from "react";
import pink from "../assets/pink.jpg";
import pinkAwal from "../assets/pinkAwal.jpg";
import pinkSamping from "../assets/pinkSamping.jpg";
import pinkTutup from "../assets/pinkTutup.jpg";
// belum responsif

const MainContent = ({ item }) => {
  const [gambarAwal, setGambar] = useState(pinkAwal);
  const [angkaAwal, setAngka] = useState(1);
  return (
    <section className="flex my-8 mx-12 container m-3 lg:px-12 ">
      <div className="flex flex-col w-2/6 m-3 shadow-md ">
        <div className="flex flex-col bg-gray-100 justify-center items-center ">
          <img src={gambarAwal} alt={pink} className="w-auto h-96 hover:scale-110 transition-transform duration-500 ease-in-out" />
        </div>
        <div className="flex flex-row gap-4 py-2 my-2 justify-between items-center">
          <div className="flex gap-2 h-24 w-auto bg-gray-100 py-2 m-2">
            <img onClick={() => setGambar(pinkAwal)} src={pinkAwal} alt={pink} className="w-auto h-20 hover:scale-110 transition-transform duration-500 ease-in-out" />
          </div>
          <div className="flex gap-2 h-24 w-auto bg-gray-100 py-2 m-2">
            <img onClick={() => setGambar(pinkSamping)} src={pinkSamping} alt={pink} className="w-auto h-20 hover:scale-110 transition-transform duration-500 ease-in-out" />
          </div>
          <div className="flex gap-2 h-24 w-auto bg-gray-100 py-2 m-2">
            <img onClick={() => setGambar(pinkTutup)} src={pinkTutup} alt={pink} className="w-auto h-20 hover:scale-110 transition-transform duration-500 ease-in-out" />
          </div>
          <div className="flex gap-2 h-24 w-auto bg-gray-100 py-2 m-2">
            <img onClick={() => setGambar(pink)} src={pink} alt={pink} className="w-auto h-20 hover:scale-110 transition-transform duration-500 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-19">
        <div className="flex flex-col shadow-sm">
          <h1 className="font-bold text-4xl hover:text-green-600">{item.namaProduct}</h1>
          <p>Non eiusmod adipisicing occaecat commodo nulla reprehenderit non dolore sunt dolore amet cupidatat.</p>
        </div>
        <div className="flex flex-col shadow-sm mt-3">
          <p className="font-bold text-2xl">$549 or 99.99/month</p>
          <p>Pariatur ullamco adipisicing magna sint.</p>
        </div>
        <div className="flex flex-col shadow-sm mt-3">
          <h1 className="font-bold text-2xl">Chose a Color</h1>
          <div className="flex gap-2 pt-5 pb-5">
            <button className="ml-2 w-8 h-8 flex bg-gradient-to-b from-red-700 to-pink-500 hover:to-red-800 rounded-full" data-warna="pink"></button>
            <button className="ml-2 w-8 h-8 flex bg-gradient-to-b from-gray-600 to-black hover:to-gray-800 rounded-full" data-warna="hitam"></button>
            <button className="ml-2 w-8 h-8 flex bg-gradient-to-b from-green-400 to-gray-800 hover:to-green-600 rounded-full" data-warna="hijau"></button>
            <button className="ml-2 w-8 h-8 flex bg-gradient-to-b from-blue-900 to-gray-500 hover:to-blue-500 rounded-full" data-warna="abu-abu"></button>
          </div>
        </div>
        <div className="flex flex-row shadow-sm mt-3">
          <div className="flex flex-row w-24 justify-between px-3 py-1 border border-gray-400 items-center rounded-full bg-gray-200">
            <button onClick={() => setAngka(angkaAwal - 1)} className="w-4 h-4 flex items-center justify-center text-green-700 rounded-full">
              -
            </button>
            <p className="text-green-700">{angkaAwal}</p>
            <button onClick={() => setAngka(angkaAwal + 1)} className="w-4 h-4 flex items-center justify-center text-green-700 rounded-full">
              +
            </button>
          </div>
          <p className="ml-5">
            Only <span className="text-orange-500">12 items</span> Left
            <br />
            Dont miss it
          </p>
        </div>
        <div className="flex flex-row shadow-sm mt-3 gap-4 p-6">
          <button className="flex justify-center items-center w-36 px-3 bg-green-700 rounded-2xl text-white hover:bg-green-900">Buy Now</button>
          <button className="flex justify-center items-center w-40 px-9 border border-green-800 rounded-2xl text-green-700 hover:bg-green-800 hover:text-white">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
