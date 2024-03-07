import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Administrator systems',
        1500,
        'IT network',
        1500,
        'Help desk',
        1500
      ]}
    //   wrapper="span"
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
    //   style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TextEffect