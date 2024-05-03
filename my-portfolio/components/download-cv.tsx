import React from "react";
import {
    ArrowDownTrayIcon,
  } from "@heroicons/react/20/solid";

const downloadCv = () => {
  return (
    <button
      className="px-[2rem] hover:bg-[#b03320] transition-all duration-200 py-[1rem] text-[18px] 
          font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded-lg"
    >
      <span>Download Cv</span>
      <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
    </button>
  );
};

export default downloadCv;
