import React from "react";

import Particle from "./Particle";
import TextEffect from "./text-effect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {DownloadCv } from "../components"

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-[#b03320]">JUNIOR DAQUIN!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            quo officia error excepturi optio at fugit non. Odit corrupti
            voluptatem in suscipit magnam deleniti quidem?
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <DownloadCv />

            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-[#b03320] transition-all duration-200 text-[#55e6a5]" />
              <span className="text-[20px] font-semibold text-white">
                Watch The Video
              </span>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u3.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
