import Subline from "@/components/icons/Subline";
import React, { useEffect, useState } from "react";
import stars from "../../../../public/stars.png";
import Image from "next/image";
import red from "../../../../public/big-red.png";
import Faqs from "../Faqs/Faqs";
import Marquee from "react-fast-marquee";
import zion from "../../../../public/test2.jpeg";
import clara from "../../../../public/test3.jpeg";
import wild from "../../../../public/test4.jpeg";
import corper from "../../../../public/test1.jpeg";
import corperpic from "../../../../public/1.jpeg";
import zionpic from "../../../../public/2.jpeg";
import clarapic from "../../../../public/3.jpeg";
import wildpic from "../../../../public/4.jpeg";

const testimonials = [
  {
    id: 1,
    screenshot: clarapic,
    name: "Uche Clara",
    img: clara,
    body: "The Academy has helped me in areas which i needed improvement like my trading strategy and most especially my trading psychology. ...read more",
  },
  {
    id: 2,
    screenshot: wildpic,
    img: wild,
    name: "Confidence Joe",
    body: "B'pips academy has been a game-changer for me.I've learned so much about the markets and how to make sound trading decisions. ...read more",
  },
  {
    id: 3,
    screenshot: corperpic,
    name: "Vibrant Mayor",
    img: corper,
    body: "In the space of three months,i had known the Basics of forex, market structure, technical analysis e.t.c I'm a proud B'pips Academy Student ...read more",
  },
  {
    id: 4,
    screenshot: zionpic,
    name: "Zion Chima",
    img: zion,
    body: "Bpips Academy has helped me change my mindset and psychology about life and finance, helping me to know certain things can be achieved ...read more",
  },
];


const Modal = ({ isOpen, imageUrl, reset }:any) => {
  const [open,setOpen] = useState(false)
  useEffect(() => {
    setOpen(reset)
  } ,[reset])
  if (!isOpen) return null;
  
  const handleClose = () => {
    setOpen(x => !x)
    console.log(open)
  }

  return (
    <div onClick={() => handleClose()} className={`hidden fixed bg-[#000] bg-opacity-30 inset-0  ${ open ? "flex" : "hidden" } justify-center items-center z-50`}>
    <div className="modal-overlay" onClick={() => handleClose()}></div>
    <div className="modal-content bg-white p-6 rounded shadow-lg">
      <span
        className="modal-close absolute top-0 right-0 cursor-pointer text-3xl"
        onClick={() => handleClose()}
      >
        &times;
      </span>
      <Image src={imageUrl} alt="Screenshot" className="w-full" />
    </div>
  </div>
  );
};



const Testimonial = () => {
  const [index,setIndex] = useState(0)
  const [screenshot,setScreenshot] = useState("")
  const [openIndex, setOpenIndex] = useState(null);
  // const [open, isOpen] = useState(false)

  const handleClick = (index:any, screenshot:any) => {
    setIndex(index)
    setScreenshot(screenshot)
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleClickMb = (index:any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-green py-20 md:py-40 relative">
      {/* <div className="right-0 absolute bottom-0">
        <Image src={red} alt="" />
      </div> */}
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 mb-3">
          <Subline />
          <div className="uppercase text-white text-purple font-inter text-xs font-medium tracking-[1.4px]">
            testimonials
          </div>
          <Subline />
        </div>
        {/* <div className="text-white text-center uppercase text-5xl font-semibold font-prompt leading-[70px] md:leading-[45px]">
          Words from our students
        </div> */}
      </div>

      {/* DSKTP */}

      <div className="hidden  md:flex justify-center mt-5 gap-5 md:flex-row flex-col md:px-0 px-5 items-center">
        <Marquee speed={15} >
          {/* <Modal isOpen={openIndex === index} imageUrl={x.screenshot} /> */}
        {testimonials.map((x, index) => (
          <div
            onClick={() => handleClick(index,x.screenshot)}
            
            key={x.id}
          >
            <div className="w-auto md:w-[600px] h-[400px] border-white border border-opacity-60 flex gap-5 py-5 md:p-10 px-4 flex-row md:flex-col-reverse md:items-center md:justify-around md:mr-5">
              <div className="w-2/3 flex flex-col items-center">
                <div className=" h-[50px] w-[60px]  md:w-[80px] md:h-auto">
                  <Image src={x.img} alt="" layout="fit"/>
                </div>
                <div className="text-white text-opacity-70 leading-[20px] text-sm text-center md:text-xl mt-3">
                  {x.name}
                </div>
              </div>
              <div className="md:text-center text-start text-white text-opacity-70 md:text-lg text-xs  mt-3">
                {x.body}
              </div>
            </div>
            {/* <div className={`${openIndex === index ? "block" : "hidden"}`}>
              <Image src={x.screenshot} alt="" />
            </div> */}
          </div>
        ))}
        </Marquee>
      </div>
        <Modal isOpen={openIndex === index} imageUrl={screenshot} reset={true}/>
      {/* MOBILE */}

      <div className="md:hidden flex justify-center mt-5 gap-5 md:flex-row flex-col md:px-0 px-5 items-center">
        {testimonials.map((x, index) => (
          <div
            onClick={() => handleClickMb(index)}
            
            key={x.id}
          >
            <div className="w-auto md:w-[600px]  border-white border border-opacity-60 flex gap-5 py-5 md:p-10 px-4 flex-row md:flex-col-reverse md:items-center">
              <div className="w-2/3 flex flex-col items-center">
                <div className=" h-[50px] w-[50px]  md:w-auto md:wh-auto">
                  <Image src={x.img} alt="" layout=""/>
                </div>
                <div className="text-white text-opacity-70 leading-[20px] text-sm text-center md:text-xl mt-3">
                  {x.name}
                </div>
              </div>
              <div className="md:text-center text-start text-white text-opacity-70 md:text-lg text-xs  mt-3">
                {x.body}
              </div>
            </div>
            <div className={`${openIndex === index ? "block" : "hidden"}`}>
              <Image src={x.screenshot} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex hidden justify-center mt-5 gap-5 md:flex-row flex-col md:px-0 px-5 items-center"></div>
      <div></div>
    </div>
  );
};

export default Testimonial;
