import React from "react";

const Nav = () => {
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          Dev
          <span className="text-blue-400">SecOps</span>
        </h1>
        <div className="nav">HOME</div>
        <div className="nav">SERVICES</div>
        <div className="nav">ABOUT</div>
        <div className="nav">PROJECT</div>
        <div className="nav">BLOG</div>
        <div className="nav">CONTACT</div>
      </div>
    </div>
  );
};

export default Nav;
