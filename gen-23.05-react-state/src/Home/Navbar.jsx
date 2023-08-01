import { useNavigate } from "react-router-dom";
import keranjang from "/src/img/keranjang.jpg";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="py-6 px-3 bg-green-500 drop-shadow-2xl mb-5 ml-3 mr-3 mt-3">
      <section className="container mx-auto lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
        <div onClick={() => navigate("/")} className="flex items-center w-30 h-8 cursor-pointer">
          <img src={keranjang} alt="keranjang" className="h-full w-auto" />
          <span className="font-bold text-xl">Shopcart</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 justify-center list-none font-semibold text-sm">
          <li>Categories</li>
          <li>Deals</li>
          <li>Whats New</li>
          <li>Delivery</li>
        </div>
        <div className="flex flex-col lg:flex-row list-none gap-2 lg:gap-4 font-semibold text-sm items-center lg:pl-10">
          <input type="search" className="rounded-xl p-2" placeholder="Search Product" />
          <li>Account</li>
          <li>Cart</li>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
