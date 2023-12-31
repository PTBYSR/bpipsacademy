import React from "react";
import Image from "next/image";
import instagram from '../../../../public/🦆 icon _instagram_.png'
import twitter from '../../../../public/x.png'
import whatsapp from '../../../../public/whatsapp.png'
import bigLogo from '../../../../public/big-logo.png'
import Link from "next/link";
import { navLinks } from "../Navbar/Navlinks";



const socials = [
  {
    id: 1,
    label: "instagram",
    title: "Instagram",
    icon: "",
    href: "https://www.instagram.com/bpipsacademy/",
    img: instagram
  },
  {
    id: 2,
    label: "whatsapp",
    title: "Whatsapp",
    icon: "",
    href: "https://wa.link/wjivcd",
    img: whatsapp
  },
];

const Footer = () => {
  return (
    <footer className="bg-green py-20 md:px-20 px-5">
      <div className="flex flex-col md:flex-row justify-between md:gap-0 gap-14">
        <div>
          <div className="text-white text-xl font-prompt  uppercase font-bold">
            {" "}
            Socials
          </div>

          <ul className="mt-5 flex flex-col gap-3">
            {
              socials.map((x, index) => (

                <Link key={x.id} href={x.href} target="__blank">
                  <li  className="text-white w-[25px] flex gap-2 items-center text-opacity-70"><Image src={x.img} alt="" /> <div className=" font-inter">{x.title}</div></li>
                </Link>
              ))
            }
          </ul>
        </div>
        <div>
          <div className="text-white text-xl font-prompt  uppercase font-bold">Contact us</div>
          <ul className="mt-5 flex flex-col gap-3">
            <li className="text-white w-[30px] flex gap-2 items-center text-opacity-70"> 08139699860</li>
            <li className="text-white w-[30px] flex gap-2 items-center text-opacity-70">bpipsacademy@gmail.com</li>
          </ul>
        </div>
        <div>
          <div className="text-white text-xl font-prompt  uppercase font-bold">Quick Links</div>
          <ul className="mt-5 flex flex-col gap-3">
            {
              navLinks.map((x,index) => (
                
                <Link key="" href={x.href}>
                  <li key={x.id} className="text-white w-[30px] flex gap-2 items-center text-opacity-70"> <div className=" font-inter">{x.title}</div></li>
                </Link>
              ))
            }
            <li></li>
          </ul>
        </div>
      </div>
      <div className="pt-20 border-t-white border-t border-opacity-60 mt-20">
        <div className="">
          <Image src={bigLogo} alt="" />
        </div>
        <div className="flex md:flex-row flex-col md:justify-between">

          <div className="text-white md:text-sm text-xs text-opacity-60 mt-3">©Copyright Bpips Academy 2023. All rights reserved.</div>
          <div className="text-white  md:text-sm text-xs text-opacity-60 mt-3">Designed and built by <Link className="underline"  href="https://www.instagram.com/pasedigital.co/" target="__blank">Pase Digital</Link></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
