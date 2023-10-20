import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";
import landing from "../../public/jkjk.jpeg";
import landingMb from "../../public/new-landing.png";
// import landingMb from "../../public/new-landing.jpg";
import green from "../../public/big-green.png";
import red from "../../public/big-red.png";
import bigLogo from "../../public/B'PIPS-1 4.png";
import money from "../../public/money.png";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { services } from "../../db/Services/services";
import Card from "@/components/common/Card/Card";
import Testimonial from "@/components/interface/Testimonial/Testimonial";
import three from "../../public/hunt-xs.jpeg";
import bot from "../../public/bot.jpg";
import boot from "../../public/boot-xs.jpg";
import BlogCard from "@/components/common/BlogCard/BlogCard";
import Banner from "@/components/common/Banner/Banner";
import Marquee from "react-fast-marquee";
import cert from "../../public/cert.png";
import React, { useState } from "react";
const items = [
  {
    id: 1,
    href: "/blog/bootcamp",
    description: "",
    title: "# Days Trading Bootcamp",
    img: boot,
    date: "23rd October",
  },
  {
    id: 2,
    href: "/services",
    description: "",
    title: "Hunt with the beasts 2.0",
    img: three,
    date: "/services",
  },
  {
    id: 3,
    href: "/blog/bot",
    description:
      "Are you tired of sleepless nights, hitting drawdowns, blowing accounts, losing ridiculous amount of money? Then the B'pips academy METRO trading bot is for you",
    title: "B'PIPS TRADING BOT",
    img: bot,
    date: "",
  },
];

const Modal = ({ isOpen, onClose, children }: any) => {
  return (
    <div
      className={`bg-[#000] bg-opacity-30 fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white mx-1 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">{children}</div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <header className=" px-5 bg-green h-[800px] flex flex-col justify-center items-center gap-10 relative overflow-hidden">
        {/* <div className=" z-[100] absolute left-0 -bottom-[210px]"><Image src={money} alt=""/></div> */}
        <div className=" z-[10] absolute left-0 top-0">
          <Image src={green} alt="" />
        </div>
        <div className=" z-[10] absolute bottom-0 right-0">
          <Image src={red} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="z-[100] relative ">
            <div className="text-white font-inter uppercase text-xs text-center opacity-90">
              B&apos;pips Forex Academy
            </div>
            <h1 className="text-center text-white text-4xl md:text-6xl font-prompt uppercase font-bold leading-[60px] md:leading-[80px]">
              Join the hunt <br />
              with the beasts
            </h1>
          </div>
          <p className="z-[10000] text-white opacity-90 text-center md:w-1/2 ">
            We&apos;re a diverse team of experienced traders empowering
            individuals, especially the youth, to boost their financial
            standing. We provide essential skills, tools, ongoing support, and
            monitor progress for lasting growth in the financial market.
          </p>
        </div>
        <div className="relative z-[10]">
          <Button>Join the hunt</Button>
        </div>
        <div className="absolute top-0 hidden h-screen opacity-25  md:block w-screen">
          <Image src={landing} alt="" layout="fill" className="" />
        </div>
        <div className="absolute top-0 md:hidden bg-green">
          <Image src={landingMb} alt="" layout="" className="opacity-30" />
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Image src={cert} alt="" />
        <button onClick={handleCloseModal} className="btn mt-4">
          Close
        </button>
      </Modal>

      <div onClick={handleOpenModal} className="bg-green mx-auto px-5 pt-5  md:pt-20 md:px-[30%]">
        <Image src={cert} alt="" />
      </div>

      <Testimonial />
      
      
      <section id="services" className=" bg-green py-20">
        <div>
          <div className="text-white font-inter uppercase text-xs text-center opacity-90">
            What do we offer
          </div>
          <div className="text-center text-white text-4xl md:text-5xl font-prompt uppercase font-bold leading-[70px]">
            Our <span className="text-[#b8fff8]">Services</span>
          </div>
        </div>
        <div className="md:mt-10">
          {services.map((x) => (
            <Card
              id={x.id}
              title={x.title}
              body={x.body}
              key={x.id}
              label={x.label}
              img={x.img}
              href={x.href}
            />
          ))}
        </div>
      </section>

      <section id="about" className="py-20 md:px-20 px-5">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="mb-10">
              <div className="text-violet font-inter uppercase text-xs opacity-90">
                About Us
              </div>
              <div className=" text-violet text-5xl font-prompt uppercase font-bold leading-[70px]">
                Who are
                <br /> we?
              </div>
            </div>
            <div className="font-inter md:w-2/3">
              B&apos;PIPS stands for Blue Pips ( And the color blue in the
              financial market indicates PROFIT ). <br />
              <br />
              We are a team of diversed professional traders ( years of
              experience ) that have scaled through so many hurdles in the
              financial market and finally resolved to establishing a medium to
              empower and sustain youngsters and anyone ready to take their
              financial position to the next level by teaching them the skill
              set needed, giving them access to vital tools and services that
              will fuel their growth and monitoring their progress as they
              evolve
            </div>
            <div className="mt-10">
              <Button href="/about">about us</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center md:my-0 mt-28">
            <Image src={bigLogo} alt="" />
          </div>
        </div>
      </section>

      <section id="news">
        <div className="bg-green px-10 py-20">
          <div className="mb-10">
            <div className="text-white font-inter uppercase text-xs opacity-90">
              dont miss out
            </div>
            <div className=" text-white text-5xl font-prompt uppercase font-bold leading-[70px]">
              News and Updates
            </div>
          </div>
          <div className="flex gap-10 justify-center items-center mt-20 md:flex-row flex-col">
            {items.map((x, index) => (
              <BlogCard
                key={x.id}
                title={x.title}
                date={x.date}
                img={x.img}
                href={x.href}
                description={x.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Banner />
    </Main>
  );
}
