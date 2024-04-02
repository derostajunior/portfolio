import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  MegaphoneIcon,
  PhoneArrowUpRightIcon,
  PresentationChartLineIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-50 top-0 h-[9vh] bg-[#141c27] bg-opacity-50 shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          J
          <span className="text-[#b03320]">D.</span>
        </h1>
        <div className="nav">
          <div className="flex">
            <HomeIcon className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]" /> HOME
          </div>
        </div>
        <div className="nav">
          <div className="flex">
            <UserIcon className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]" /> ABOUT
          </div>
        </div>
        <div className="nav">
          <div className="flex">
            <WrenchScrewdriverIcon className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]" />
            SERVICES
          </div>
        </div>
        <div className="nav">
          <div className="flex">
            <PresentationChartLineIcon className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]" />
            PROJECT
          </div>
        </div>
        <div className="nav">
          <div className="flex">
            <MegaphoneIcon className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]" />
            BLOG
          </div>
        </div>
        <div className="nav">
          <div className="flex">
            <PhoneArrowUpRightIcon className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]" />
            CONTACT
          </div>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#b03320]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
