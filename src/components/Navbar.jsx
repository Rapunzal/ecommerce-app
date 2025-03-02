import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Link, useSubmit } from "react-router-dom";
import { Input } from "./Input";

export const Navbar = () => {
  // const [sticky, setSticky] = useState(false);

  // function setStick() {
  //   if (window.scrollY >= 390) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // }
  // window.addEventListener("scroll", setStick);
  // let x = sticky ? "fixed" : "";
  return (
    <div className=" w-full h-16  bg-black text-white flex justify-between fixed left-0 right-0 z-50 py-1">
      <div>
        <img
          className="h-14"
          src="https://preview.redd.it/86rlwmn6scs81.png?width=640&crop=smart&auto=webp&s=9bce044c2cbad65c62319933e5ff3be543fb5281"
        />
      </div>
      <div className="flex justify-center align-middle ml-4 mt-2 ">
        <Input />
      </div>
      <div className="py-4 w-96  text-xl text-white ">
        <nav className="flex justify-evenly mr-11">
          <Link to={"/"} className="px-6">
            Deals
          </Link>
          <Link to={"/about"} className="px-6">
            Orders
          </Link>
          <Link to={"/contact"} className="px-6">
            Wishlist
          </Link>
          <Link to={"/cart"} className="px-2 w-8 mr-4">
            <FaShoppingCart className="h-6 w-8" />
          </Link>
        </nav>
      </div>
    </div>
  );
};
