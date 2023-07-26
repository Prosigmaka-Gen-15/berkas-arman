import React from "react";

export default function Content() {
  return (
    <div>
      <Kartu></Kartu>
      <Kartu></Kartu>
      <Kartu></Kartu>
      <Kartu></Kartu>
    </div>
  );
}

function Kartu() {
  return (
    <div className="items-center justify-center flex flex-wrap md:m-2 md:p-2">
      <div className="m-2 p-2 border-2 rounded-xl">
        <div className="flex-col gap-5 p-3">
          <img src="img/keranjang.jpg" alt="keranjang" class="h-full w-auto" />
          <div>
            <h5 className="font-semibold lg:flex-wrap">
              Wireless Earbuds, IPX8 <span className="item-end">*89.90</span>
            </h5>
            <p>Velit nisi minim in nisi.</p>
            <button className="rounded-xl pl-2 pr-2 border-2 border-gray-500 hover:bg-green-600">add to cart</button>
          </div>
        </div>
      </div>
      <div className="m-2 p-2 border-2 rounded-xl">
        <div className="flex-col gap-5 p-3">
          <img src="img/keranjang.jpg" alt="keranjang" class="h-full w-auto" />
          <div>
            <h5 className="font-semibold">
              Wireless Earbuds, IPX8 <span className="item-end">*89.90</span>
            </h5>
            <p>Velit nisi minim in nisi.</p>
            <button className="rounded-xl pl-2 pr-2 border-2 border-gray-500 hover:bg-green-600">add to cart</button>
          </div>
        </div>
      </div>
      <div className="m-2 p-2 border-2 rounded-xl">
        <div className="flex-col gap-5 p-3">
          <img src="img/keranjang.jpg" alt="keranjang" class="h-full w-auto" />
          <div>
            <h5 className="font-semibold">
              Wireless Earbuds, IPX8 <span className="item-end">*89.90</span>
            </h5>
            <p>Velit nisi minim in nisi.</p>
            <button className="rounded-xl pl-2 pr-2 border-2 border-gray-500 hover:bg-green-600">add to cart</button>
          </div>
        </div>
      </div>
      <div className="m-2 p-2 border-2 rounded-xl">
        <div className="flex-col gap-5 p-3">
          <img src="img/keranjang.jpg" alt="keranjang" class="h-full w-auto" />
          <div>
            <h5 className="font-semibold">
              Wireless Earbuds, IPX8 <span className="item-end">*89.90</span>
            </h5>
            <p>Velit nisi minim in nisi.</p>
            <button className="rounded-xl pl-2 pr-2 border-2 border-gray-500 hover:bg-green-600">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
