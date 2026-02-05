"use client";

import Container from "../../Shared/Container/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "MITRA helped us simplify security and compliance without adding complexity.",
    author: "IT Manager, Technology Company",
    avatar: "/images/testimonial-user.png",
  },
  {
    id: 2,
    text: "Their compliance process was extremely structured and efficient.",
    author: "Security Head, SaaS Company",
    avatar: "/images/testimonial-user.png",
  },
  {
    id: 3,
    text: "Professional, knowledgeable, and very responsive.",
    author: "CTO, Fintech Startup",
    avatar: "/images/testimonial-user.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(740);

  /* ⭐ RESPONSIVE WIDTH */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidth(540);
      } else {
        setCardWidth(740);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ⭐ AUTOPLAY */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-neutral-180 py-20 relative overflow-hidden font-Satoshi">

      <Container>
        <div className="text-center mb-16">
          <p className="font-black text-primary-110">PROOFS</p>

          <h2 className="font-extrabold text-neutral-185 text-[30px] mt-6">
            Trusted by Teams Who Value{" "}
            <span className="text-primary-110">Reliability</span>
          </h2>
        </div>
      </Container>

      {/* ⭐ SLIDER */}
      <div className="relative w-full overflow-hidden">

        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(50% - ${
              activeIndex * cardWidth
            }px - ${cardWidth / 2}px))`,
          }}
        >
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                style={{ width: cardWidth }}
                className={`px-6 shrink-0 transition-all duration-500 ${
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-40 scale-90"
                }`}
              >
                <div className="text-center">

                  <div className="flex justify-center mb-6 relative">
                    <div className="w-16 h-16 rounded-full border border-primary-110 flex items-center justify-center text-primary-110 text-2xl">
                      “
                    </div>

                    <div className="absolute right-[42%] translate-x-8">
                      <Image
                        src={item.avatar}
                        alt="user"
                        width={52}
                        height={52}
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
