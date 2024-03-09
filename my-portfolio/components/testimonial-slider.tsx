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

const TestimonialSlider = () => {
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
        <ClientTestimonial
          image="/images/pic27.jpg"
          name="KIng James"
          role="Architect Developer"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. 
            Praesentium dolores voluptates exercitationem?"
        />
        <ClientTestimonial
          image="/images/c2.jpg"
          name="Adonis Simo"
          role="Cloud Ing"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. 
            Praesentium dolores voluptates exercitationem?"
        />
        <ClientTestimonial
          image="/images/pic29.jpg"
          name="Divine Kamdoum"
          role="IT NetWork"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. 
            Praesentium dolores voluptates exercitationem?"
        />
        <ClientTestimonial
          image="/images/pic36.jpg"
          name="Alban Foko"
          role="Web Developer"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum fugiat deleniti quos, dicta expedita delectus excepturi a. 
            Praesentium dolores voluptates exercitationem?"
        />
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
