import React from "react";
import avatar from "../../public/img/SideBarImg/avatar.jpg";

const Card = () => {
  return (
    <>
      <div className="flex flex-col gap-2 h-full p-12 bg-blue-400 rounded-xl ">
        <div className="flex items-center justify-center hover:bg-gray-100 rounded-xl px-4 py-4 transition ease-in-out duration-300 bg-blue-400">
          <img src={avatar} />
        </div>
        <div className="flex flex-row justify-between cursor-pointer">
          <h1 className="text-xl font-semibold">nama</h1>
          <h1 className="text-xl font-semibold">harga</h1>
        </div>
        <div className="flex items-center">
          <p>deskripsi</p>
        </div>
        <div className="flex items-center">
          <button className="transition ease-in-out duration-300 flex justify-center border border-black rounded-3xl px-4 py-1 font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
