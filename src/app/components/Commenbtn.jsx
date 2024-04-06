import React from "react";

const Commenbtn = (props) => {
  return (
    <div>
      <div>
            <button class="cursor-pointer rounded font-semibold overflow-hidden border-[2px] border-transparent hover:border-[2px] hover:border-bg-btn relative leading-6 z-100 font-Outfit bg-btn  group px-6 py-[14px]">
            <span class="relative z-10 text-white group-hover:text-purple-800  text-base duration-500">
                {props.text}
            </span>
            <span class="absolute w-full h-full  bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full  bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>{" "}
            </button>
      </div>
    </div>
  );
};

export default Commenbtn;
