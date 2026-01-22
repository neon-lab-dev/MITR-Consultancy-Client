"use client";
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { useState } from "react";

const SecurityHero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);

  return (
    <div className="font-Inter relative h-[850px] xl:h-[800px] 2xl:h-[900px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.securityServiceHero}
          alt="MITRA Consultancy"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-50 bg-opacity-50 z-10 font-Satoshi"></div>

      {/* Content */}
      <Container>
        <div className="flex flex-col gap-8 xl:gap-20 items-center justify-center absolute top-0 bottom-0 z-20 max-w-full xl:max-w-[1300px] mx-auto px-5 md:px-7 2xl:px-0 w-auto 2xl:w-full">
          <div>
            <h1 className="text-white text-center leading-8 md:leading-[48px] xl:leading-[67px] text-[24px] md:text-[40px] xl:text-[56px] font-bold max-w-[1000px] mx-auto">
              End-to-End{" "}
              <span className="text-primary-20">Security Solutions</span> for
              All Industries
            </h1>
            <p className="text-white text-center text-[11px] md:text-sm xl:text-lg leading-[18px] xl:leading-7 max-w-full lg:max-w-[1128px] mt-5 xl:mt-6">
              MITRA Consultancy delivers end-to-end cybersecurity solutions —
              from risk assessments to incident response — helping your business
              stay secure, compliant, and resilient in a dynamic digital
              landscape.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 xl:gap-6 mt-5 md:mt-9 xl:mt-[66px]">
              <Button
                handleClick={() =>
                  document
                    .getElementById("complianceAssessment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="secondary"
                title="Get a Free Security Risk Assessment"
                classNames="w-full md:w-auto"
              />
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="primary"
                title="Talk to a Security Expert (15 min)"
                classNames="w-full sm:w-auto"
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

export default SecurityHero;
