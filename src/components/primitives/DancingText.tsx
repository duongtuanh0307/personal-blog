"use client";

import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay: number;
};

const DancingText: FC<Props> = ({ text, className = "", delay }) => {
  const textAnimate = {
    hidden: { opacity: 0, transform: "translateX(50%)" },
    show: {
      opacity: [0, 1],
      transform: ["translateX(50%)", "translateX(0)"],
      transition: {
        ease: "linear",
        duration: 1.2,
        staggerChildren: 0.1,
        delay,
        delayChildren: delay,
      },
    },
  };

  const charAnimate = {
    hidden: { transform: "translateY(-35%)" },
    show: {
      transform: ["translateY(-35%)", "translateY(0)", "translateY(-35%)"],
      transition: {
        ease: "linear",
        duration: 1.2,
        repeat: 2,
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={textAnimate}
      initial='hidden'
      animate='show'
    >
      {text.split("").map((character, index) => {
        if (!character.trim())
          return (
            <p className='flex justify-center w-full h-full' key={index}>
              <motion.span variants={charAnimate}>&nbsp;</motion.span>
            </p>
          );

        return (
          <p className='flex justify-center w-full h-full' key={index}>
            <motion.span variants={charAnimate}>{character}</motion.span>
          </p>
        );
      })}
    </motion.div>
  );
};

export default DancingText;
