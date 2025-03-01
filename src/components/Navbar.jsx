import React, { useState } from "react";

import { NavLink, Link, useSubmit } from "react-router-dom";

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
        <input
          type="text"
          placeholder="Search Products"
          className="h-8 w-96 mt-2 rounded-full  p-2"
        />
        <button className="bg-gray-400 h-8 w-20 rounded-full ml-4 mt-2">
          Search
        </button>
      </div>
      <div className="py-4 w-120  text-xl text-white ">
        <nav>
          <Link to={"/"} className="px-4">
            Deals
          </Link>
          <Link to={"/about"} className="px-4">
            Orders
          </Link>
          <Link to={"/contact"} className="px-4">
            Wishlist
          </Link>
          <Link to="/cart" className="px-2">
            <img
              className="h-8"
              src="https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg"
            />
            Cart
          </Link>
        </nav>
      </div>
    </div>
  );
};
