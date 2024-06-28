import React from "react";
import { ReactTyped } from "react-typed";

const Pricing = () => {
  return (
    <>
      <section
        id="pricing"
        className="w-full bg-slate-200 flex-col justify-center items-start h-fit px-7 py-14 lg:p-20 gap-5"
      >
        <h1 className="text-green-600 font-bold text-6xl">
          <ReactTyped
            strings={["Pricing Table"]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-8">
          <p className="text-slate-950 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptate sapiente debitis tempore minus libero similique
            repellendus enim ut aspernatur.
          </p>
          <div className="w-full lg:w-2/4">
            <ul className="flex flex-col justify-center items-start gap-4 ">
              <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
                <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-10 w-10">
                  <i className="fa-solid fa-check "></i>
                </span>
                Unlimited Pages
              </li>

              <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
                <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-10 w-10">
                  <i className="fa-solid fa-check "></i>
                </span>
                Unlimited Pages
              </li>

              <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
                <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-10 w-10">
                  <i className="fa-solid fa-check "></i>
                </span>
                Unlimited Pages
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/4">
            <ul className="flex flex-col justify-center items-start gap-4 ">
              <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
                <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-10 w-10">
                  <i className="fa-solid fa-check "></i>
                </span>
                Unlimited Pages
              </li>

              <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
                <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-10 w-10">
                  <i className="fa-solid fa-check "></i>
                </span>
                Unlimited Pages
              </li>

              <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
                <span className="bg-green-400 p-1 rounded-full fill-white flex justify-center items-center h-10 w-10">
                  <i className="fa-solid fa-check "></i>
                </span>
                Unlimited Pages
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-around items-center flex-wrap gap-10 mt-20">
          <div className="flex flex-col w-72  bg-white border-[3px] px-6 py-8 rounded-xl gap-4 border-green-800 ">
            <p className="text-slate-800 text-xl">Starter plan</p>
            <h1 className="text-green-700 font-semibold text-3xl">Free</h1>
            <div className="flex  gap-4">
              <button className="bg-green-800 text-white px-3 lg:px-6 py-2 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
                Proceed Free
              </button>
            </div>
            <p className="text-slate-800 text-xl text-start">
              Free static.app domai included, No credit card
            </p>
          </div>

          <div className="flex flex-col w-72  bg-white border-[3px] px-6 py-8 rounded-xl gap-4 border-green-800 ">
            <p className="text-slate-800 text-xl">Yearly plan</p>
            <h1 className="text-green-700 font-semibold text-3xl">$9/month</h1>
            <div className="flex  gap-4">
              <button className="bg-green-800 text-white px-3 lg:px-6 py-2 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
                Proceed Anually
              </button>
            </div>
            <p className="text-slate-800 text-xl text-start">
              Free static.app domai included, No credit card
            </p>
          </div>

          <div className="flex flex-col w-72  bg-white border-[3px] px-6 py-8 rounded-xl gap-4 border-green-800 ">
            <p className="text-slate-800 text-xl">Monthly plan</p>
            <h1 className="text-green-700 font-semibold text-3xl">$12/month</h1>
            <div className="flex  gap-4">
              <button className="bg-green-800 text-white px-3 lg:px-6 py-2 rounded-md text-[18px] hover:bg-green-950 hover:text-white cursor-pointer ">
                Proceed Monthly
              </button>
            </div>
            <p className="text-slate-800 text-xl text-start">
              Free static.app domai included, No credit card
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
