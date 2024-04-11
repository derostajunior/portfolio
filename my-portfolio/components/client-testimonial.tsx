import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { range } from "lodash";

interface Props {
  name: string;
  role: string;
  image: string;
  message: string;
  starNumber: number;
}

const ClientTestimonial = ({
  name,
  role,
  image,
  message,
  starNumber,
}: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        {range(starNumber).forEach(() => {
          return <StarIcon className="w-[2rem] h-[2rem] text-[#b03320]" />;
        })}
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem] ">
        {role}
      </p>
      <p className="text-[18px] text-white opacity-50 w-[90%] md:w-[50%] mb-[1.4rem] mx-auto">
        {message}
      </p>
    </div>
  );
};

export default ClientTestimonial;
