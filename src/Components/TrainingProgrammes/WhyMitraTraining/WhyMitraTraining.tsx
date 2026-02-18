"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Container from "./../../Shared/Container/Container";

const WhyMitraTraining = () => {

  const whyMitraTrainings = [
    {
      title: "Built for real client demand",
      description:
        "We bring active opportunities across security, compliance, design, and development projects.",
    },
    {
      title: "Practical & Hands-On",
      description:
        "Learning is reinforced through exercises, scenarios, and applied tasks.",
    },
    {
      title: "Trainers with Delivery Experience",
      description:
        "Training is led by professionals involved in real development, design, and security work.",
    },
    {
      title: "Quality & Security Mindset",
      description:
        "MITRA emphasizes responsible practices, structured thinking, and security awareness across all programs.",
    },
  ];

  return (
      <div className="h-full">
        <Container>
          <div className="font-satoshi py-14 flex flex-col">
            <h2 className="font-black text-white text-[32px] xl:text-[40px] 2xl:text-[64px] capitalize">
              Why MITRA{" "}
              <span className="text-primary-110">Training</span>
            </h2>

            <div className="mt-12 flex gap-12 flex-1">
              {/* Cards */}
              <motion.div
                className="flex flex-col gap-10 relative w-full lg:w-1/2"
              >
                {whyMitraTrainings.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="p-6 border-l-6 border-primary-10"
                  >
                    <h2 className="text-[22px] font-black text-neutral-120">
                      {detail.title}
                    </h2>
                    <p className="font-general-sans text-lg text-neutral-120 mt-3">
                      {detail.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Image */}
              <motion.div
                className="w-1/2 hidden lg:flex items-center"
              >
                <Image
                  src={IMAGES.whyMitraTraining}
                  alt="Why Mitra Training"
                  className="object-cover h-auto rounded-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default WhyMitraTraining;
