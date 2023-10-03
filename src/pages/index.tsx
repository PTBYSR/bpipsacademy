import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";
import landing from "../../public/landing-dsk.png";
import landingMb from "../../public/landing-mb.png";
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
import boot from "../../public/boot-xs.jpg";
import BlogCard from "@/components/common/BlogCard/BlogCard";
import Banner from "@/components/common/Banner/Banner";

const items = [
  {
    id: 1,
    title: "# Days Trading Bootcamp",
    img: boot,
    date: "23rd October",
  },
  {
    id: 2,
    title: "Hunt with the beasts 2.0",
    img: three,
    date: "",
  },
];

export default function Home() {
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <header className=" px-5 bg-violet h-[800px] flex flex-col justify-center items-center gap-10 relative overflow-hidden">
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
              Bpips Forex Academy
            </div>
            <h1 className="text-center text-white text-4xl md:text-6xl font-prompt uppercase font-bold leading-[60px] md:leading-[80px]">
              Join the hunt <br />
              with the beasts
            </h1>
          </div>
          <p className="text-white opacity-90 text-center md:w-1/2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            accusamus enim ex iste sequi molestias eum amet nesciunt nihil iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            modi.
          </p>
        </div>
        <div className="relative z-[10]">
          <Button>Join the hunt</Button>
        </div>
        <div className="absolute top-0 hidden md:block">
          <Image src={landing} alt="" />
        </div>
        <div className="absolute top-0 md:hidden ">
          <Image src={landingMb} alt="" layout=""/>
        </div>
      </header>

      <section id="services" className=" bg-violet py-20">
        <div>
          <div className="text-white font-inter uppercase text-xs text-center opacity-90">
            What do we offer
          </div>
          <div className="text-center text-white text-4xl md:text-5xl font-prompt uppercase font-bold leading-[70px]">
            Our Services
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
            />
          ))}
        </div>
      </section>

      <section id="about" className="md:h-[600px] py-20 md:px-20 px-5">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              debitis ratione, voluptatum tempora aliquam sapiente repellendus
              nostrum officia veniam adipisci ipsam eum harum deserunt beatae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              cumque nisi consectetur maxime molestiae ab, consequatur eaque,
              iure quae illum, aut maiores eum laudantium distinctio
              exercitationem. Ipsam aspernatur eos illo.
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center md:my-0 mt-28">
            <Image src={bigLogo} alt="" />
          </div>
        </div>
      </section>

      <Testimonial />

      <section id="news">
        <div className="bg-violet px-10 py-20">
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
              <BlogCard key={x.id} title={x.title} date={x.date} img={x.img} />
            ))}
          </div>
        </div>
      </section>

      <Banner />
    </Main>
  );
}
