"use client";
import Container from "../../Shared/Container/Container";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../assets/index";
// import { ourProjectsContent } from "./ourProjectsContents";

const OurProjects = () => {
  return (
    <div id="portfolio" className="bg-neutral-185 py-[128px] font-Satoshi">
      <Container>
        {/* Heading */}
        <div>
          <p className={`font-semibold text-primary-20`}>PROJECTS</p>
          <h2
            className={`font-extrabold text-white text-[30px] leading-normal capitalize mt-6`}
          >
            Selected <span className="text-primary-10">Work</span>
          </h2>
          <p className="text-sm mt-3 text-white">
            A glimpse into how we help teams turn requirements into working
            solutions.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          <div
            className={`group relative rounded-xl overflow-hidden h-[564px]`}
          >
            {/* Background Image */}
            <Image
              src={IMAGES.aboutUs}
              alt={""}
              fill
              className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content Wrapper */}
            <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-end">
              {/* Title */}
              <h3 className="text-white font-extrabold text-[22px] md:text-[26px] lg:text-[30px]">
                Students Tiffin
              </h3>

              <p className="text-neutral-130 font-medium mt-3">
                Students Tiffin is a subscription-based meal delivery service
                providing fresh, healthy, and affordable tiffin meals for
                students. With reliable delivery and customizable options, it
                supports daily nutrition while accommodating diverse dietary
                preferences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div
              className={`group relative rounded-xl overflow-hidden h-[564px]`}
            >
              {/* Background Image */}
              <Image
                src={IMAGES.letsTalkBgImg}
                alt={""}
                fill
                className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-white font-extrabold text-[22px] md:text-[26px] lg:text-[30px]">
                  Students Tiffin
                </h3>

                <p className="text-neutral-130 font-medium mt-3">
                  Students Tiffin is a subscription-based meal delivery service
                  providing fresh, healthy, and affordable tiffin meals for
                  students. With reliable delivery and customizable options, it
                  supports daily nutrition while accommodating diverse dietary
                  preferences.
                </p>
              </div>
            </div>

            <div
              className={`group relative rounded-xl overflow-hidden h-[564px]`}
            >
              {/* Background Image */}
              <Image
                src={IMAGES.letsTalkBgImg}
                alt={""}
                fill
                className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-white font-extrabold text-[22px] md:text-[26px] lg:text-[30px]">
                  Students Tiffin
                </h3>

                <p className="text-neutral-130 font-medium mt-3">
                  Students Tiffin is a subscription-based meal delivery service
                  providing fresh, healthy, and affordable tiffin meals for
                  students. With reliable delivery and customizable options, it
                  supports daily nutrition while accommodating diverse dietary
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
