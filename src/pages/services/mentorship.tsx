import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";
import landing from "../../public/landing-dsk.png";
import Link from "next/link";
import Image from "next/image";



const Services = () => {
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
            our services
          </div>
          <h1 className=" text-violet text-3xl md:text-6xl font-prompt uppercase font-bold leading-[55px] md:leading-[80px]">
            Forex mentorship
          </h1>
        </div>
      </div>

      <div className="bg-green pb-20 pt-10">
        <div className="md:px-20 px-5 mt-10">
          <div>
          </div>

          <div className="mt-10">
            <div>
              <div className="text-white text-xl md:text-3xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px]">
                - Mentorship Packages
              </div>
              <div className="md:pl-10 font-inter text-white md:w-2/3 mt-2 md:mt-4 mb-10">
                Below are the different packages we offer under the Mentorship program.{" "}
                <Link href="" className="underline">
                  To learn more contact a b&apos;pips instructor here.
                </Link>
              </div>
              <div className="md:pl-10">
                {/* <Image src={invest} alt="" /> */}
              </div>
            </div>
          </div>
          <div>
          <div className="md:pl-10">
                <div className="container mx-auto my-10">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-5 px-4 border-b">Packages</th>
                        <th className="py-5 px-4 border-b">
                        Price
                        </th>
                        <th className="py-5 px-4 border-b">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-5 px-4 border-b">
                          {" "}
                          Mentorship
                        </td>
                        <td className="py-5 px-4 border-b"> ₦100,000</td>
                        <td className="py-5 px-4 border-b"> 3 months</td>
                      </tr>
                      <tr>
                        <td className="py-5 px-4 border-b">
                          {" "}
                          Physical classes
                        </td>
                        <td className="py-5 px-4 border-b"> ₦20,000</td>
                        <td className="py-5 px-4 border-b"> 1 month</td>
                      </tr>
                      <tr>
                        <td className="py-5 px-4 border-b">
                          {" "}
                          VIP signals
                        </td>
                        <td className="py-5 px-4 border-b"> ₦30,000</td>
                        <td className="py-5 px-4 border-b"> 1 month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Services;
