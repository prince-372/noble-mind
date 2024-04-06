import Image from "next/image";
import React from "react";
import Doctor from "../../../public/assets/image/doctor-img.webp";
import { Star, Tringle } from "../../../public/assets/Svgfile";
import Commenbtn from "./Commenbtn";

const About = () => {
  return (
    <div id="aboutus" className=" container px-3 mx-auto sm:pt-[150px] pt-[50px] max-lg:flex max-lg:justify-center">
      <div
        data-aos="fade-down"
        className=" grid lg:grid-cols-2 grid-cols-1  gap-3"
      >
        <Image
          className=""
          src={Doctor}
          alt="Doctor"
          height={567}
          width={544}
        />
        <div data-aos="fade-down" className=" relative">
          <p className=" flex items-center font-normal font-Exo text-[#131200] text-base gap-1">
            <Star />
            About Us
          </p>
          <h2 className=" font-light font-Outfit sm:text-5xl text-[32px] sm:leading-[57px] leading-[36px] text-black max-w-[521px]">
            Pioneering Vision & Mission-
            <span className=" font-semibold">Driven Sectoral Innovation</span>
          </h2>
          <p className=" font-normal font-Exo text-base text-[#4D4D4D] max-w-[491px] sm:pt-4 pt-2">
            Imagine a future in Saudi Arabia influenced by the potential of Al,
            with Noble Mind at the forefront of this transformation. Healthcare
            stands to gain with the promise of enhanced data precision. In
            education, there's the potential for individualized learning
            experiences. Finance could witness seamless transactions, and
            entertainment may revel in customized experiences. Through Al's
            promise, transportation could innovate and cities might adapt
            smarter infrastructures. In every domain, the vision of Noble Mind
            hints at a brighter, more efficient nation.
          </p>
          <div className="pt-5">
            <Commenbtn text="Read More" />
          </div>
          <span className=" absolute right-0 bottom-[10%] animate-pulse">
            <Tringle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
