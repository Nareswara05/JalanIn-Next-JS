import React from "react";
import { logo } from "../lib/assets/utils/icon";
import { logoImg } from "../lib/assets/utils/image";

const Navbar = () => {
  const nav = [
    {
      id: 1,
      menu: "Home",
      href : "/home"
    },
    {
      id: 2,
      menu: "Calendar",
      href : "/calendar"
    },
    {
      id: 3,
      menu: "Favorite",
      href : "/favorite"
    },
    {
      id: 4,
      menu: "Contact",
      href : "/contact"
    },
  ];

  return (
    <div className="w-full fixed top-0 p-4 bg-white shadow-md  flex justify-between items-center">
      <div className="flex flex-row">
        <img className="w-full" src={logoImg} alt="" />
        <img className="w-full" src={logo} alt="" />
      </div>
      <div className="flex text-gray-200 gap-3">
        {nav.map((navItem) => (
          <a href={navItem.href}><h3 key={navItem.id} className=" font-semibold">{navItem.menu}</h3></a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
