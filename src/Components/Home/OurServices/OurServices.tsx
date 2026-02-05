/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Container from "../../Shared/Container/Container";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "../ContactUs/ContactUs";
import { services } from "@/data/services";
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

  const [activeTabs, setActiveTabs] = useState<Record<number, string>>(() =>
    Object.fromEntries(
      services.map((service) => [service.id, service.tabs[0]]),
    ),
  );

  const handleTabChange = (serviceId: number, tab: string) => {
    setActiveTabs((prev) => ({
      ...prev,
      [serviceId]: tab,
    }));
  };

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
            {services.map((service) => {
              const activeItem = service.data.find(
                (item) => item.key === activeTabs[service.id],
              );

              return (
                <div
                  key={service.id}
                  className="rounded-xl border border-white bg-neutral-196 p-6 space-y-6"
                >
                  {/* Title */}
                  {service.title}

                  {/* Tabs */}
                  <div className="flex items-center flex-wrap gap-6">
                    {service.tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(service.id, tab)}
                        className={`
                px-6 py-3 rounded-3xl border border-primary-115 cursor-pointer
                transition duration-300 hover:bg-primary-110 hover:text-white
                ${
                  activeTabs[service.id] === tab
                    ? "bg-primary-110 text-white"
                    : "bg-neutral-180 text-primary-110"
                }
              `}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Active Content */}
                  {activeItem && (
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                      <Image
                        src={activeItem.image}
                        alt={activeItem.key}
                        className="w-[284px] h-[159px] object-cover rounded-xl"
                      />

                      <div>
                        <p className="text-sm font-medium text-neutral-185 leading-normal max-w-[604px]">
                          {activeItem.description}
                        </p>

                        <Button
                          handleClick={() => setIsContactUsModalOpen(true)}
                          variant="primary"
                          title="Talk To Our Team"
                          classNames="w-[200px] bg-primary-110 text-white mt-3"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
