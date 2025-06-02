/* eslint-disable react/no-unescaped-entities */
"use client";
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { useState } from "react";

const CybersecurityComplianceHero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  return (
    <div className="font-Inter relative h-screen">
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
        <div className="flex items-center justify-between absolute top-0 bottom-0 z-20">
          <div>
            <h1 className="text-white leading-6 md:leading-[40px] xl:leading-[80px] text-xl md:text-[32px] xl:text-[68px] font-bold max-w-[344px] md:max-w-[550px] xl:max-w-[1071px]">
              Comprehensive{" "}
              <span className="text-primary-20">Cybersecurity</span> Compliance
              for Growth and Resilience
            </h1>
            <p className="text-white text-[11px] md:text-sm xl:text-lg leading-[18px] xl:leading-7 max-w-[1071px] mt-3 xl:mt-6 px-4">
              Unlock your business's full potential with our comprehensive
              cybersecurity strategies. Safeguard your growth and resilience in
              the digital age.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-start gap-4 xl:gap-6 mt-4 md:mt-9 xl:mt-[62px]">
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="secondary"
                title="Speak to an Expert"
                classNames="w-auto"
              />
              <Button
                handleClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="primary"
                title="Take Compliance Assessment"
                classNames="w-auto"
              />
            </div>
          </div>

          <Image src={IMAGES.cyberSecurity} alt="MITRA Consultancy" />
        </div>
      </Container>
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default CybersecurityComplianceHero;
