import Subline from "@/components/icons/Subline";
import Button from "@/components/ui/Button/Button";
import React from "react";
import shield from "../../../../public/shield.png";
import Image from "next/image";
import clsx from "clsx";

const Card = ({ label, title, body, buttonText, id, img, className }: any) => {
  return (
    <div
      className={clsx(
        [className],
        "flex  md:h-[540px] bg-[#2C2D48] flex-col-reverse md:flex-row mt-52 md:my-10 px-5 md:px-20",
        id === 1 && ["md:flex-row-reverse"],
        id === 3 && ["md:flex-row-reverse"]
      )}
    >
      <div className="md:w-1/2   pt-10 flex justify-center flex-col ">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-1">
            <div className="hidden md:block">
              <Subline />
            </div>
            <div className=" uppercase text-purple font-inter text-xs font-medium tracking-[1.4px] text-white">
              {label ? label : "welcome"}
            </div>
          </div>
          <div className="text-white text-center md:text-start font-prompt uppercase text-3xl md:text-4xl font-semibold leading-[39px] md:leading-[70px] ">
            {title ? title : "Forex Mentorship"}
          </div>
        </div>
        <div className="md:w-2/3 text-sm text-white text-center md:text-start opacity-70 font-light font-inter my-10 leading-[27px] ">
          {body
            ? body
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat! Ducimus facere dolore veritatis alias debitis itaque placeat in est!"}
        </div>
        <div className=" flex justify-center ">
          <Button className="">{buttonText ? buttonText : "get started"}</Button>
        </div>
      </div>
      <div className="md:w-1/2 overflow-hidden flex justify-center items-center">
        <Image
          priority
          src={img}
          alt="gym member gyming"
          className="w-[250px]"
        />
      </div>
    </div>
  );
};

export default Card;
