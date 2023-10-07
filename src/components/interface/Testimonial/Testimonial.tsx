import Subline from "@/components/icons/Subline";
import React from "react";
import stars from "../../../../public/stars.png";
import Image from "next/image";
import red from "../../../../public/big-red.png";
import Faqs from "../Faqs/Faqs";

const testimonials = [
  {
    id: 1,
    name: "Ugo Madu",
    body: "The Academy has helped me in areas which i needed improvement like my trading strategy and most especially my trading psychology.",
  },
  {
    id: 2,
    name: "Michael Ozo",
    body: "B'pips academy has been a game-changer for me.I've learned so much about the markets and how to make sound trading decisions.",
  },
  {
    id: 3,
    name: "Patrick Uchendu",
    body: "In the space of three months,i had known the Basics of forex, market structure, technical analysis e.t.c I'm a proud B'pips Academy Student",
  },
  {
    id: 4,
    name: "Patrick Uchendu",
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

      <div className="flex justify-center mt-5 gap-5 md:flex-row flex-col md:px-0 px-5 items-center">
        {testimonials.map((x) => (
          <div
            key={x.id}
            className="border-white border opacity-60 flex gap-5 py-5 px-4 flex-row"
          >
            {/* <div>
              <Image src={stars} alt="stars" />
            </div> */}
            <div className="w-2/3 flex flex-col items-center">
              <div className="border h-[50px] w-[50px]">

              </div>
              <div className="text-white text-sm text-center mt-3">
                {x.name}
              </div>
            </div>
            <div className="text-start text-white text-xs  mt-3">
              {x.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
