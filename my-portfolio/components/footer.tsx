import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="bg-[#0f1722] pt-[2rem] md:pt-[1rem] pb-[1rem] gap-8 flex items-center justify-center text-white text-[12px] z-[30] p-4">
      <div className="footer-copywright">
        <h3>
          Designed and Developed by{" "}
          <span className="text-[#b03320]">Junior Daquin Deugoue</span>
        </h3>
      </div>
      <div className="footer-copywright">
        <h3>Copyright © {year} J2D</h3>
      </div>
      <div className="flex">
        <ul className="inline-flex gap-4">
          <li>
            <a
              href="https://github.com"
              style={{ color: "#55e6a5" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              style={{ color: "#55e6a5" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/"
              style={{ color: "#55e6a5" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              style={{ color: "#55e6a5" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
