"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function MotionSection({
  children,
  className,
  id,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      custom={0}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.section>
  );
}
