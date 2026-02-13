"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import { IMAGES } from '@/assets';
import Container from "../../shared/Container/Container";

const WhyMitraTraining = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
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

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate progress for each card (0 to 1)
  // Each card becomes visible at different scroll points
  const card1Progress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const card2Progress = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const card3Progress = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const card4Progress = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  // Transform progress to y-axis movement (from 200px to 0)
  const getYTransform = (progress : any) => {
    return useTransform(progress, [0, 1], [200, 0]);
  };

  // Transform progress to opacity (from 0 to 1)
  const getOpacityTransform = (progress : any) => {
    return useTransform(progress, [0, 0.2, 1], [0, 0.2, 1]);
  };

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Container>
          <div className="font-satoshi py-14 h-screen flex flex-col">
            <h2 className="font-black text-white text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize">
              Why MITRA <span className="text-primary-110">Training</span>
            </h2>

            <div className="mt-12 flex gap-12 flex-1">
              <div ref={cardsContainerRef} className="flex flex-col gap-10 relative w-1/2">
                {whyMitraTrainings.map((detail, index) => {
                  // Select the appropriate progress based on index
                  const progress = 
                    index === 0 ? card1Progress :
                    index === 1 ? card2Progress :
                    index === 2 ? card3Progress :
                    card4Progress;

                  const y = getYTransform(progress);
                  const opacity = getOpacityTransform(progress);

                  return (
                    <motion.div
                      key={detail?.title}
                      style={{
                        y,
                        opacity,
                      }}
                      className="p-6 border-l-6 border-primary-10"
                    >
                      <h2 className="text-[22px] font-black text-neutral-120">
                        {detail?.title}
                      </h2>
                      <p className="font-general-sans text-lg text-neutral-120 mt-3">
                        {detail?.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="w-1/2 flex items-center">
                <Image 
                  src={IMAGES.whyMitraTraining} 
                  alt="" 
                  className="object-cover h-auto rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhyMitraTraining;