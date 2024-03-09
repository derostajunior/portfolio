import React from "react";
import TestimonialSlider from "./testimonial-slider";

const Testimonial = () => {
    return (
        <div className="bg-[url('/images/banner.jpg')] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Client <span className="text-[#b03320]">Review</span>
            </h1>
            <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
                <TestimonialSlider />
            </div>
        </div>
    )
}

export default Testimonial