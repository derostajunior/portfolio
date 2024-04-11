import React from "react";
import Carousel from "react-multi-carousel";
import ClientTestimonial from "./client-testimonial";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

interface testimonialProps {
  image: string;
  name: string;
  role: string;
  message: string;
}

interface DataTestimonialProps {
  TestimonialData: readonly testimonialProps[];
}

const TestimonialSlider: React.FC<DataTestimonialProps> = ({
  TestimonialData,
}) => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
      >
        {/** ClientReview */}
        {TestimonialData.map((testimonial, index) => (
          <ClientTestimonial
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            role={testimonial.role}
            message={testimonial.message}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
