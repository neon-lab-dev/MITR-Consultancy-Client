"use client";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type TSecurityDetailsHero = {
  heroImg: StaticImageData;
  page: string;
  heading: string;
  subHeading: string;
};
const SecurityDetailsHero: React.FC<TSecurityDetailsHero> = ({
  heroImg,
  page,
  heading,
  subHeading,
}) => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  return (
    <div className="font-Inter relative h-[500px] xl:h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="MITRA Consultancy"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-50 bg-opacity-80 xl:bg-opacity-50 z-10"></div>

      {/* Content */}
      <Container>
        <div className="flex flex-col gap-8 xl:gap-20 justify-center absolute top-0 bottom-0 z-20 max-w-[1300px] mx-auto px-5 md:px-7 2xl:px-0">
          <div className="flex items-center gap-2">
            <p className="text-neutral-175 text-sm font-medium">
              Security Services
            </p>
            <p className="text-white text-sm font-medium">/</p>
            <p className="text-primary-10 text-sm font-semibold">{page}</p>
          </div>
          <div>
            <h1 className="text-white text-center xl:text-start text-[32px] md:text-[48px] 2xl:text-[64px] font-bold max-w-[344px] md:max-w-[1071px] lg:max-w-[900px] mx-auto xl:mx-0">
              {heading}
            </h1>
            <p className="text-neutral-65 text-center xl:text-start text-xl xl:text-[39px] max-w-full md:max-w-[1000px] leading-normal mt-5">
              {subHeading}
            </p>
            <div className="mt-5 md:mt-9 xl:mt-[60px] flex items-center justify-center xl:justify-start">
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="primary"
                title="Talk to an Expert"
              />
            </div>
          </div>
        </div>
      </Container>
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default SecurityDetailsHero;
