import Footer from "@/components/layouts/Footer/Footer";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Image from "next/image";
import type { ReactNode } from "react";
import React from "react";
import landing from "../../public/landing.jpg";
import Button from "@/components/ui/Button/Button";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="overflow-hidden relative">
    <div className="flex justify-center bg-red w-full font-semibold text-white py-2 uppercase text-xs">
      metro trading bot     </div>
    <Navbar />
    {props.meta}
    <main className="">{props.children}</main>
    <Footer />
  </div>
);

export { Main };
