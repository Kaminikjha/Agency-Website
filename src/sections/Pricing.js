import React from "react";
import { ReactTyped } from "react-typed";

const Pricing = () => {
  return (
    <>
      <section
        id="pricing"
        className="w-full bg-slate-200 flex flex-col justify-center items-start h-fit px-4 py-14 md:px-7 lg:p-20 gap-5"
      >
        <h1 className="text-green-600 font-bold text-4xl md:text-5xl lg:text-6xl w-full text-center md:text-left">
          <ReactTyped
            strings={["Pricing Table"]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-8">
          <p className="text-slate-950 text-lg md:text-xl lg:text-2xl w-full lg:w-1/2 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptate sapiente debitis tempore minus libero similique
            repellendus enim ut aspernatur.
          </p>
          
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <ul className="flex flex-col justify-center items-start gap-4">
                <li className="flex justify-start items-center gap-4 text-lg md:text-[21px] text-gray-800 w-full">
                  <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-8 w-8 md:h-10 md:w-10">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Unlimited Pages
                </li>

                <li className="flex justify-start items-center gap-4 text-lg md:text-[21px] text-gray-800 w-full">
                  <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-8 w-8 md:h-10 md:w-10">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Unlimited Pages
                </li>

                <li className="flex justify-start items-center gap-4 text-lg md:text-[21px] text-gray-800 w-full">
                  <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-8 w-8 md:h-10 md:w-10">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Unlimited Pages
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <ul className="flex flex-col justify-center items-start gap-4">
                <li className="flex justify-start items-center gap-4 text-lg md:text-[21px] text-gray-800 w-full">
                  <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-8 w-8 md:h-10 md:w-10">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Unlimited Pages
                </li>

                <li className="flex justify-start items-center gap-4 text-lg md:text-[21px] text-gray-800 w-full">
                  <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-8 w-8 md:h-10 md:w-10">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Unlimited Pages
                </li>

                <li className="flex justify-start items-center gap-4 text-lg md:text-[21px] text-gray-800 w-full">
                  <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-8 w-8 md:h-10 md:w-10">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Unlimited Pages
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 mt-14 md:mt-20">
          <div className="flex flex-col w-full sm:w-80 md:w-72 bg-white border-[3px] px-6 py-8 rounded-xl gap-4 border-green-800">
            <p className="text-slate-800 text-lg md:text-xl">Starter plan</p>
            <h1 className="text-green-700 font-semibold text-2xl md:text-3xl">Free</h1>
            <div className="flex gap-4">
              <button className="bg-green-800 text-white px-4 md:px-6 py-2 rounded-md text-base md:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer w-full">
                Proceed Free
              </button>
            </div>
            <p className="text-slate-800 text-base md:text-xl text-start">
              Free static.app domain included, No credit card
            </p>
          </div>

          <div className="flex flex-col w-full sm:w-80 md:w-72 bg-white border-[3px] px-6 py-8 rounded-xl gap-4 border-green-800">
            <p className="text-slate-800 text-lg md:text-xl">Yearly plan</p>
            <h1 className="text-green-700 font-semibold text-2xl md:text-3xl">$9/month</h1>
            <div className="flex gap-4">
              <button className="bg-green-800 text-white px-4 md:px-6 py-2 rounded-md text-base md:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer w-full">
                Proceed Anually
              </button>
            </div>
            <p className="text-slate-800 text-base md:text-xl text-start">
              Free static.app domain included, No credit card
            </p>
          </div>

          <div className="flex flex-col w-full sm:w-80 md:w-72 bg-white border-[3px] px-6 py-8 rounded-xl gap-4 border-green-800">
            <p className="text-slate-800 text-lg md:text-xl">Monthly plan</p>
            <h1 className="text-green-700 font-semibold text-2xl md:text-3xl">$12/month</h1>
            <div className="flex gap-4">
              <button className="bg-green-800 text-white px-4 md:px-6 py-2 rounded-md text-base md:text-[18px] hover:bg-green-950 hover:text-white cursor-pointer w-full">
                Proceed Monthly
              </button>
            </div>
            <p className="text-slate-800 text-base md:text-xl text-start">
              Free static.app domain included, No credit card
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;