import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Navlinks";
// import Hamburger from "@/components/icons/Hamburger";''
import clsx from "clsx";
import Button from "@/components/ui/Button/Button";
import { Cross as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  const toggleMenu = () => {
    isOpen(!open);
  };
  return (
    <nav className=" md:px-10 z-[10000] relative bg-white h-[70px] md:h-[90px] flex items-center justify-between">
      <div className="pl-5">
        <Image src={logo} alt="" />
      </div>

      {/* <Hamburger fill="#2C2D48" w="10"/> */}

      <div className="pr-5">
        <Hamburger toggle={isOpen} toggled={open} />
      </div>

      <ul
        className={clsx(
          ["z-[1000] flex  absolute flex-col top-[70px] w-full "],
          !open ? ["hidden"] : ["flex"]
        )}
      >
        {navLinks.map((x) => (
          <li
            className="bg-white text-center py-6 md:border-b-0 border-b border-opacity-75 uppercase text-xs font-semibold tracking-[1px] font-inter"
            key={x.id}
          >
            {x.title}
          </li>
        ))}
        <li className="bg-red text-center py-6 md:border-b-0 border-b text-white border-opacity-75 uppercase text-xs font-semibold tracking-[1px] font-inter">
          join the hunt
        </li>
      </ul>

      <div className="hidden md:flex gap-10 items-center">
        <ul className="flex gap-10 ">
          {navLinks.map((x) => (
            <li
              className="uppercase text-xs font-semibold tracking-[1px] font-inter"
              key={x.id}
            >
              {x.title}
            </li>
          ))}
        </ul>

        <Button>join the hunt</Button>
      </div>
    </nav>
  );
};

export default Navbar;
