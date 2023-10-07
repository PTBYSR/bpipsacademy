import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";
import invest from "../../../public/investment-plan.jpeg";
import Image from "next/image";
import Link from "next/link";

const AccountManagement = () => {
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
            Account management
          </h1>
        </div>
      </div>

      <div className="bg-green pb-20 pt-10">
        <div className="md:px-20 px-5 mt-10">
          <div>
            <div className="text-white text-xl md:text-3xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px]">
              What is <span className="text-[#b8fff8]">account management</span>
            </div>
            <div className=" font-inter text-white md:w-2/3 mt-2 md:mt-4">
              Account Management services encompass tailored financial
              solutions, offering a dual approach: Propy Firm Services for
              trading and maximizing investments, and personalized Investment
              Plans designed to optimize financial growth and secure long-term
              prosperity.
            </div>
          </div>

          <div className="mt-10">
            <div>
              <div className="text-white text-xl md:text-3xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px]">
                - Investment plan
              </div>
              <div className="md:pl-10 font-inter text-white md:w-2/3 mt-2 md:mt-4 mb-10">
                The image below is a brief description on what the Investment
                plans entails.{" "}
                <Link href="" className="underline">
                  To learn more contact your account manager here.
                </Link>
              </div>
              <div className="md:pl-10">
                <Image src={invest} alt="" />
              </div>
            </div>
            <div className="mt-20">
              <div className="text-white text-xl md:text-3xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px]">
                - Prop firm services
              </div>
              <div className="md:pl-10 font-inter text-white md:w-2/3 mt-2 md:mt-4 mb-10">
                Below is a brief description on what the Prop firm services
                entails.{" "}
                <Link href="" className="underline">
                  To learn more contact your account manager here.
                </Link>
              </div>
              <div className="md:pl-10">
                <div className="container mx-auto my-10">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-5 px-4 border-b">Account Type</th>
                        <th className="py-5 px-4 border-b">
                          Initial Investment
                        </th>
                        <th className="py-5 px-4 border-b">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-5 px-4 border-b">
                          {" "}
                          $5k prop firm acct
                        </td>
                        <td className="py-5 px-4 border-b"> $5,000</td>
                        <td className="py-5 px-4 border-b"> 2 months</td>
                      </tr>
                      <tr>
                        <td className="py-5 px-4 border-b">
                          {" "}
                          $10k prop firm acct
                        </td>
                        <td className="py-5 px-4 border-b"> $10,000</td>
                        <td className="py-5 px-4 border-b"> 2 months</td>
                      </tr>
                      <tr>
                        <td className="py-5 px-4 border-b">
                          {" "}
                          $25k prop firm acct
                        </td>
                        <td className="py-5 px-4 border-b"> $25,000</td>
                        <td className="py-5 px-4 border-b"> 3 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Main>
  );
};

export default AccountManagement;
