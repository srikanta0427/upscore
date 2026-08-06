import React, { useState } from "react";
import menu_bar from "../assets/icons/menu_bar.png";
import close from "../assets/icons/close.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#0d0d0d] shadow-md">
      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-white">Upscore</h1>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? close : menu_bar}
            alt=""
            className="w-7 h-7"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={` z-60 absolute left-0 top-full w-full shadow-md backdrop-blur-md bg-black/20 origin-top transition-all duration-300 ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-white">
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Leaderboard</li>
          <li>Community</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;