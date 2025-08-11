"use client";
import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Heading from "@/Components/Reusable/Heading/Heading";
import { useScroll, useTransform, motion } from "framer-motion";

type TPointers = {
  title: string;
  description: string;
};

type TCommonThreats = {
  heading: string;
  image: StaticImageData;
  pointers: TPointers[];
};

const CommonThreats: React.FC<TCommonThreats> = ({
  heading,
  image,
  pointers,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  /* eslint-disable react-hooks/rules-of-hooks */
    const scales = pointers.map((_, i) => {
      const targetScale = 1 - (pointers.length - i) * 0.05;
      return useTransform(scrollYProgress, [i * 0.1, 60], [1, targetScale]);
    });
    /* eslint-enable react-hooks/rules-of-hooks */
  return (
    <div className="py-10 xl:py-20 2xl:py-[120px] bg-gradient-threats font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-16 max-w-[900px] 2xl:max-w-full mx-auto">
          <Heading heading={heading} align="center" />
          <div className="relative flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-10">
            <Image
              src={image}
              alt="Common Threats"
              className="w-full md:w-[60%] lg:w-[45%] xl:w-[37%] 2xl:w-[45%] mx-auto h-full sticky top-32"
            />
            <div ref={scrollRef} className="w-full lg:w-[55%]">
              {pointers.map((item, i) => (
                <div
                  key={i}
                  className="h-[15vh] sticky top-32 flex items-start"
                >
                  <motion.div
                    className="w-full"
                    style={{
                      scale: scales[i],
                      top: `calc(${i * 25}px)`,
                    }}
                  >
                    <ServiceCard
                      number={i + 1}
                      title={item.title}
                      description={item.description}
                      gradient="bg-gradient-threats-card"
                      textColor="#FC464663"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommonThreats;
