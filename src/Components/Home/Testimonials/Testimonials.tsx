"use client";

import { ICONS } from "@/assets";
import Container from "../../Shared/Container/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Fantastic service from MITRA Consultancy. We successfully launched our Domain-Hosting provider. Really appreciate this service.",
    author: "Gobinath, Digital Solutions Expert",
    avatar: ICONS.users,
  },
  {
    id: 2,
    text: "Their support helped us enhance our dental clinic operations significantly. Highly professional and dedicated service.",
    author: "Shashank, Dental Health Professional",
     avatar: ICONS.users,
  },
  {
    id: 3,
    text: "Innovative solutions improved our farming efficiency. The insights were incredibly valuable, and we are very satisfied with the results.",
    author: "Gaurav, Agricultural Innovator",
     avatar: ICONS.users,
  },
  {
    id: 4,
    text: "Amazing creativity and precision in our architectural projects. The space frame designs truly brought our vision to life. Highly recommend their expertise.",
    author: "Lakshaya, Architectural Designer",
     avatar: ICONS.users,
  },
  {
    id: 5,
    text: "The support for our student tiffin service was exceptional. Healthy, delicious meals delivered perfectly on time. Couldn’t ask for better service.",
    author: "Mohit, Student Tiffin Provider",
     avatar: ICONS.users,
  },
  {
    id: 6,
    text: "Top-notch service ensured all our business needs were met efficiently. Truly outstanding and reliable.",
    author: "Siv Chidambaram, Business Leader",
     avatar: ICONS.users,
  },
  {
    id: 7,
    text: "Med2HR solutions streamlined our healthcare recruitment process. The efficiency and results were outstanding. A game-changer for us.",
    author: "Pragati Pangey, Med2HR Specialist",
     avatar: ICONS.users,
  },
];


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(740);
  const [isMobile, setIsMobile] = useState(false);

  /* ⭐ RESPONSIVE DETECTION */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setCardWidth(540);
      } else {
        setIsMobile(false);
        setCardWidth(740);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ⭐ AUTOPLAY ONLY FOR DESKTOP */
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="bg-neutral-180 py-20 relative overflow-hidden font-Satoshi">
      <div className="absolute -top-10 -left-[224px] w-[448px] h-[448px] rounded-full bg-[linear-gradient(180deg,#074CB3_0%,#010A18_100%)] blur-[224px]" />

      <Container>
        <div className="text-center mb-16">
          <p className="font-black text-primary-110">PROOFS</p>

          <h2 className="font-extrabold text-neutral-185 text-[30px] mt-6">
            Trusted by Teams Who Value{" "}
            <span className="text-primary-110">Reliability</span>
          </h2>
        </div>
      </Container>

      {/* ⭐ SLIDER / STACK SWITCH */}
      <div className="relative w-full overflow-hidden">

        <div
          className={`flex ${
            isMobile ? "flex-col items-center gap-10" : "flex-row"
          } transition-transform duration-700 ease-out`}
          style={
            isMobile
              ? {}
              : {
                  transform: `translateX(calc(50% - ${
                    activeIndex * cardWidth
                  }px - ${cardWidth / 2}px))`,
                }
          }
        >
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                style={isMobile ? {} : { width: cardWidth }}
                className={`px-6 shrink-0 transition-all duration-500 ${
                  isMobile
                    ? "opacity-100 scale-100 w-full max-w-[540px]"
                    : isActive
                    ? "opacity-100 scale-100"
                    : "opacity-40 scale-90"
                }`}
              >
                <div className="text-center">

                  <div className="flex justify-center mb-6 relative">
                    <div className="size-[84px] rounded-full border border-primary-110 flex items-center justify-center text-primary-110 text-[52px] bg-neutral-180">
                      “
                    </div>

                    <div className="absolute right-[42%] translate-x-8">
                      <Image
                        src={item.avatar}
                        alt="user"
                        width={84}
                        height={84}
                        className="rounded-full border-4 border-neutral-180"
                      />
                    </div>
                  </div>

                  <p className="text-neutral-185 text-base leading-relaxed">
                    {item.text}
                  </p>

                  <p className="text-primary-110 mt-4 font-semibold">
                    • {item.author}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
