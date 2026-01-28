import React from "react";
import Container from "../Shared/Container/Container";
import { IMAGES } from "@/assets";
import Image from "next/image";

const CareersHero = () => {
  return (
    <div className="bg-neutral-185  font-Inter relative  overflow-hidden">
      <Container>
        <div className="pt-80 max-w-[344px] md:max-w-[1071px] lg:max-w-[800px] mx-auto">
          <h1 className="text-white text-center leading-8 mx-auto py-3 md:leading-[48px] xl:leading-[70px] text-[24px] md:text-[40px] xl:text-[56px] font-bold max-w-[344px] md:max-w-[1071px] lg:max-w-[700px] ">
            Grow Your Career at <span className="text-primary-20">MITRA</span>
          </h1>
          <p className="text-center 2xl:text-sm font-medium text-neutral-130 mb-3">
            Work on meaningful technology, design, and security projects that
            help businesses build, protect, and scale their digital presence.
          </p>
          <p className="text-center 2xl:text-sm font-medium text-neutral-130 mb-36">
            From cybersecurity and compliance to web development, UI/UX, and
            digital solutions — MITRA brings together diverse skills to solve
            real business problems.
          </p>
        </div>
        <Image src={IMAGES.careersImage} alt=" mitra career" className="h-[368px] w-full object-cover rounded-t-xl"/>
      </Container>
    </div>
  );
};

export default CareersHero;
