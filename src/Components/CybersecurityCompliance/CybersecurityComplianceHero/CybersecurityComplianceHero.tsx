/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CybersecurityComplianceHero = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    "Security Experts",
    "Verified Protocols",
    "Custom Solutions",
    "Robust Updation",
  ];

  const heroImages = [
    IMAGES.complianceServiceHero,
    IMAGES.complianceServiceHero2,
    IMAGES.complianceServiceHero3,
    IMAGES.complianceServiceHero4,
  ];

  // Auto slide effect - change image every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants:any = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const featureVariants:any = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      x: 10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative h-[1100px] xl:h-[850px] 2xl:h-[890px] overflow-hidden">
      {/* Animated Background Images Carousel */}
      <motion.div
        className="absolute inset-0 z-0 flex"
        style={{
          width: `${heroImages.length * 100}%`,
        }}
        animate={{
          x: `-${currentImageIndex * (100 / heroImages.length)}%`
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
            style={{ width: `${100 / heroImages.length}%` }}
          >
            <Image
              src={image}
              alt={`MITRA Consultancy ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        ))}
      </motion.div>

       <div className="absolute inset-0 bg-neutral-185/80 blur-[6px] z-10"></div>

      {/* Content */}
      <Container>
        <div className="flex flex-col justify-center absolute top-0 bottom-0 z-20 max-w-[1300px] px-5 md:px-7 2xl:px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[755px]"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-white font-satoshi text-center xl:text-start leading-8 md:leading-[48px] xl:leading-[70px] text-[24px] md:text-[40px] xl:text-[56px] font-extrabold"
            >
              <span 
                className="text-primary-10"
              >
                Compliance Made Simple
              </span>{" "}
              for Your Business
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-white font-general-sans text-center xl:text-start text-sm mt-3"
            >
              Mitra Consultancy helps businesses manage ISO, SOC, DPDP, GDPR,
              and other regulatory compliances—reducing risk, simplifying
              audits, and keeping you audit-ready.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="flex flex-col md:flex-row items-center justify-center xl:justify-start gap-6 xl:gap-6 mt-6"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  handleClick={() =>
                    document
                      .getElementById("complianceAssessment")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  variant="secondary"
                  title="Explore Our Solutions"
                  classNames="w-full md:w-auto"
                />
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  handleClick={() => setIsContactUsModalOpen(true)}
                  variant="primary"
                  title="Speak With An Expert"
                  classNames="w-full sm:w-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features with animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-12 z-10 max-w-fit"
          >
            {features?.map((feature, index) => (
              <motion.div 
                key={feature} 
                variants={featureVariants}
                custom={index}
                whileHover="hover"
                className="text-white/75 flex flex-col gap-6 cursor-pointer"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  0{index + 1}
                </motion.span>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {feature}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
      
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default CybersecurityComplianceHero;