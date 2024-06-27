import React from "react";
import cube from "../assets/images/cube.png";
import { ReactTyped } from "react-typed";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center"
      >
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20">
          <div className="flex justify-center items-start flex-col gap-4 w-full">
            <h1 className="text-green-600 font-bold text-[35px]">
            <ReactTyped
              strings={[
                " Contact Info",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
             
            </h1>
            <div
              id="phone"
              className=" flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
            >
              <span className="  flex justify-center items-center bg-green-400 p-3 rounded-full h-12 w-12 ">
                <i class="fa-solid fa-phone-volume"></i>
              </span>
              +91 800 034 9995
            </div>

            <div
              id="mail"
              className=" flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
            >
              <span className="  flex justify-center items-center bg-green-400 p-3 rounded-full h-12 w-12 ">
                <i class="fa-solid fa-envelope"></i>
              </span>
              demomail@gmail.com
            </div>

            <div
              id="address"
              className=" flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
            >
              <span className="  flex justify-center items-center bg-green-400 p-3 rounded-full h-12 w-14 ">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              libero!
            </div>
            <div
              id="logos"
              className="flex justify-center items-center gap-4 mt-10 "
            >
              <span className=" flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12 ">
                <i className="fa-brands fa-facebook"></i>
              </span>

              <span className=" flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12 ">
                <i class="fa-brands fa-instagram"></i>
              </span>

              <span className=" flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12 ">
                <i class="fa-brands fa-twitter"></i>
              </span>

              <span className=" flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12 ">
                <i class="fa-brands fa-youtube"></i>
              </span>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600"
            />
            <textarea
              className="px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
            <button className=" bg-green-700 text-whitepx-4 py-3 w-full rounded-lg hover:bg-green-950 hover:text-white cursor-pointer">
              SUBMIT
            </button>
          </div>
        </div>

        <img
          src={cube}
          alt="cube"
          className=" w-full h-72  absolute hidden lg:block"
        />
      </section>
    </>
  );
};

export default Contact;
