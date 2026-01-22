"use client";
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { useState, useEffect } from "react";

const CybersecurityComplianceHero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    "Security Experts",
    "Verified Protocols",
    "Custom Solutions",
    "Robust Updation",
  ];

  const heroImages = [
    IMAGES.complianceServiceHero,
    IMAGES.complianceServiceHero2,
    IMAGES.complianceServiceHero3,
    IMAGES.complianceServiceHero4,
  ];

  // Auto slide effect - change image every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <div className="font-Inter relative h-[1100px] xl:h-[850px] 2xl:h-[890px] overflow-hidden">
      {/* Background Images Carousel - Continuous Left Scroll */}
      <div
        className="absolute inset-0 z-0 flex"
        style={{
          width: `${heroImages.length * 100}%`,
          transform: `translateX(-${currentImageIndex * (100 / heroImages.length)}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
            style={{ width: `${100 / heroImages.length}%` }}
          >
            <Image
              src={image}
              alt={`MITRA Consultancy ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-5 bg-opacity-50 z-10"></div>

      {/* Content */}
      <Container>
        <div className="flex flex-col justify-center absolute top-0 bottom-0 z-20 max-w-[1300px] px-5 md:px-7 2xl:px-0">
          <div className="max-w-[552px]">
            <h1 className="text-white text-center xl:text-start leading-8 md:leading-[48px] xl:leading-[70px] text-[24px] md:text-[40px] xl:text-[56px] font-bold max-w-[344px] md:max-w-[1071px] lg:max-w-[800px]">
              <span className="text-primary-20">Compliance Made Simple</span>{" "}
              for Your Business
            </h1>
            <p className="text-white text-center xl:text-start text-[11px] md:text-sm xl:text-lg leading-[18px] xl:leading-7 max-w-full md_maw-w-[850px] lg:max-w-[1071px] mt-5 xl:mt-6">
              Mitra Consultancy helps businesses manage ISO, SOC, DPDP, GDPR,
              and other regulatory compliances—reducing risk, simplifying
              audits, and keeping you audit-ready.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center xl:justify-start gap-6 xl:gap-6 mt-6">
              <Button
                handleClick={() =>
                  document
                    .getElementById("complianceAssessment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="secondary"
                title="Explore Our Solutions"
                classNames="w-full md:w-auto"
              />
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="primary"
                title="Talk to an Expert"
                classNames="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 z-10 max-w-fit">
            {features?.map((feature, index) => (
              <div key={feature} className="text-white/75 flex flex-col gap-6">
                <span>0{index + 1}</span>
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

export default CybersecurityComplianceHero;
