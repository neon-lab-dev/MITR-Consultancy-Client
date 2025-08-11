/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { IMAGES } from "@/assets";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";
import { motion, AnimatePresence } from "framer-motion";

type TContactUs = {
  isContactUsModalOpen: boolean;
  setIsContactUsModalOpen: (value: boolean) => void;
};

// Animation variants for the backdrop overlay
const backdropVariants: any = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Animation variants for the modal panel itself
const modalVariants: any = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 40, // Start slightly lower
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring", // A nice, bouncy spring animation
      stiffness: 260,
      damping: 25,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 40,
    transition: {
      duration: 0.2, // A quicker exit
      ease: "easeIn",
    },
  },
};

const ContactUs: React.FC<TContactUs> = ({
  isContactUsModalOpen,
  setIsContactUsModalOpen,
}) => {
  return (
    // AnimatePresence enables the "exit" animation when the modal is closed
    <AnimatePresence mode="wait">
      {isContactUsModalOpen && (
        <motion.div
          // This is the backdrop
          onClick={() => setIsContactUsModalOpen(false)}
          className="w-full h-screen fixed top-0 left-0 z-50 bg-neutral-90/70 backdrop-blur-sm flex items-center justify-center"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            // This is the main modal panel
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[1060px] h-full max-h-[90%] xl:max-h-[550px] bg-white rounded-2xl mx-auto p-5 flex flex-col-reverse md:flex-row items-center gap-9 font-Inter overflow-y-auto md:overflow-hidden scrollbar-thin scrollbar-thumb-[#03253B] scrollbar-track-transparent"
            variants={modalVariants}
            // initial, animate, and exit are inherited from the parent motion component,
            // but we explicitly define them here with our modalVariants
          >
            {/* Your existing modal content remains unchanged */}
            <div className="relative h-full w-full xl:w-[45%] hidden lg:flex flex-col items-center justify-center">
              <Image
                src={IMAGES.contactUsBgImg}
                alt="MITRA Consultancy"
                className="rounded-xl h-full w-full"
              />
              <div className="flex flex-col items-center justify-center w-full absolute top-0 bottom-0 right-0 left-0 z-20">
                <Image
                  src={IMAGES.MITRConsoltancyLogo}
                  alt="MITRA Consultancy"
                  className="w-[164px] h-[64px]"
                />
                <h1 className="text-white text-[25px] xl:text-[42px] text-center font-bold mt-8 uppercase">
                  Crafting Digital Excellence
                </h1>
                <p className="text-white text-[10px] text-center md:text-base leading-7 mt-4">
                  Have questions or want to discuss your next big idea?
                </p>
                <p className="text-white text-[10px] text-center md:text-base leading-7 mt-[6px]">
                  We're here to help you bring your digital vision to life.
                </p>
              </div>
            </div>

            <ContactUsForm setIsContactUsModalOpen={setIsContactUsModalOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactUs;
