/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { ICONS } from "@/assets";

const testimonials = [
  {
    name: "Arjun Patel",
    role: "IT Manager",
    message:
      "Their security audit exposed risks we never knew existed. Highly professional service.",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    message:
      "Reliable and fast incident response—helped us contain a data breach quickly.",
  },
  {
    name: "Ravi Kumar",
    role: "System Administrator",
    message:
      "Network security improved drastically after implementing their firewall and monitoring solutions.",
  },
  {
    name: "Anjali Mehta",
    role: "Compliance Officer",
    message:
      "Their penetration testing helped us meet regulatory standards with clear, actionable reports.",
  },
];

const CyberSecurityTestimonials = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="pt-[130px] pb-20 bg-neutral-155">
      <Container>
        <h1
          className={`font-bold text-neutral-10 text-[32px] md:text-[50px] xl:text-[64px] leading-normal md:leading-[49.68px] capitalize text-center`}
        >
          Testimonials
        </h1>

        <div className="mt-[60px]">
          <Swiper
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            loop={true}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-neutral-25/20 p-5 rounded-2xl h-[276px] w-full flex flex-col justify-between">
                  <p className="text-neutral-145 font-medium leading-6 lg:leading-9 text-base lg:text-2xl">
                    “{testimonial.message}”
                  </p>
                  <div>
                    <h3 className="text-neutral-145 text-base lg:text-xl font-medium">
                      {testimonial.name}
                    </h3>
                    <p className="text-neutral-145 text-sm md:text-lg mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom bottom controls */}
          <div className="flex items-center justify-center gap-4 mt-6 max-w-[300px] mx-auto">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-primary-10 hover:text-primary-10/80 transition"
            >
              <Image
                src={ICONS.rightArrowBlue}
                alt=""
                className="size-14 rotate-180"
              />
            </button>

            <div className="custom-pagination flex gap-2 [&>span]:w-3 [&>span]:h-3 [&>span]:rounded-full [&>span]:inline-block [&>span]:bg-gray-400 [&>span]:cursor-pointer [&>.swiper-pagination-bullet-active]:bg-blue-500 mx-auto"></div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-primary-10 hover:text-primary-10/80 transition"
            >
              <Image
                src={ICONS.rightArrowBlue}
                alt=""
                className="size-14 -rotate-[180]"
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CyberSecurityTestimonials;
