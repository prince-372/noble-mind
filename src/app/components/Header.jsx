import React from "react";
import { Star, Tringle } from "../../../public/assets/Svgfile";

const Header = () => {
  return (
    <div id="home" className="bg-hero lg:min-h-[720px] min-h-[400px] bg-center bg-cover bg-no-repeat flex items-center relative">
      <div className=" container mx-auto px-3">
        <div>
          <p className=" flex items-center font-normal font-Exo text-[#131200] text-base gap-1">
            <Star />
            AI With Noble Mind
          </p>
          <p className=" font-light text-[32px] sm:text-[64px] leading-[46px] sm:leading-[76px] font-Outfit text-black max-w-[584px]">
            Inspiring Innovation, Elevating Solutions –{" "}
            <span className=" font-semibold sm:text-[48px] text-[32px] font-Montserrat">
              Noble Mind"
            </span>
          </p>
          <p className="font-normal font-Exo text-[#4C4C4C] text-base max-w-[584px]">
            At Noble Mind is a forward-thinking AI specialised company dedicated
            to reshaping the future of how we live, work, and learn. Our mission
            is to create ground-breaking AI solutions for Healthcare, Education,
            and beyond, aligning with Saudi Arabia’s Vision 2030.”
          </p>
        </div>
        <span className=" absolute bottom-[-8%] left-[2%]">
          <Tringle />
        </span>
      </div>
    </div>
  );
};

export default Header;
