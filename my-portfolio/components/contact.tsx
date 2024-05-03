import {
  PaperAirplaneIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/20/solid";
import { SocialIcon } from "react-social-icons";
import {DownloadCv} from "../components"

import React from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, subject, email, message } = e.target.elements;

    let conFom = {
      firstName: name.value,
      email: email.value,
      lastName: subject.value,
      message: message.value,
    };

    console.log(conFom);
  };

  const socialMediaHandlesLinks = {
    gitHub: "https://github.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/x",
  };

  return (
    <div className="bg-[url('/images/banner.jpg')] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading text-[#b03320]">Contact</h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto flex flex-col md:flex-row">
        <div className="mb-8 max-w-[40rem]">
          <h1 className="font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-[#55e6a5] uppercase">
            Let's get in touch
          </h1>
          <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] text-left mb-4">
            Say hello to{" "}
            <span className="text-[#55e6a5]">juniordeungou@gmail.com</span> For
            more information. Contact me with any questions, collaboration
            opportunities or just to exchange ideas. I'm always available to
            discuss exciting projects and explore new opportunities. Fill in the
            form below or use the contact details provided to get in touch with
            me directly. I look forward to hearing from you!
          </p>
          <div className="flex flex-row text-[#55e6a5] gap-4 mb-10">
            <SocialIcon
              url={socialMediaHandlesLinks.gitHub}
              bgColor="#24292e"
            />
            <SocialIcon url={socialMediaHandlesLinks.linkedin} bgColor="#24292e"/>
            <SocialIcon url={socialMediaHandlesLinks.instagram} bgColor="#24292e"/>
            <SocialIcon url={socialMediaHandlesLinks.twitter} bgColor="#24292e"/>
          </div>
          <DownloadCv />
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-3 col-span-2 md:col-span-1">
            {/* <label className="form-label" htmlFor="name">
              Name
            </label> */}
            <input
              className="form-control"
              type="text"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-3 col-span-2 md:col-span-1">
            {/* <label className="form-label" htmlFor="email">
              Email
            </label> */}
            <input
              className="form-control"
              type="email"
              id="email"
              required
              placeholder="Your email"
            />
          </div>
          <div className="mb-3 col-span-2">
            {/* <label className="form-label" htmlFor="subject">
              Subject
            </label> */}
            <input
              className="form-control"
              type="text"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-3 col-span-2">
            {/* <label className="form-label" htmlFor="message">
              Message
            </label> */}
            <textarea
              className="bg-[#b0f0d3] rounded-lg w-full placeholder:text-gray-900 placeholder:font-semibold placeholder:text-[15px] focus:outline-none p-4 opacity-50 hover:opacity-100"
              id="message"
              cols={80}
              rows={10}
              required
              placeholder="Enter your Message"
            />
          </div>

          <button
            className="bg-[#46e99f] py-[1rem]  hover:bg-[#b03320] col-span-2 w-full font-bold text-gray-900 rounded-lg flex items-center justify-center"
            type="submit"
          >
            <span className="flex items-center justify-center gap-2 font-bold uppercase text-[18px]">
              {formStatus}
              <PaperAirplaneIcon className="w-[1.3rem] h-[1.3rem] mr-[0.5rem]" />
            </span>
          </button>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
