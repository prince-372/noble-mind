import React from "react";
import { Logo } from "../../../public/assets/Svgfile";
const Loader = () => {
  return (
    <div>
      <div class="flex space-x-2 justify-center items-center bg-white h-screen ">
        <div className="flex gap-3 items-center">
          <Logo />
          <div className="flex gap-2">
            <span class="sr-only">Loading...</span>
            <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
