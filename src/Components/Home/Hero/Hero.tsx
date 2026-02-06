/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Stagger animation for text elements
  const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants:any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants:any = {
    hidden: { x: 100, opacity: 0, rotate: -5 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
    hover: {
      y: -10,
      rotate: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const floatingAnimation:any = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      className="font-Satoshi bg-neutral-185 text-white pt-40 relative h-[1000px] md:h-[800px] 2xl:h-[1024px] overflow-hidden"
    >
      {/* Animated Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient overlay */}
        {/* Gradient overlay with your brand colors */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0, 153, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(9, 255, 255, 0.12) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 70%, rgba(0, 153, 255, 0.18) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0, 153, 255, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* MOBILE background gif with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 md:hidden z-0">
        <Image
          src={IMAGES.heroGif}
          alt="MITRA Consultancy"
          fill
          className="object-cover"
          priority
        />
        {/* Animated Mobile overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-neutral-5/50"
        />
      </motion.div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute w-[2px] h-[2px] bg-primary-20/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1300px] w-full mx-auto px-5 md:px-7 2xl:px-0">
        <div className="flex justify-center h-full w-full">
          <motion.div
            variants={containerVariants}
            className="flex flex-col w-full mt-0 lg:mt-24"
          >
            <motion.div variants={itemVariants} className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
                className="leading-normal text-[30px] font-extrabold max-w-[453px] capitalize"
              >
                From Code{" "}
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-primary-20"
                >
                  to Compliance
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="overflow-hidden">
              <motion.p
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm max-w-full md:max-w-[453px] mt-3 mb-6"
              >
                We help businesses design, build, and secure digital systems
                without complexity.
              </motion.p>
            </motion.div>

            <Button
              handleClick={() => setIsContactUsModalOpen(true)}
              variant="primary"
              title="Talk To Our Team"
              classNames="w-[200px]"
            />

            <motion.p variants={itemVariants} className="text-xs mt-3">
              For startups, enterprises, and regulated teams.
            </motion.p>
          </motion.div>

          {/* DESKTOP / MD image with animation */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            animate={floatingAnimation}
            className="relative hidden md:block"
          >
            <div className="relative w-[350px] lg:w-[450px] h-[622px] md:h-[500px] 2xl:h-[800px]">
              <Image
                src={IMAGES.heroGif}
                alt="MITRA Consultancy"
                fill
                className="rounded-xl object-cover"
                priority
              />
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-xl bg-primary-20/20 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 w-full z-10 overflow-hidden"
      >
        <Marquee speed={60} gradient={false} pauseOnHover>
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="text-[248px] font-extrabold whitespace-nowrap leading-none uppercase overflow-hidden"
          >
            MITRA CONSULTANCY *{" "}
            <motion.span
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Code To Compliance
            </motion.span>{" "}
            *
          </motion.h2>
        </Marquee>
      </motion.div>

      {/* Contact Us Modal with animation */}
      <AnimatePresence>
        {isContactUsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContactUs
              isContactUsModalOpen={isContactUsModalOpen}
              setIsContactUsModalOpen={setIsContactUsModalOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;
