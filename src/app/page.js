"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Backtotop from "./components/Backtotop";
import Choose from "./components/Choose";
import Contactus from "./components/Contactus";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Loader from "./components/Loader";
import Mynav from "./components/Mynav";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div>
      {data ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <Mynav />
          <Header />
          <About />
          <Choose />
          <Contactus />
          <Faq />
          <Input />
          <Backtotop />
          <Footer />
        </div>
      )}
    </div>
  );
}
