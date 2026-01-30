import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "@/Components/Reusable/Button/Button";

const CTA = () => {
  return (
    <div className="font-Satoshi relative h-[480px] flex items-center w-full">
      <Image src={IMAGES.ctaBg} alt="" className="w-full h-full absolute z-0" />

      <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-between lg:items-center  w-full h-full z-10 relative max-w-[1300px] mx-auto px-5 md:px-7 2xl:px-0 gap-6">
        <h2 className="text-white text-2xl md:text-[38px] font-extrabold max-w-[680px] leading-[50px]">
          From Code to Compliance — Where Innovation Meets Security.
        </h2>
        <Button
          variant="primary"
          title="Talk to an Expert"
          classNames="w-full sm:w-auto"
        />
      </div>
    </div>
  );
};

export default CTA;
