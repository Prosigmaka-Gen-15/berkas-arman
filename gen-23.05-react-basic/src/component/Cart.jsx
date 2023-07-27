import React from "react";

export default function Cart() {
  return (
    <div className="items-center justify-center flex flex-wrap md:m-2 md:p-2">
      <Kartu image={"img/Wireless Earbuds.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/airpods max.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/bosebt.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/bosebt.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/Wireless Earbuds.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/airpods max.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/airpods max.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/bosebt.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
      <Kartu image={"img/bosebt.jpg"} NamaProduct={"Wireless earbuds,IPX8"} HargaProduct={"*89.00"} KeteranganProduct={"Esse elit do anim pariatur cupidatat."} />
    </div>
  );
}
function Kartu({ image, NamaProduct, HargaProduct, KeteranganProduct }) {
  return (
    <div className="m-2 p-2 border-2 rounded-xl w-72">
      <div className="flex-col gap-3 p-2">
        <img src={image} class="h-full w-full" />
        <div>
          <div className="flex justify-between">
            <h5 className="font-semibold lg:flex-wrap">{NamaProduct}</h5>
            <span className="item-end justify-end">{HargaProduct}</span>
          </div>
          <p className="flex justify-start text-sm">{KeteranganProduct}</p>
          <button className="flex rounded-xl px-2 border-2 border-gray-500 hover:bg-green-600">add to cart</button>
        </div>
      </div>
    </div>
  );
}
