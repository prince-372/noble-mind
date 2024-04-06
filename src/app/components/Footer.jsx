import React from "react";
import {
  Facebook,
  Footerlogo,
  Insta,
  LInkedin,
  Twiter,
} from "../../../public/assets/Svgfile";

const Footer = () => {
  return (
    <div className=" bg-[#161507] overflow-hidden">
      <div className=" container mx-auto px-3 pt-[138px]">
        <div className=" grid lg:grid-cols-3">
          <div className=" col-span-2">
            <Footerlogo />
            <p className=" font-normal text-base font-Exo text-white pt-[28px]">
              Follow Us
            </p>
            <div className="flex pt-2 gap-4">
              <span className=" hover:translate-y-0.5 hover:duration-300 duration-300">
                <Facebook />
              </span>
              <span className=" hover:translate-y-0.5 hover:duration-300 duration-300">
                <Insta />
              </span>
              <span className=" hover:translate-y-0.5 hover:duration-300 duration-300">
                <Twiter />
              </span>
              <span className=" hover:translate-y-0.5 hover:duration-300 duration-300">
                <LInkedin />
              </span>
            </div>
          </div>
          <div>
            <div className=" flex gap-[64px] pt-5 lg:pt-0">
              <ul>
                <li>
                  <a
                    href=""
                    className="text-white font-semibold text-base font-Outfit"
                  >
                    Maine
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href="#home"
                    className="font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    Home
                  </a>
                </li>
                <li className="pt-[14px]">
                  <a
                    href="#aboutus"
                    className="font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li className="pt-[14px]">
                  <a
                    href="#services"
                    className="font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    services
                  </a>
                </li>
                <li className="pt-[14px]">
                  <a
                    href="#chooseUs"
                    className="font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    Why Choose Us
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href=""
                    className="text-white font-semibold text-base font-Outfit"
                  >
                    Legal
                  </a>
                </li>
                <li className="pt-4">
                  <a
                    href=""
                    className=" font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    Term & Conduction
                  </a>
                </li>
                <li className="pt-[14px]">
                  <a
                    href=""
                    className=" font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="pt-[14px]">
                  <a
                    href=""
                    className=" font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li className="pt-[14px]">
                  <a
                    href=""
                    className=" font-normal text-base font-Exo text-[#B7B7B4] hover:text-white hover:duration-300 duration-300"
                  >
                    (629) 555-0129
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" w-[2345px]  relative left-[-20%] bg-[#B8B8B4] mt-[52px]" />
        <p className=" font-normal font-Exo text-[14px] leading-[21px text-[#B8B8B4] text-center pt-4 pb-[35px]">
          © Copyright 2023 Noble Mind | All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
