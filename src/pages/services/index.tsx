import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";

const page = () => {
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className="h-[250px] md:h-[400px] flex items-center">
        <div className="md:px-20 px-5">
          <div className="text-violet ml-2 font-inter uppercase text-xs  opacity-90">
            What do we offer
          </div>
          <h1 className=" text-violet text-4xl md:text-6xl font-prompt uppercase font-bold leading-[60px] md:leading-[80px]">
            Our Services
          </h1>
        </div>
      </div>
    </Main>
  );
};

export default page;
