import Button from "@/components/ui/Button/Button";
import React from "react";
import Image from "next/image";


const BlogCard = ({img, title, id, date}:any) => {
  return (
    <div className="flex flex-col w-full md:w-[370px] border-white border-opacity-60 border">
      <div className="h-[275px] w-full overflow-hidden relative">
        <div className="">
          <Image layout="fit" priority src={img} alt="" />
        </div>
      </div>
      <div className="h-[290px] w-full bg-darker px-9 py-6 flex flex-col justify-between">
        <div>
          <div className="">
            <div className="text- font-inter text-white opacity-50 ">
             {date}
            </div>
          </div>
          <div className="font-prompt tracking-[1px] leading-8 text-xl text-white uppercase font-bold ">
            {title}
          </div>
        </div>
        <div className="text-sm opacity-60 text-white font-inter font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
          quisquam.
        </div>
        <div>
          <Button>learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
