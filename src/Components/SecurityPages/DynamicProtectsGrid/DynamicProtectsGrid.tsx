import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

type ProtectsCard = {
  title: string;
  image: StaticImageData | string;
  description: string;
};

type DynamicProtectsGridProps = {
  heading: string;
  highlightWord?: string;
  cards: ProtectsCard[];
};

const DynamicProtectsGrid = ({
  heading,
  highlightWord,
  cards,
}: DynamicProtectsGridProps) => {
  return (
    <section className="bg-neutral-190 font-satoshi py-20">
      <Container>
        {/* Heading */}
        <h2 className="text-center text-neutral-185 font-satoshi font-extrabold text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize mb-12">
          {heading}<br/>
          {highlightWord && (
            <span className="text-primary-110">{highlightWord}</span>
          )}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative h-[360px] rounded-xl overflow-hidden cursor-pointer group"
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
    bg-neutral-197
    p-6"
              >
                <p className="text-[22px] font-black text-neutral-185 font-satoshi">
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

export default DynamicProtectsGrid;
