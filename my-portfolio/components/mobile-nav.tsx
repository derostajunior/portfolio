import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed transform transition-all duration-300 top-0 right-0 bottom-0 z-50 bg-[#09101a] ${navAnimation}`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-mobile">HOME</div>
        <div className="nav-mobile">SERVICES</div>
        <div className="nav-mobile">ABOUT</div>
        <div className="nav-mobile">PROJECT</div>
        <div className="nav-mobile">BLOG</div>
        <div className="nav-mobile">CONTACT</div>
      </div>
      <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-blue-400">
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
