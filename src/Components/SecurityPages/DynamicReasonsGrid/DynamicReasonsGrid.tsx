"use client";

import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

type ReasonCard = {
  title: string;
  image: StaticImageData | string;
  description: string;
};

type DynamicReasonsGridProps = {
  heading: string;
  highlightWord?: string;
  cards: ReasonCard[];
};

const DynamicReasonsGrid = ({
  heading,
  highlightWord,
  cards,
}: DynamicReasonsGridProps) => {
  return (
    <section className="bg-neutral-185 font-Satoshi h-full py-20">
      <Container>
        {/* Heading */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-black mb-12">
          {heading}{" "}
          {highlightWord && (
            <span className="text-primary-110">{highlightWord}</span>
          )}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative h-[460px] rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* White Expanding Panel */}
              <motion.div
                variants={{
                  rest: { y: "40%" },
                  hover: { y: "0%" },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="
    absolute bottom-0 left-0 w-full
    bg-neutral-130
    p-6"
              >
                <p className="text-[22px] font-black text-neutral-185">
                  {item.title}
                </p>

                <motion.p
                  variants={{
                    rest: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-sm font-general-sans text-neutral-185 mt-3"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DynamicReasonsGrid;
