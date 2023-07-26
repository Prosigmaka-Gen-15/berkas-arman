import React from "react";

export default function navbar() {
  return (
    <nav class="py-6 px-3 bg-green-500 drop-shadow-2xl mb-5 ml-3 mr-3 mt-3">
      <section class="container mx-auto lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
        <div class="flex items-center w-30 h-8">
          <img src="img/keranjang.jpg" alt="keranjang" class="h-full w-auto" />
          <span class="font-bold text-xl">Shopcart</span>
        </div>
        <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 justify-center list-none font-semibold text-sm">
          <li>Categories</li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </div>
        <div class="flex flex-col lg:flex-row list-none gap-2 lg:gap-4 font-semibold text-sm items-center lg:pl-10">
          <input type="search" class="rounded-xl p-2" placeholder="Search Product" />
          <li>Account</li>
          <li>Cart</li>
        </div>
      </section>
    </nav>
  );
}
