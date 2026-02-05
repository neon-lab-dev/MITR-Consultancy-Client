"use client";
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);

  return (
    <div className="font-Satoshi bg-neutral-185 text-white pt-40 relative h-[1000px] md:h-[1024px] overflow-hidden">
      
      {/* MOBILE background gif */}
      <div className="absolute inset-0 md:hidden z-0">
        <Image
          src={IMAGES.heroGif}
          alt="MITRA Consultancy"
          fill
          className="object-cover"
          priority
        />
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-neutral-5/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1300px] w-full mx-auto px-5 md:px-7 2xl:px-0">
        <div className="flex items-center justify-center h-full w-full">
          
          <div className="flex flex-col w-full">
            <h1 className="leading-normal text-[30px] font-extrabold max-w-[453px] capitalize">
              From Code <span className="text-primary-20"> to Compliance</span>
            </h1>

            <p className="text-sm max-w-full md:max-w-[453px] mt-3 mb-6">
              We help businesses design, build, and secure digital systems
              without complexity.
            </p>

            <Button
              handleClick={() => setIsContactUsModalOpen(true)}
              variant="primary"
              title="Talk To Our Team"
              classNames="w-[200px]"
            />

            <p className="text-xs mt-3">
              For startups, enterprises, and regulated teams.
            </p>
          </div>

          {/* DESKTOP / MD image */}
          <Image
            src={IMAGES.heroGif}
            alt="MITRA Consultancy"
            className="w-[350px] lg:w-[450px] h-[622px] lg:h-[800px] rounded-xl hidden md:block"
          />
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 w-full">
        <Marquee speed={60} gradient={false} pauseOnHover>
          <h2 className="text-[248px] font-extrabold whitespace-nowrap leading-none uppercase">
            MITRA CONSULTANCY * Code To Compliance
          </h2>
        </Marquee>
      </div>

      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default Hero;
