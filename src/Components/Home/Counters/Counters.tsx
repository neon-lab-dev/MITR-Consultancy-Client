"use client";
import { ICONS } from "@/assets";
import Heading from "@/Components/Reusable/Heading/Heading";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

const Counters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const counterData = [
    { icon: ICONS.experience, title: "Years in business", value: 2 },
    { icon: ICONS.partners, title: "Global Partners", value: 10 },
    { icon: ICONS.secured, title: "industry served", value: 20 },
    { icon: ICONS.projects, title: "Ongoing Projects", value: 15 },
  ];

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-counters  py-[64px] font-Inter" ref={ref}>
      <Container>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center justify-center"
        >
          <Heading heading="The MITRA Milestones" align="center" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-10 lg:gap-0 justify-between mt-[72px] flex-wrap gap-y-12">
            {counterData.map((data, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-9"
              >
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    custom={index}
                    animate="animate"
                    variants={{
                      animate: (i: number) => ({
                        y: [0, -8, 0],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.4,
                        },
                      }),
                    }}
                  >
                    <Image src={data.icon} alt="icon" className="size-10" />
                  </motion.div>

                  <AnimatedCounter
                    target={data.value}
                    className="font-extrabold text-neutral-10 text-[52px] mt-6"
                  />
                  <p className="text-neutral-160 text-2xl mt-1">{data.title}</p>
                </div>

                {index < counterData.length - 1 && (
                  <div className="w-1 h-16 bg-primary-85 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Counters;
