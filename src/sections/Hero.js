import React from "react";
import heroImg from "../assets/images/heroimg.png";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen">
        <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20">
          <h1 className="text-green-600 font-bold text-6xl">
            One-click{" "}
            <ReactTyped
              strings={[
                "solution for your static website",
                "Web Development",
                "Digital Marketing",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          </h1>

          <p className="text-slate-90 text-2xl">
            We create amazing experiences for your brand. Our expert team offers
            top-notch marketing, design, and development services to help your
            business grow.
          </p>

          <div className="flex justify-center items-center gap-7">
            <button className="bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
              View More
            </button>

            <button className="border-2 border-green-800 text-green-800 text-[18px] rounded-md px-4 lg:px-8 py-3 hover:border-black hover:text-gray-800 cursor-pointer">
              Watch Video
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-1/2 px-5 py-20 object-cover">
          <img src={heroImg} alt="hero image" width={500} height={500} />
        </div>
      </section>
    </>
  );
};

export default Hero;
