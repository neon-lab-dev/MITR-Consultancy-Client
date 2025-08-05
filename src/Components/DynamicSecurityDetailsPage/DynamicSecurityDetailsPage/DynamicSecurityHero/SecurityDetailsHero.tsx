"use client";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { IMAGES } from "@/assets";
import { useState } from "react";

const SecurityDetailsHero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  return (
    <div className="font-Inter relative h-[1400px] xl:h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.emailSecurityHero}
          alt="MITRA Consultancy"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-50 bg-opacity-50 z-10"></div>

      {/* Content */}
      <Container>
        <div className="flex flex-col gap-8 xl:gap-20 items-center justify-center absolute top-0 bottom-0 z-20 max-w-[1300px] mx-auto px-5 md:px-7 2xl:px-0">
          <div>
            <h1 className="text-white text-center xl:text-start text-[32px] md:text-[48px] 2xl:text-[64px] font-bold max-w-[344px] md:max-w-[1071px] lg:max-w-[800px] mx-auto xl:mx-0">
              Email Security
            </h1>
            <p className="text-neutral-65 text-center xl:text-start text-xl xl:text-[39px] max-w-full md:max-w-[600px] leading-normal mt-5">
              Protecting Your Business From Digital Threats
            </p>
            <div className="mt-5 md:mt-9 xl:mt-[60px]">
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
