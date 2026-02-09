/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "../../Shared/Container/Container";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../assets/index";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurProjects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants:any = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const projectCardVariants:any = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
        duration: 0.7
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants:any = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.4,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      opacity: 0.2,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants:any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const ourProjects = [
  {
    image: IMAGES.spaceframe,
    name: "Spaceframe - Interior Design",
    description:
      "Modern interior design platform showcasing creative spaces, project portfolios, and client collaboration tools."
  },
  {
    image: IMAGES.medhrplus,
    name: "MedHrPlus - Job Portal",
    description:
      "Healthcare focused job portal connecting medical professionals with hospitals and clinics efficiently."
  },
  {
    image: IMAGES.edubrain,
    name: "Edubrain - LMS",
    description:
      "Interactive learning management system offering courses, progress tracking, and seamless student engagement."
  },
  {
    image: IMAGES.javasports,
    name: "Java Sports - eCommerce",
    description:
      "Online sports store providing quality equipment, smooth checkout, and reliable nationwide delivery."
  },
  {
    image: IMAGES.bonhomie,
    name: "Bonhomie - eCommerce",
    description:
      "Lifestyle ecommerce platform featuring curated products, secure payments, and user friendly shopping experience."
  }
];


  return (
    <div 
      id="portfolio" 
      ref={containerRef}
      className="py-[128px] font-Satoshi overflow-hidden"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className={`font-semibold text-primary-20`}>PROJECTS</p>
          <h2
            className={`font-extrabold text-white text-[30px] leading-normal capitalize mt-1`}
          >
            Selected{" "}
            <motion.span 
              initial={{ backgroundSize: "0% 100%" }}
              animate={isInView ? { backgroundSize: "100% 100%" } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
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
              Work
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm mt-3 text-white"
          >
            A glimpse into how we help teams turn requirements into working
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 flex flex-col gap-6"
        >
          {/* Large Project Card */}
          <motion.div
            variants={projectCardVariants}
            whileHover="hover"
            className={`group relative rounded-xl overflow-hidden h-[564px] cursor-pointer`}
          >
            {/* Background Image */}
            <motion.div
              variants={imageVariants}
              className="absolute inset-0"
            >
              <Image
                src={ourProjects[0]?.image}
                alt="Students Tiffin Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
              }}
            />

            {/* Animated Border Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 rounded-xl"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(0, 153, 255, 0.3)",
                background: "radial-gradient(circle at center, rgba(0, 153, 255, 0.1) 0%, transparent 70%)"
              }}
            />

            {/* Content Wrapper */}
            <motion.div
              variants={contentVariants}
              className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-end z-10"
            >
              {/* Title with animated underline */}
              <div className="relative">
                <h3 className="text-white font-extrabold text-[22px] md:text-[26px] lg:text-[30px]">
                  {ourProjects[0]?.name}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary-10 to-primary-20"
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-neutral-130 font-medium mt-3"
              >
                {ourProjects[0]?.description}
              </motion.p>
            </motion.div>

            {/* Hover Overlay Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0"
              style={{
                background: "linear-gradient(45deg, rgba(0, 153, 255, 0.1), rgba(9, 255, 255, 0.05))"
              }}
            />
          </motion.div>

          {/* Smaller Project Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {ourProjects?.slice(1,5)?.map((item) => (
              <motion.div
                key={item?.name}
                variants={itemVariants}
                custom={item}
                whileHover="hover"
                className={`group relative rounded-xl overflow-hidden h-[390px] md:h-[564px] cursor-pointer`}
              >
                {/* Background Image */}
                <motion.div
                  variants={imageVariants}
                  className="absolute inset-0"
                >
                  <Image
                    src={item?.image}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
                  }}
                />

                {/* Animated Border Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(0, 153, 255, 0.3)",
                    background: "radial-gradient(circle at center, rgba(0, 153, 255, 0.1) 0%, transparent 70%)"
                  }}
                />

                {/* Content Wrapper */}
                <motion.div
                  variants={contentVariants}
                  className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-end z-10"
                >
                  {/* Title with animated underline */}
                  <div className="relative">
                    <h3 className="text-white font-extrabold text-[22px] md:text-[26px] lg:text-[30px]">
                      {item?.name}
                    </h3>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary-10 to-primary-20"
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-neutral-130 font-medium mt-3"
                  >
                    {item?.description}
                  </motion.p>
                </motion.div>

                {/* Hover Overlay Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(45deg, rgba(0, 153, 255, 0.1), rgba(9, 255, 255, 0.05))"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default OurProjects;