/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/Components/Shared/Container/Container";
import React from "react";
import TrustAndResultCard from "./TrustAndResultCard";
import Image from "next/image";
import { IMAGES } from "@/assets";
import { motion } from "framer-motion";

const TrustAndResults = () => {
  const containerVariants: any = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const cardVariants: any = {
    hidden: {
      opacity: 0,
      y: 120,
    },
    show: (order: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: order * 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const titleVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const spanVariants: any = {
    hidden: { 
      opacity: 0,
      backgroundSize: "0% 100%"
    },
    show: {
      opacity: 1,
      backgroundSize: "100% 100%",
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const featuresData = [
    {
      title: "Comprehensive Compliance Assistance",
      description:
        "MITRA Consultancy delivers an extensive suite of compliance services covering GDPR, HIPAA, PCI DSS, ISO 27001, and more—so you can manage everything in one place without dealing with multiple providers.",
    },
    {
      title: "Customized and Simple Solutions",
      description:
        "Recognizing the uniqueness of every company, our offerings are tailored according to your business scale and sector. From startups to large corporations, we design compliance strategies that align perfectly with your needs.",
    },
    {
      title: "Experienced Compliance Professionals",
      description:
        "Our experts bring thorough knowledge of compliance frameworks combined with practical experience. They go beyond mere compliance checklists to ensure your organization gains real value and understanding.",
    },
  ];

  return (
    <div className="font-Satoshi bg-[#000203] relative">
      <Container>
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`font-bold text-neutral-130 text-lg md:text-2xl xl:text-[40px] 2xl:text-[52px] leading-6 md:leading-[60px] max-w-[1125px] capitalize`}
        >
          <motion.span 
            variants={spanVariants}
            style={{
              background: "linear-gradient(90deg, #0099FF, #09F)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left bottom",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}
            className="text-primary-10"
          >
            MITRA Consultancy
          </motion.span>{" "}
          Compliance Solutions Built for Trust & Results
        </motion.h1>
      </Container>

      <div className="">
        {[1, 2, 3]?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative w-full min-h-screen md:h-[1024px]"
          >
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={IMAGES.linnerColorBg}
                alt=""
                className="w-full h-full absolute z-0"
              />
            </motion.div>
            
            <Container>
              <div className="relative">
                <motion.section
                  className="hidden xl:flex justify-between gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {featuresData.map((item, index) => {
                    const stagger = [
                      "lg:translate-y-60",
                      "lg:translate-y-32",
                      "lg:translate-y-0",
                    ];

                    const animationOrder = [2, 1, 0];

                    return (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        custom={animationOrder[index]}
                      >
                        <TrustAndResultCard
                          title={item.title}
                          description={item.description}
                          classNames={stagger[index]}
                        />
                      </motion.div>
                    );
                  })}
                </motion.section>

                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="hidden md:flex xl:hidden justify-between gap-6"
                >
                  {featuresData.map((item, index) => {
                    const stagger = [
                      "translate-y-0",
                      "translate-y-[448px]",
                      "translate-y-0",
                    ];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <TrustAndResultCard
                          key={index}
                          title={item.title}
                          description={item.description}
                          classNames={stagger[index]}
                        />
                      </motion.div>
                    );
                  })}
                </motion.section>
                
                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="flex md:hidden flex-col items-center gap-10"
                >
                  {featuresData.map((item, index) => {
                    const stagger = [
                      "translate-y-0",
                      "translate-y-0",
                      "translate-y-0",
                    ];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        <TrustAndResultCard
                          key={index}
                          title={item.title}
                          description={item.description}
                          classNames={stagger[index]}
                        />
                      </motion.div>
                    );
                  })}
                </motion.section>
              </div>
            </Container>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustAndResults;