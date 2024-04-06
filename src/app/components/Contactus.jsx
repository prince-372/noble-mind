import React from "react";
import womenImg from "../../../public/assets/image/women-img.webp";
import Image from "next/image";
import Commenbtn from "./Commenbtn";
import { Tringle } from "../../../public/assets/Svgfile";
const Contactus = () => {
  return (
    <div
      id="Services"
      className="container mx-auto px-3 max-lg:flex max-lg:justify-center relative"
    >
      <span className=" absolute bottom-[-36%] left-[-4%]">
        <Tringle />
      </span>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div data-aos="fade-down" className="max-w-[478px]">
          <h2 className=" text-5xl leading-[57px] text-black font-semibold font-Outfit pt-[30px]">
            Contact <span className="font-light">Us</span>
          </h2>
          <p className="text-base font-Exo text-[#5A594D] max-w-[409px] pt-4 pb-[18px] ">
            Feel free to contact us any time . We will get back to you as soon
            as we can!{" "}
          </p>
          <div className="flex max-sm:flex-col gap-3 pb-4">
            <div className="flex flex-col">
              <label
                htmlFor="Name"
                className="text-[#5A594D] pb-2 text-base fornt-normal font-Exo "
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                className="border border-[#D0D0CC] rounded-lg h-12 w-full sm:w-[233px] sm:max-w-[233px] focus:outline-none px-2 text-[#5A594D] text-base font-Exo"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Name"
                className="text-[#5A594D] pb-2 text-base fornt-normal font-Exo "
              >
                Last Name
              </label>
              <input
                type="text"
                id="Name"
                className="border border-[#D0D0CC] rounded-lg h-12 w-full sm:w-[233px] sm:max-w-[233px] focus:outline-none px-2 text-[#5A594D] text-base font-Exo"
              />
            </div>
          </div>
          <div className="flex flex-col pb-4">
            <label
              htmlFor="Email"
              className="text-[#5A594D] text-base fornt-normal font-Exo pb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="border border-[#D0D0CC] rounded-lg h-12 focus:outline-none px-2 text-[#5A594D] text-base font-Exo"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label
              htmlFor="Message"
              className="pb-2 text-[#5A594D] text-base fornt-normal font-Exo"
            >
              Message
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="resize-none border border-[#D0D0CC] rounded-lg h-[135px] focus:outline-none p-2 text-[#5A594D] text-base font-Exo"
            ></textarea>
          </div>
          <Commenbtn text="Submit" />
        </div>
        <div
          data-aos="fade-down"
          className=" flex justify-center items-center pt-3"
        >
          <Image
            src={womenImg}
            alt="Contact Img"
            width={598}
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
