"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Tringle } from "../../../public/assets/Svgfile";
import Image from "next/image";
import forpeople from "../../../public/assets/image/slider-img.webp";
const Choose = () => {
  const Items = [
    {
      id: 1,
      title: "Customer-Centric",
      para: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
    },
    {
      id: 2,
      title: "Workplace Harmony",
      para: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity.",
    },
    {
      id: 3,
      title: "Ethical Leadership",
      para: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.",
    },
    {
      id: 4,
      title: "Customer-Centric",
      para: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
    },
  ];
  return (
    <div
      id="chooseUs"
      data-aos="zoom-in"
      className="mt-10 sm:mt-16 md:mt-[100px] lg:my-[150px] relative"
    >
      <span className=" absolute left-[4%]">
        <Tringle />
      </span>
      <div className="container flex flex-col items-center justify-center overflow-hidden mx-auto px-3">
        <p className="flex items-center font-normal text-base font-Exo text-black gap-1">
          <Star /> Why Choose Us{" "}
        </p>
        <h2 className="mt-1 h2 md:mt-2 max-w-[521px] text-center font-light sm:text-[48px] text-[32px] sm:leading-[57px] leading-[32px] font-Outfit">
          Driving Innovation &{" "}
          <span className=" font-semibold">Transforming Industries</span>
        </h2>
        <div className="flex flex-col w-full mt-[52px]">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              567: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Pagination, Autoplay, Navigation, EffectCreative]}
            className="w-full"
          >
            {Items.map((items, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`border border-[#EEDDFB] rounded-xl p-[18px] max-w-[364px] w-full min-h-[208px] overflow-auto`}
                >
                  <span className="border-[7px] text-sm font-bold font-Outfit flex items-center justify-center rounded-full bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9">
                    {items.id}
                  </span>
                  <p className="mt-3 text-xl font-normal font-Outfit text-[#131200]">
                    {items.title}
                  </p>
                  <p className="mt-1 pTag">{items.para}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination">
            <span className="swiper-pagination-bullet"></span>
          </div>
        </div>
        <Image
          className=" pt-5 w-full"
          alt="sliderimg"
          src={forpeople}
          height={527}
          width={1140}
        />
        <span className=" absolute right-0 bottom-0">
          <Tringle />
        </span>
      </div>
    </div>
  );
};

export default Choose;
