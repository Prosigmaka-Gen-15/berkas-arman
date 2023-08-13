import React from "react";
import { BiSolidDashboard, BiShoppingBag, BiLogoProductHunt } from "react-icons/bi";
import { MdSettingsSuggest } from "react-icons/md";
import avatar from "../../public/img/avatar.jpg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
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
    <div className=" flex flex-col h-screen w-64 text-white bg-gray-950 py-6 px-9 ">
      <div className="flex flex-row justify-center items-center">
        <h1 onClick={() => navigate("/")} className="font-semibold items-center justify-center m-4 cursor-pointer">
          Product
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <ul>
          <img onClick={() => navigate("/")} className="w-24 h-22 rounded-full cursor-pointer" src={avatar} alt="avatar" />
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

export default Sidebar;
