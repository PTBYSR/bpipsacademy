import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Navlinks";
import Hamburger from "@/components/icons/Hamburger";
import clsx from "clsx";
import Button from "@/components/ui/Button/Button";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  const toggleMenu = () => {
    isOpen(!open);
  };
  return (
    <nav className="px-5 md:px-10 z-[10] relative bg-white h-[70px] md:h-[90px] flex items-center justify-between">
      <div>
<Image src={logo} alt=""/>

      </div>
      <div className="hidden md:flex gap-10 items-center">
        <ul className="flex gap-10 ">
          {
            navLinks.map((x) => (
              <li className="uppercase text-xs font-semibold tracking-[1px] font-inter"  key={x.id}>{x.title}</li>
            ))
          }
        </ul>
        <Button>
          join the hunt
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
