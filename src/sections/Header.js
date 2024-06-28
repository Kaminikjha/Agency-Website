import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <section className="w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16  sticky top-0 z-40">
        <h1 className="text-green-600 text-3xl font-bold w-96">
          <i class="fa-brands fa-dashcube"></i>
          <span className="text-white">EBUG </span>
          <i class="fa-solid fa-explosion"></i>{" "}
          <span className=" text-white">NTITY</span>
        </h1>

        {toggle ? (
          <i
            onClick={() => setToggle(!toggle)}
            className="fa-solid fa-xmark text-3xl md:hidden block"
          ></i>
        ) : (
          <i
            onClick={() => setToggle(!toggle)}
            className="fa-solid fa-bars text-2xl md:hidden block"
          ></i>
        )}

        <div className=" hidden md:flex justify-end items-center w-full  gap-2">
          <ul className="flex justify-center items-center gap-3">
            <li>
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
                href="#services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>

            <li>
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
                href="#pricing"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex lg:hidden flex-col"></div>

        {/* Responsive Menu */}

        <ul
          className={` duration-300 md:hidden w-full h-screen fixed bg-black  top-[82px] 
         ${toggle ? "left-[0]" : "left-[-100%]"} `}
        >
          <li className=" p-5 ">
            <a
              className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
              href="/"
            >
              Home
            </a>
          </li>

          <li className=" p-5 ">
            <a
              className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
              href="#services"
            >
              Services
            </a>
          </li>

          <li className=" p-5 ">
            <a
              className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>

          <li className=" p-3 ">
            <a
              className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
              href="#pricing"
            >
              Pricing
            </a>
          </li>

          <li className=" p-5 ">
            <a
              className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
