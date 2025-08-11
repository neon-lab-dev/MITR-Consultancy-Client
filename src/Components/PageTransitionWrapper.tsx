/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Define the animation variants
const pageTransitionVariants:any = {
  initial: {
    opacity: 0,
    x: "100%", // Start off-screen to the right
  },
  animate: {
    opacity: 1,
    x: 0, // Animate to the center
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%", // Exit to the left
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // The `usePathname` hook provides the current URL path
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* 
        We use the `pathname` as a key. When the pathname changes, 
        AnimatePresence will animate the old component out and the new one in.
      */}
      <motion.div
        key={pathname}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="overflow-x-hidden" // Optional: helps prevent scrollbar flash
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}