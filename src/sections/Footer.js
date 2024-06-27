import React from "react";

const Footer = () => {
  return (
    <>
      <section className=" w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28">
        <div className=" flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
          <h1 className=" text-green-600 font-bold text-4xl mb-5">
            <i class="fa-brands fa-dashcube"></i>
            <span className="text-white">EBUG </span>
            <i class="fa-solid fa-explosion"></i>{" "}
            <span className=" text-white">NTITY</span>
          </h1>

          <p className=" text-lg text-slate-200">
            We are a dedicated company providing high-quality products and
            services to our customers. Our mission is to exceed expectations
            through innovation and customer care.
          </p>

          <div
            className=" flex justify-center items-center gap-4 mt-7"
            id="logos"
          >
            <span className="flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12">
              <i className="fa-brands fa-facebook"></i>
            </span>

            <span className="flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12">
              <i class="fa-brands fa-instagram"></i>
            </span>

            <span className="flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12">
              <i class="fa-brands fa-twitter"></i>
            </span>

            <span className="flex justify-center items-center bg-green-500 rounded-full cursor-pointer hover:bg-green-600 h-12 w-12">
              <i class="fa-brands fa-youtube"></i>
            </span>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
          <ul className=" flex flex-col justify-center items-start gap-3">
            <h1 className=" text-xl font-semibold">PAGES</h1>
            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Home
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Services
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Testimonials
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Pricing
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Contact Us
            </li>
          </ul>
        </div>

        <div className=" flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
          <ul className=" flex flex-col justify-center items-start gap-3">
            <h1 className=" text-xl font-semibold">SERVICES</h1>
            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Web Design
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Web Development
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Search Engine Optimization
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Social Media Markiting
            </li>

          </ul>
        </div>

        <div className=" flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
          <ul className=" flex flex-col justify-center items-start gap-3">
            <h1 className=" text-xl font-semibold">LEGAL</h1>
            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Privacy Policy
            </li>

            <li className=" text-slate-300 cursor-pointer hover:text-green-300">
              Terms & Conditions
            </li>

            
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
