/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Container from "../../Shared/Container/Container";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "../ContactUs/ContactUs";
// At the top of your file
// @ts-ignore
// const mixitup = (await import("mixitup")).default;

const OurServices = () => {
  const mixerRef = useRef(null);

  useEffect(() => {
    let mixerInstance: any;

    const initMixitup = async () => {
      if (!mixerRef.current) return;

      const mixitup = (await import("mixitup")).default;

      mixerInstance = mixitup(mixerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 400,
        },
      });

      mixerInstance.filter(".cyber");
    };

    initMixitup();

    return () => {
      if (mixerInstance) {
        mixerInstance.destroy();
      }
    };
  }, []);

  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);

  const [activeSecurityTab, setActiveSecurityTab] = useState("Compliance");
  const cyberSecurityDetails = [
    {
      key: "Compliance",
      image: IMAGES.aboutUsHeroImg,
      description:
        "Our compliance services help organizations meet regulatory requirements through structured assessments, audits, and ongoing risk monitoring. We identify gaps early, support audit readiness, and ensure compliance is maintained consistently over time.",
    },
    {
      key: "Security",
      image: IMAGES.security,
      description:
        "Our compliance services help organizations meet regulatory requirements through structured assessments, audits, and ongoing risk monitoring. We identify gaps early, support audit readiness, and ensure compliance is maintained consistently over time.",
    },
    {
      key: "Email Security",
      image: IMAGES.mailLock,
      description:
        "Our compliance services help organizations meet regulatory requirements through structured assessments, audits, and ongoing risk monitoring. We identify gaps early, support audit readiness, and ensure compliance is maintained consistently over time.",
    },
    {
      key: "Endpoint Security",
      image: IMAGES.endpointSecurity,
      description:
        "Our compliance services help organizations meet regulatory requirements through structured assessments, audits, and ongoing risk monitoring. We identify gaps early, support audit readiness, and ensure compliance is maintained consistently over time.",
    },
    {
      key: "Network Security",
      image: IMAGES.networkSecurity,
      description:
        "Our compliance services help organizations meet regulatory requirements through structured assessments, audits, and ongoing risk monitoring. We identify gaps early, support audit readiness, and ensure compliance is maintained consistently over time.",
    },
    {
      key: "VAPT Security",
      image: IMAGES.vaptSecurity,
      description:
        "Our compliance services help organizations meet regulatory requirements through structured assessments, audits, and ongoing risk monitoring. We identify gaps early, support audit readiness, and ensure compliance is maintained consistently over time.",
    },
  ];

  const activeSecurityItem = cyberSecurityDetails.find(
    (item) => item.key === activeSecurityTab,
  );

  const services = [
    {
      id: 2,
      title: (
        <h2
          className={`font-extrabold text-neutral-185 text-[30px] leading-normal`}
        >
          2. Develop
          <span className="text-primary-10">ment</span>
        </h2>
      ),
      pointers: [
        "Mobile App Development",
        "Backend Development",
        "Frontend Development",
        "Full Stack Web Solutions",
        "Web Development",
        "Custom Software Solutions",
      ],
    },
    {
      id: 3,
      title: (
        <h2
          className={`font-extrabold text-neutral-185 text-[30px] leading-normal`}
        >
          3. Des
          <span className="text-primary-10">ign</span>
        </h2>
      ),
      pointers: [
        "UI/UX Design",
        "Graphic Design",
        "3D Design Walkthroughs",
        "CGI Works",
        "Brand Folios",
        "Product Design",
      ],
    },
  ];

  return (
    <div
      id="services"
      className="relative bg-white section h-full font-Satoshi"
    >
      <Image
        src={IMAGES.gradientBg}
        alt="MITRA Consultancy Services"
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="relative z-20 py-14">
        <Container>
          <p className={`font-semibold text-primary-20 text-center`}>
            OUR SERVICES
          </p>
          <h2
            className={`font-extrabold text-neutral-185 text-[30px] leading-normal capitalize text-center max-w-[936px] mx-auto mt-6`}
          >
            We focus on solving real business problems,{" "}
            <span className="text-primary-10">
              not just delivering services.
            </span>
          </h2>

          <div className="max-w-full lg:max-w-[900px] mx-auto flex flex-col gap-6 mt-12">
            <div className="rounded-xl border border-white bg-neutral-196 p-6 space-y-6">
              <h2
                className={`font-extrabold text-neutral-185 text-[30px] leading-normal capitalize`}
              >
                1. Cyber <span className="text-primary-10">Security</span>
              </h2>

              {/* tab buttons */}
              <div className="flex items-center flex-wrap gap-6">
                {cyberSecurityDetails?.map((item) => (
                  <button
                    key={item?.key}
                    onClick={() => setActiveSecurityTab(item?.key)}
                    className={`
                px-6 py-3 rounded-3xl border border-primary-115 cursor-pointer hover:bg-primary-110 hover:text-white transition duration-300

                ${activeSecurityTab === item?.key ? "bg-primary-110 text-white" : "bg-neutral-180 text-primary-110"}
                `}
                  >
                    {item?.key}
                  </button>
                ))}
              </div>

              <div ref={mixerRef} className="flex items-center gap-12">
                <Image
                  src={activeSecurityItem?.image}
                  alt={activeSecurityItem?.key || "Security"}
                  className="w-[284px] h-[159px] object-cover rounded-xl"
                />

                <div>
                  <p className="text-sm font-medium text-neutral-185 leading-normal max-w-[604px]">
                    {activeSecurityItem?.description}
                  </p>

                  <Button
                    handleClick={() => setIsContactUsModalOpen(true)}
                    variant="primary"
                    title="Talk To Our Team"
                    classNames="w-[200px] bg-primary-110 text-white mt-3"
                  />
                </div>
              </div>
            </div>

            {services?.map((service) => (
              <div
                key={service?.id}
                className="rounded-xl border border-white bg-neutral-196 p-6 space-y-6"
              >
                {service?.title}

                {/* tab buttons */}
                <div className="flex items-center flex-wrap gap-6">
                  {service?.pointers?.map((item) => (
                    <button
                      key={item}
                      className={`
                px-6 py-3 rounded-3xl border border-primary-115 cursor-pointer hover:bg-primary-110 hover:text-white transition duration-300
                `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default OurServices;
