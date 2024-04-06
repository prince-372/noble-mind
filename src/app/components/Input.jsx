import React from "react";
import { Tringle } from "../../../public/assets/Svgfile";

const Input = () => {
  return (
    <div id="blog" className="container mx-auto px-3 translate-y-20 relative">
      <span className=" absolute left-[-4%] top-[-32%]">
        <Tringle />
      </span>
      <div
        data-aos="zoom-in"
        className="  rounded-[20px] bg-input bg-no-repeat px-2 lg:px-0 bg-center bg-cover h-[318px]  flex flex-col justify-center"
      >
        <h2 className="font-light sm:text-5xl text-[32px] text-center sm:leading-[57px] leading-[36px] text-white">
          Subscribe to our <span className="font-semibold">Newsletter!</span>
        </h2>
        <p className="text-center text-white text-base font-normal font-Exo pb-9 pt-2">
          Be the first to get exclusive offers and the latest news.
        </p>
        <div className="mx-auto  bg-[#FFFFFF0D] backdrop-blur-[30px] max-w-[448px] w-full border border-[#A37FE0] rounded-[6px] py-[10px] pr-[10px] pl-6 flex justify-between">
          <input
            type="email"
            name="email"
            id="email"
            className="bg-transparent w-full placeholder:text-white placeholder:font-semibold placeholder:text-base placeholder:font-Outfit focus:outline-none border-none text-white font-semibold font-Outfit text-base"
            placeholder="Enter your email"
          />
          <button className="py-[14px] px-6 border duration-300 hover:bg-white hover:border-transparent hover:duration-300 hover:text-black border-white font-Outfit font-semibold text-base rounded text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
