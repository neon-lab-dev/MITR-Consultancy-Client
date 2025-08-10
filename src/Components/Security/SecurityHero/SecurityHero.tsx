/* eslint-disable react/no-unescaped-entities */
"use client";
import { ICONS, IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { useState } from "react";

const SecurityHero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);

  const features = [
    "Secure Access",
    "Comply Confidently",
    "Fortify Systems",
    "Thrive Safely",
  ];

  
  return (
    <div className="font-Inter relative h-[850px] xl:h-[800px] 2xl:h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.cybersecurityComplianceHeroImg}
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
        <div className="flex flex-col gap-8 xl:gap-20 items-start justify-center absolute top-0 bottom-0 z-20 max-w-full xl:max-w-[1300px] mx-auto px-5 md:px-7 2xl:px-0 w-auto 2xl:w-full">
          <div>
            <h1 className="text-white text-center xl:text-start leading-8 md:leading-[48px] xl:leading-[67px] text-[24px] md:text-[40px] xl:text-[56px] font-bold max-w-[344px] md:max-w-[1071px] lg:max-w-[800px] mx-auto xl:mx-0">
              End-to-End{" "}
              <span className="text-primary-20">Security Solutions</span> for
              All Industries
            </h1>
            <p className="text-white text-center xl:text-start text-[11px] md:text-sm xl:text-lg leading-[18px] xl:leading-7 max-w-full md_maw-w-[850px] lg:max-w-[1071px] mt-5 xl:mt-6">
              MITRA Consultancy delivers end-to-end cybersecurity solutions —
              from risk assessments to incident response — helping your business
              stay secure, compliant, and resilient in a dynamic digital
              landscape.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center xl:justify-start gap-4 xl:gap-6 mt-5 md:mt-9 xl:mt-[62px]">
              {/* <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="secondary"
                title="Speak to an Expert"
                classNames="w-full md:w-auto"
              /> */}
              <Button
                handleClick={() =>
                  document
                    .getElementById("complianceAssessment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="primary"
                title="Talk to an expert"
                classNames="w-full md:w-auto"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 z-10 w-full">
            {features?.map((feature) => (
              <div
                key={feature}
                className="bg-[#ffffff1a] rounded border border-[#ffffff1a] text-white/75 px-4 py-3 flex items-center gap-[10px] w-full"
              >
                <Image src={ICONS.featureIcon} alt="" className="size-8" />
                <p>{feature}</p>
              </div>
            ))}
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

export default SecurityHero;
