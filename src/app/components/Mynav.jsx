"use client"
import React, { useState } from 'react'
import { Logo } from '../../../public/assets/Svgfile';
import Commenbtn from './Commenbtn';

const Mynav = () => {
    const [first, setfirst] = useState(false);
    function setopen() {
        setfirst(!first);
        if (first === false) {
            document.body.classList.add("overflow-nav");
        } else {
            document.body.classList.remove("overflow-nav");
        }
    }
    return (
        <div className=' container px-3 mx-auto'>
            <nav className=' flex items-center justify-between py-5'>
                <a href="#"><Logo/></a>
                <ul className={`${first ? "right-0" : "right-[100%]"} flex  gap-6  max-[1023px]:w-full h-full fixed bg-white top-0 items-center justify-center lg:h-unset lg:static  lg:bg-transparent lg:justify-end flex-col lg:flex-row z-40 transition-all ease-linear duration-300 `}>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#home">Home</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#aboutus">About Us</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#services">Services</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#chooseUs">Why Choose Us</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#blog">Blog</a></li>
                    <li className=' lg:pr-10'><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#faq">FAQ</a></li>
                    <li> <a href="#services">
                        <Commenbtn text="Contact Us"/>
                    </a></li>
                </ul>
                <div className='lg:hidden' onClick={setopen}>
                    {first ? (
                        <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer mt-[-30px] mr-[-10px] ">
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-45 bottom-2"></span>
                        </div>
                    ) : (
                        <div className=" flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer ">
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                            <span className="bg-black  w-2/3 h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Mynav