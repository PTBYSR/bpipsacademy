import Banner from "@/components/common/Banner/Banner";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";

const About = () => {
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
            who is B&apos;pips Forex Academy
          </div>
          <h1 className=" text-violet text-4xl md:text-6xl font-prompt uppercase font-bold leading-[60px] md:leading-[80px]">
            About us
          </h1>
        </div>
      </div>

      <div className="bg-green pb-20 pt-10">
        <div className="md:px-20 px-5 mt-10">
          <div>
            <div className="text-white text-xl md:text-3xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px]">
              What is <span className="text-[#b8fff8]">B&apos;PIPS</span>
            </div>
            <div className=" font-inter text-white md:w-2/3 mt-2 md:mt-4">
              B&apos;PIPS stands for Blue Pips ( And the color blue in the financial
              market indicates PROFIT ). <br />
              <br />
              We are a team of diversed professional traders that have scaled through so many hurdles in the
              financial market and finally resolved to establishing a medium to
              empower and sustain youngsters and anyone ready to take their
              financial position to the next level by teaching them the skill
              set needed, giving them access to vital tools and services that
              will fuel their growth and monitoring their progress as they
              evolve
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse py-20">
            


            <div className=" mb-10 md:px-10 flex pt-10 flex-col">
              <div className="text-white text-xl md:text-3xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px]">
                Our <span className="text-[#b8fff8]">location</span>
              </div>
              <div className="font-inter text-white md:w-2/3 mt-1 md:mt-4">
                Behind the Green SUB building, 02 Arena, University of Nigeria
                Nsukka, Enugu State
              </div>
              <div className="text-white text-xl md:text-xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px] mt-10">
                For more enquiries
              </div>
              <div className="font-inter text-white md:w-2/3 mt-2">
                080139699860 <br /> 09013022472 <br />
                0701849003
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </Main>
  );
};

export default About;
