"use client";
import Container from "@/Components/Shared/Container/Container";
import ServiceCard from "../ServiceCard/ServiceCard";
import Image, { StaticImageData } from "next/image";
import Heading from "@/Components/Reusable/Heading/Heading";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

type TPointers = {
  title: string;
  description: string;
};

type TDeploymentOption = {
  heading: string;
  image: StaticImageData;
  pointers: TPointers[];
};

const DeploymentOption: React.FC<TDeploymentOption> = ({
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
      return useTransform(scrollYProgress, [i * 0.1, 50], [1, targetScale]);
    });
    /* eslint-enable react-hooks/rules-of-hooks */
  return (
    <div className="py-5 2xl:py-[120px] bg-gradient-compliance font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-16 max-w-[900px] 2xl:max-w-full mx-auto">
          <Heading heading={heading} align="center" />
          <div className="relative flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-[60px] w-full">

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
                    gradient="bg-gradient-compliance-card"
                    textColor="#213FAC2B"
                  />
                  </motion.div>
                </div>
              ))}
            </div>
            <Image src={image} alt="Common Threats" className="w-full lg:w-[45%] sticky top-32" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DeploymentOption;
