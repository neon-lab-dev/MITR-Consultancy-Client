/* eslint-disable react/no-unescaped-entities */
"use client"
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Image from "next/image";
import React, { useState } from "react";

const AboutUsHero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  return (
    <div className="font-Inter relative h-[300px] md:h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.aboutUsHeroImg}
          alt="MITRA Consultancy"
          className=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-50 bg-opacity-80 z-10"></div>

      {/* Content */}
      {/* <Container> */}
        <div className="flex items-center justify-center absolute top-0 bottom-0 flex-col z-20 w-full px-5 md:px-7 2xl:px-0">
          <h1 className="text-white text-center capitalize leading-6 md:leading-[40px] xl:leading-[80px] text-[32px] xl:text-[68px] font-bold max-w-[700px] mx-auto">
            About Us
          </h1>
        </div>
      {/* </Container> */}
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default AboutUsHero;
