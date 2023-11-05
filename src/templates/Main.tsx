import Footer from "@/components/layouts/Footer/Footer";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Image from "next/image";
import type { ReactNode } from "react";
import React, { useState, useEffect } from "react";
import landing from "../../public/landing.jpg";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';


type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [isPopUp, setPopUp] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setPopUp(true);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setPopUp(true);
  //   }, 20000);

  //   return () => clearTimeout(timer);
  // });
  return (
    <div className="overflow-hidden relative">
      {!isPopUp ? (
        <></>
      ) : (
        <>
          <div className="fixed bg-dark bg-opacity-25 z-[100000] w-screen h-screen top-0 px-4 py-10 flex justify-center items-center ">
            <div className="md:w-auto h-[500px] w-full bg-white p-5 border-violet border-4 flex flex-col justify-center items-center relative">
              <div className=" flex flex-col items-center">
                <div
                  className="absolute top-[5px] right-[12px] z-[1000000] uppercase text-[10px] font-bold"
                  onClick={() => setPopUp(false)}
                >
                  close
                </div>
                <div className="text-center uppercase font-prompt text-xl font-bold">
                  Introduction to
                </div>
                <div className="text-center uppercase font-prompt text-3xl leading-[40px] text-red font-bold">
                  ny session strategy
                </div>
                <div className="h-1 w-full bg-dark mb-5 mt-10"></div>
                <div className="md:w-2/3 text-dark text-semibold text-center italic">
                  Free E-book: The{" "}
                  <span className="text-lg font-bold text-lime">
                    Forex Trading strategy
                  </span>{" "}
                  I use to make at least{" "}
                  <span className="text-lg font-bold italic text-lime">
                    $1000/month.
                  </span>
                </div>
              </div>
              <div className="my-5 flex justify-center h-[200px] w-full items-center">
                <Link href="https://bpipsacademy.systeme.io/63097df6" target="_blank">
                  <button className="bg-red py-5 px-5 w-[200px] uppercase text-white font-prompt text-xl font-bold">
                    Get it
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex justify-center bg-red w-full font-semibold text-white py-2 uppercase text-xs">
        metro trading bot{" "}
        <Link href="/blog/bot">
          <span className="underline font-bold ml-2 "> learn more</span>
        </Link>{" "}
      </div>
      <Navbar />
      {props.meta}
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};
export { Main };
 