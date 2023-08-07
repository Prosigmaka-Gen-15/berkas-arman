import React from "react";
import avatar from "../../public/img/SideBarImg/avatar.jpg";
import { BiSolidDashboard, BiShoppingBag, BiLogoProductHunt } from "react-icons/bi";
import { MdSettingsSuggest } from "react-icons/md";

const SideBar = () => {
  const menu = [
    {
      name: "Dashboard",
      icon: <BiSolidDashboard />,
    },
    {
      name: "Product",
      icon: <BiLogoProductHunt />,
    },
    {
      name: "Shop",
      icon: <BiShoppingBag />,
    },
    {
      name: "Settings",
      icon: <MdSettingsSuggest />,
    },
  ];
  return (
    <div className="h-screen border-r border-gray-800 w-64 text-white bg-gray-950">
      <div className="flex flex-row justify-center items-center">
        <h1 className="font-semibold items-center justify-center m-4">Product</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <ul>
          <img className="w-24 h-22 rounded-full" src={avatar} alt="avatar" />
          {menu.map((val, index) => {
            return (
              <li key={index} className="flex flex-row items-center mt-7 cursor-pointer">
                <div className="mr-5">{val.icon}</div>
                <div>{val.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
