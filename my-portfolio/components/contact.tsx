import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import React from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { firstName, lastName, email, message } = e.target.elements;

    let conFom = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };

    console.log(conFom);
  };

  return (
    <div className="bg-[url('/images/banner.jpg')] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading text-[#b03320]">Contact</h1>
      <div className="pt-[5rem] pb-[4rem] w-[50%] mx-auto">
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-3">
            {/* <label className="form-label" htmlFor="firstName">
              First Name
            </label> */}
            <input
              className="form-control"
              type="text"
              id="firstName"
              required
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label" htmlFor="lastName">
              Last Name
            </label> */}
            <input
              className="form-control"
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-3 col-span-2">
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
            {/* <label className="form-label" htmlFor="message">
              Message
            </label> */}
            <textarea
              className="bg-[#b0f0d3] rounded-lg w-full placeholder:text-gray-900 placeholder:font-semibold placeholder:text-[15px] focus:outline-none p-4 opacity-70 hover:opacity-100"
              id="message"
              cols={80}
              rows={10}
              required
              placeholder="Enter your Message"
            />
          </div>

          <button
            className="bg-[#46e99f] hover:bg-[#b03320] col-span-2 h-10 w-full font-bold text-gray-900 rounded-lg flex items-center justify-center"
            type="submit"
          >
            <span className="flex gap-2">
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
