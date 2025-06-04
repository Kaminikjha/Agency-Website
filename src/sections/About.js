import React from "react";
import { ReactTyped } from "react-typed";
import { FaLaptop, FaDatabase, FaGlobe, FaLock } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section
        id="services"
        className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-5 py-10 sm:px-7 lg:px-16 lg:py-12"
      >
        <div className="flex justify-center items-center flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
          <h1 className="text-green-600 mt-10 md:mt-0 font-bold text-4xl sm:text-5xl lg:text-6xl w-full text-center lg:text-left">
            Hosting{" "}
            <ReactTyped
              strings={["solution with benefits"]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          </h1>

          <p className="text-slate-800 text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            minima ratione fuga illo expedita harum reprehenderit eum corrupti
            fugit quod?
          </p>

          <div className="flex justify-center items-center w-full">
            <button className="bg-green-800 text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-full rounded-lg p-5 sm:p-6 lg:p-7">
              <div className="animate-bounce bg-green-500 p-3 rounded-full hover:bg-green-600 cursor-pointer">
                <FaLaptop className="text-white text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
                SSL Certificate
              </h2>
              <p className="text-base lg:text-[18px] text-center text-slate-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center items-center w-full">
                <button className="bg-green-800 text-white px-4 lg:px-6 py-2 rounded-md text-base lg:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer">
                  View More
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-full rounded-lg p-5 sm:p-6 lg:p-7">
              <div className="animate-bounce bg-green-500 p-3 rounded-full hover:bg-green-600 cursor-pointer">
                <FaDatabase className="text-white text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
                Personal Domain
              </h2>
              <p className="text-base lg:text-[18px] text-center text-slate-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center items-center w-full">
                <button className="bg-green-800 text-white px-4 lg:px-6 py-2 rounded-md text-base lg:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer">
                  View More
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-full rounded-lg p-5 sm:p-6 lg:p-7">
              <div className="animate-bounce bg-green-500 p-3 rounded-full hover:bg-green-600 cursor-pointer">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
                Media Storage
              </h2>
              <p className="text-base lg:text-[18px] text-center text-slate-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center items-center w-full">
                <button className="bg-green-800 text-white px-4 lg:px-6 py-2 rounded-md text-base lg:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer">
                  View More
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-full rounded-lg p-5 sm:p-6 lg:p-7">
              <div className="animate-bounce bg-green-500 p-3 rounded-full hover:bg-green-600 cursor-pointer">
                <FaLock className="text-white text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
                Code Editor
              </h2>
              <p className="text-base lg:text-[18px] text-center text-slate-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex justify-center items-center w-full">
                <button className="bg-green-800 text-white px-4 lg:px-6 py-2 rounded-md text-base lg:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;