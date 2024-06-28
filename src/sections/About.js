import React from "react";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <>
      <section
        id="services"
        className=" w-full bg-slate-200 flex flex-col lg:flex-row gap-10  lg:gap-20 h-fit px-7 py-5 lg:px-16 lg-py-12"
      >
        <div className="flex justify-center items-center flex-col gap-8 lg:w-1/2">
          <h1 className="text-green-600 font-bold text-6xl text-center leading-[68px]">
            Hosting{" "} 
            <ReactTyped
              strings={[
                "solution with benefits"
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />


            
          </h1>

          <p className="text-slate-90 text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            minima ratione fuga illo expedita harum reprehenderit eum corrupti
            fugit quod?
          </p>

          <div className="flex justify-center items-center gap-7">
            <button className="bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2 lg:flex-col-2 flex-wrap">
          <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
            <i className="fa-solid fa-laptop animate-bounce bg-green-500  p-4 rounded-full hover:bg-green-600  cursor-pointer"></i>
            <h className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
              {" "}
              SSL Certificate{" "}
            </h>
            <p className="text-[18px] text-center text-slate-700">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-green-800 text-white px-3 lg:px-6 py-2 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
            <i className="fa-solid fa-database animate-bounce bg-green-500  p-4 rounded-full hover:bg-green-600  cursor-pointer"></i>
            <h className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
              {" "}
              Personal Domain{" "}
            </h>
            <p className="text-[18px] text-center text-slate-700">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-green-800 text-white px-3 lg:px-6 py-2 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
            <i className="fa-solid fa-globe animate-bounce  bg-green-500  p-4  rounded-full hover:bg-green-600  cursor-pointer"></i>

            <h className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
              Media Storage{" "}
            </h>
            <p className="text-[18px] text-center text-slate-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-green-800 text-white px-3 lg:px-6 py-2 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 flex-col bg-white h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
            <i className="fa-solid fa-lock animate-bounce bg-green-500  p-4 rounded-full hover:bg-green-600  cursor-pointer"></i>

            <h className="text-xl lg:text-2xl text-center text-green-500 font-semibold">
              Code Editor
            </h>
            <p className="text-[18px] text-center text-slate-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-green-800 text-white px-3 lg:px-6 py-2 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
