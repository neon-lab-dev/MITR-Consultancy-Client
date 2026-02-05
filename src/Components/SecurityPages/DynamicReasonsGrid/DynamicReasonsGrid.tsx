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
              layout
              initial={{ height: 420 }}
              whileHover={{ height: 520 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-neutral-130 rounded-xl flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover h-[360px] w-full"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-start">
                <p className="text-[22px] font-black text-neutral-185">
                  {item.title}
                </p>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="mt-3"
                >
                  <p className="text-[18px] font-medium text-neutral-185">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DynamicReasonsGrid;
