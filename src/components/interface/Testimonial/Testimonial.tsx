import Subline from "@/components/icons/Subline";
import React from "react";
import stars from "../../../../public/stars.png";
import Image from "next/image";
import red from "../../../../public/big-red.png";
import Faqs from "../Faqs/Faqs";
import Marquee from "react-fast-marquee";
import zion from "../../../../public/test2.jpeg";
import clara from "../../../../public/test3.jpeg";
import wild from "../../../../public/test4.jpeg";
import corper from "../../../../public/test1.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Uche Clara",
    img: clara,
    body: "The Academy has helped me in areas which i needed improvement like my trading strategy and most especially my trading psychology.",
  },
  {
    id: 2,
    img: wild,
    name: "Confidence Joe",
    body: "B'pips academy has been a game-changer for me.I've learned so much about the markets and how to make sound trading decisions.",
  },
  {
    id: 3,
    name: "Vibrant Mayor",
    img: corper,
    body: "In the space of three months,i had known the Basics of forex, market structure, technical analysis e.t.c I'm a proud B'pips Academy Student",
  },
  {
    id: 4,
    name: "Zion Chima",
    img: zion,
    body: "Bpips Academy has helped me change my mindset and psychology about life and finance, helping me to know certain things can be achieved",
  },
];

const Testimonial = () => {
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

      {/* MOBILE */}
      <div className="md:hidden flex justify-center mt-5 gap-5 md:flex-row flex-col md:px-0 px-5 items-center">
        {testimonials.map((x) => (
          <div
            key={x.id}
            className="w-auto md:w-[400px] border-white border border-opacity-60 flex gap-5 py-5 px-4 flex-row"
          >
            {/* <div>
              <Image src={stars} alt="stars" />
            </div> */}
            <div className="w-2/3 flex flex-col items-center">
              <div className=" h-[50px] w-[50px]">
                <Image src={x.img} alt="" />
              </div>
              <div className="text-white text-opacity-70 leading-[20px] text-sm text-center mt-3">
                {x.name}
              </div>
            </div>
            <div className="text-start text-white text-opacity-70 text-xs  mt-3">{x.body}</div>
          </div>
        ))}
      </div>
      <div className="md:flex hidden justify-center mt-5 gap-5 md:flex-row flex-col md:px-0 px-5 items-center">
        {/* DESKTOP */}
        <Marquee>
          {testimonials.map((x) => (
            <div
              key={x.id}
              className="w-auto md:w-[400px] h-[200px] border-white border opacity-60 flex gap-5 py-5 px-4 flex-row items-center"
            >
              {/* <div>
              <Image src={stars} alt="stars" />
            </div> */}
              <div className="w-2/3 flex flex-col items-center">
                <div className="border h-[50px] w-[50px]"></div>
                <div className="text-white text-sm text-center mt-3">
                  {x.name}
                </div>
              </div>
              <div className="text-start text-white text-xs  mt-3">
                {x.body}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
