/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhatYouGain = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const gainDetails = [
    {
      description:
        "Get clear insights and actionable information without unnecessary delays.",
      title: "Faster decision-making",
    },
    {
      description:
        "Minimize disruptions and exposure through proactive security and compliance measures.",
      title: "Reduced operational risk",
    },
    {
      description:
        "Defined processes, ownership, and milestones ensure predictable delivery.",
      title: "Clear timelines & accountability",
    },
    {
      description:
        "Simplify operations by working with a single, trusted partner instead of multiple vendors.",
      title: "One reliable partner",
    },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants: any = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div ref={containerRef} className="font-satoshi py-14">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className={`font-black text-primary-20`}>WHAT YOU GAIN</p>
          <h2
            className={`font-extrabold text-white text-[30px] leading-normal capitalize my-3`}
          >
            Working With us means{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary-10"
            >
              Clarity, Control, and Confidence.
            </motion.span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              title="Book a Call"
              variant="primary"
              iconPosition="right"
              icon={<CgArrowTopRight size={24} />}
            />
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6 mt-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full xl:w-[50%]"
          >
            {gainDetails?.map((detail, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                custom={index}
                whileHover={{ x: 10 }}
                className="p-6 cursor-pointer"
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="font-black text-neutral-130 text-[22px] mb-2"
                >
                  {detail?.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-neutral-130 text-lg font-medium"
                >
                  {detail?.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="w-full xl:w-[50%]"
          >
            <Image 
              src={IMAGES.whatYouGain} 
              alt="What You Gain" 
              className="w-full h-full min-h-[448px] object-cover rounded-lg" 
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WhatYouGain;