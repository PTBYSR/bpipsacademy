import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";
import bot from "../../../public/bot.jpg";
import Image from "next/image";
import Banner from "@/components/common/Banner/Banner";

const blogContent = [
  {
    id: 1,
    title: "What is a trading bot",
    description:
      "A trading robot is an accurate automated algorithm that ease trading the financial markets by providing hands-free profitable technial analysis and executing top notch risk to reward trades on a funded account thereby increasing and multiplying the capital (equity)",
  },
  {
    id: 2,
    title: "What is a license",
    description:
      "A license is a physical/abstract term used to denote 'Access' to a particular service of product. With this said, our boy full license gives you ownership of the bot itself while the half license just makes you a user without you obtaining the bot. ",
  },
  {
    id: 3,
    title: "How do i earn from the trading bot",
    description:
      "All you need to do is fund your trading account with the required amount of money, connect the bot to your account using its's logins, sit back and watch your money come in",
  },
  {
    id: 4,
    title: "What are the bot packages you offer",
    description:
      "Half license - N600,000 This gives you access to trading just one funded account using the bot without you obtaining it, in other words you send us the logins to your funded account and we'll connect it to the bot till infinity",
  },
  {
    id: 5,
    title: "What are the funding requirements",
    description: "Your account requires a minimum of $300",
  },
  {
    id: 6,
    title: "Will i have to handle it myself",
    description: "It's completely hands free",
  },
  {
    id: 7,
    title: "What does the bot trade",
    description: "It's trades a currency pair = GBPUSD",
  },
  {
    id: 8,
    title: "What is the accuracy of the bot",
    description:
      "The bot has gone through a 5 month backtesting phase and the results were 98% a accurate",
  },
];

const Blog = () => {
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className="w-[100%] md:px-20 py-20">
        <div className="px-5 md:px-0">
          <div className="text-violet ml-2 font-inter uppercase text-xs  opacity-90">
            B&apos;pips Forex Academy
          </div>
          <h1 className=" text-violet text-4xl md:text-6xl font-prompt uppercase font-bold leading-[60px] md:leading-[80px]">
            B&apos;PIPS  <span >trading</span> bot<span className="text-2xl">-</span><div className="ml-2 inline-block text-red
             text-2xl uppercase pb-3 "> metro</div>
          </h1>
        </div>
        <div className="w-[100%] flex  my-10">
          <Image src={bot} alt="" className="w-[500px]" />
        </div>
        <div className="mb-20">
          {blogContent.map((x) => (
            <>
              <div className="md:px-20 px-5 mt-10">
                <div className="text-violet text-xl md:text-xl font-prompt uppercase font-bold leading-[30px] md:leading-[60px]">
                  {x.title}
                </div>
                <div className="font-inter text-violet md:w-2/3 mt-2 md:mt-1">
                  {x.description}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
        <Banner />
    </Main>
  );
};

export default Blog;



// Strapi is in production mode, editing content types is disabled. Please switch to development mode by starting your server with strapi develop.