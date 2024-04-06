"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Logo } from "../../../public/assets/Svgfile";

const Loader = () => {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3500);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <div>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-[#fff] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center flex-col text-center animate-bounce">
            <Logo />
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Loader;
