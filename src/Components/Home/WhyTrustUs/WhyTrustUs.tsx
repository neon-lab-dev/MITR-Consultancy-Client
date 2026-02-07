/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyTrustUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const featureDetails = [
    {
      key: "predictableTimelines",
      image: IMAGES.predictableTimelines,
      title: "Predictable timelines",
    },
    {
      key: "experiencedIndustries",
      image: IMAGES.experiencedIndustries,
      title: "Experienced across industries",
    },
    {
      key: "securityDevelopment",
      image: IMAGES.securityDevelopment,
      title: "Security + development under one roof",
    },
    {
      key: "vendors",
      image: IMAGES.vendors,
      title: "One partner instead of 4 vendors",
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div ref={containerRef} className="font-Satoshi py-14">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className={`font-semibold text-primary-20`}>WHY TRUST US</p>
          <h2
            className={`font-extrabold text-white text-[30px] leading-normal capitalize mt-3`}
          >
            Why Businesses Work with{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary-10"
            >
              MITRA
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12"
        >
          {featureDetails?.map((detail, index) => (
            <motion.div
              key={detail?.key}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -10 }}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={detail.image}
                  alt=""
                  width={300}
                  height={200}
                  className="w-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.2 }}
                className="absolute inset-0 bg-black/40"
              />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-white font-extrabold text-2xl"
                >
                  {detail?.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default WhyTrustUs;