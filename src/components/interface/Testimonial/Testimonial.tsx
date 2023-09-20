import Subline from "@/components/icons/Subline";
import React from "react";
import stars from '../../../../public/stars.png'
import Image from "next/image";
import red from '../../../../public/big-red.png'
import Faqs from "../Faqs/Faqs";



const testimonials = [
    {
        id: 1,
        name: "Ugo Madu",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur sed quaerat itaque. Esse laboriosam obcaecati non, facilis distinctio iure!",
    },
    {
        id: 2,
        name: "Michael Ozo",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur sed quaerat itaque. Esse laboriosam obcaecati non, facilis distinctio iure!",
    },
    {
        id: 3,
        name: "Patrick Uchendu",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati pariatur sed quaerat itaque. Esse laboriosam obcaecati non, facilis distinctio iure!",
    },
]

const Testimonial = () => {
  return (
    <div className="bg-lime py-20 md:py-40 relative">
        <div className="right-0 absolute bottom-0"><Image src={red} alt="" /></div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2 mb-3">
            <Subline />
            <div className="uppercase text-white text-purple font-inter text-xs font-medium tracking-[1.4px]">
              testimonials
            </div>
            <Subline />
          </div>
          <div className="text-white text-center uppercase text-5xl font-semibold font-prompt leading-[70px] md:leading-[45px]">
            Words from our students
          </div>
        </div>


      <div className="flex justify-center mt-20 gap-5 md:flex-row flex-col md:px-0 px-5 items-center">
        {
            testimonials.map((x) => (

        <div key={x.id} className="border-white border opacity-60 w-[300px] py-10 px-5">
            <div>
                <Image src={stars} alt="stars" />
            </div>
            <div className="text-white text-opacity-60 text-center mt-3">
                {x.body}
            </div>
            <div className="text-white text-lg text-center mt-3">
               {x.name}
            </div>
        </div>
            ))
        }
      </div>
    </div>
  );
};

export default Testimonial;
