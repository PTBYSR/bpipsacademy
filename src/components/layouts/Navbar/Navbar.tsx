import React, { useState,useEffect, useRef } from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { navLinks } from "./Navlinks";
// import Hamburger from "@/components/icons/Hamburger";''
import clsx from "clsx";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import { Cross as Hamburger } from "hamburger-react";
import { motion, useAnimation } from "framer-motion";


const Navbar = () => {
  const [open, isOpen] = useState(false);

  const subRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // Define the animation sequence
    controls.start({
      x: 0, // End position (0 means no change)
      opacity: 1, // Fully visible
      transition: { duration: 0.8 }, // Animation duration
    });
  }, [controls]);

  const toggleMenu = () => {
    isOpen(!open);
  };
  return (
    <nav className=" md:px-10 z-[10000] relative bg-white h-[70px] md:h-[90px] flex items-center justify-between">
      <Link href="/">
        <motion.div 
        
        ref={subRef}
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
        className="pl-5">
          <Image src={logo} alt="" />
        </motion.div>
      </Link>

      {/* <Hamburger fill="#2C2D48" w="10"/> */}

      <motion.div 
      ref={subRef}
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
      className="pr-5 md:hidden">
        <Hamburger toggle={isOpen} toggled={open} />
      </motion.div>

      <ul
        className={clsx(
          ["z-[1000] flex  absolute flex-col top-[70px] w-full "],
          !open ? ["hidden"] : ["flex"]
        )}
      >
        {navLinks.map((x) => (
          <Link key={x.id} href={x.href}>
            <li
              className="bg-white text-center py-6 md:border-b-0 border-b border-opacity-75 uppercase text-xs font-semibold tracking-[1px] font-inter"
              key={x.id}
            >
              {x.title}
            </li>
          </Link>
        ))}
        <Link href="/join">
          <li className="bg-red text-center py-6 md:border-b-0 border-b text-white border-opacity-75 uppercase text-xs font-semibold tracking-[1px] font-inter">
            join the hunt
          </li>
        </Link>
      </ul>

      <div className="hidden md:flex gap-10 items-center">
        <ul className="flex gap-10 ">
          {navLinks.map((x) => (
            <Link key={x.id} href={x.href}>
              <li className="uppercase text-xs font-semibold tracking-[1px] font-inter">
                {x.title}
              </li>
            </Link>
          ))}
        </ul>

        <Button>join the hunt</Button>
      </div>
    </nav>
  );
};

export default Navbar;
