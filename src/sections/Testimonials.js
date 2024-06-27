import React from "react";
import img1 from "../assets/images/client1.png";
import img2 from "../assets/images/client2.png";
import img3 from "../assets/images/client3.png";
import img4 from "../assets/images/client4.png";
import { ReactTyped } from "react-typed";

const Testimonials = () => {
  return (
    <>
      <section
        id="testimonials"
        className="w-full flex flex-col gap-5 h-fit  px-7 py-10 lg:px-16 lg-py-20"
      >
        <p className="text-center text-xl"> Testimonials </p>
        <h1 className="text-green-600 font-bold text-6xl text-center leading-[68px]">
        <ReactTyped
              strings={[
                "What Clients Says",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          
        </h1>
        <p className=" text-slate-950 text-center text-2xl">
          Discover what our clients think about our services.<br/> Read testimonials
          and reviews directly from those we've had the pleasure of working
          with.
        </p>

        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
          <div className="bg-slate-200 hover:bg-green-200 border-2 hover:border-none border-green-300 px-6 py-8 flex just items-center flex-col gap-4 rounded-xl w-80">
            <img src={img1} alt="image" height={140} width={140} />
            <p className="text-center text-[17px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              doloribus impedit porro, ducimus suscipit labore!
            </p>
            <h1 className="text-center text-green-700 text-2xl font-semibold">
              Celia Almeda
            </h1>
            <p className="text-center text-[17px] text-gray-800">
              Web Developer
            </p>
          </div>

          <div className="bg-slate-200 hover:bg-green-200 border-2 hover:border-none border-green-300 px-6 py-8 flex just items-center flex-col gap-4 rounded-xl w-80">
            <img src={img2} alt="image" height={140} width={140} />
            <p className="text-center text-[17px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              doloribus impedit porro, ducimus suscipit labore!
            </p>
            <h1 className="text-center text-green-700 text-2xl font-semibold">
              Nat Reynolds
            </h1>
            <p className="text-center text-[17px] text-gray-800">
              Android Developer
            </p>
          </div>

          <div className="bg-slate-200 hover:bg-green-200 border-2 hover:border-none border-green-300 px-6 py-8 flex just items-center flex-col gap-4 rounded-xl w-80">
            <img src={img3} alt="image" height={140} width={140} />
            <p className="text-center text-[17px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              doloribus impedit porro, ducimus suscipit labore!
            </p>
            <h1 className="text-center text-green-700 text-2xl font-semibold">
              Bob Roberts
            </h1>
            <p className="text-center text-[17px] text-gray-800">
              UI/UX Designer
            </p>
          </div>

          <div className="bg-slate-200 hover:bg-green-200 border-2 hover:border-none border-green-300 px-6 py-8 flex just items-center flex-col gap-4 rounded-xl w-80">
            <img src={img4} alt="image" height={140} width={140} />
            <p className="text-center text-[17px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              doloribus impedit porro, ducimus suscipit labore!
            </p>
            <h1 className="text-center text-green-700 text-2xl font-semibold">
              Mattie Smith
            </h1>
            <p className="text-center text-[17px] text-gray-800">
              Full Stack Developer
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
