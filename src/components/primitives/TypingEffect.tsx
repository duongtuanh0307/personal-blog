"use client";

import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  delay: number;
  infiniteBlinkCarret?: boolean;
};
const TypingEffect: FC<Props> = ({ text, delay, infiniteBlinkCarret }) => {
  const textAnimate = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.2,
      },
    },
  };

  const charAnimate = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.01,
        when: "beforeChildren",
      },
    },
  };

  const cursorAnimate = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.19,
      },
    },
  };

  const loopCursorAnimate = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.p
      className='inline'
      variants={textAnimate}
      initial='hidden'
      animate='visible'
    >
      {text.split("").map((char, index) => {
        if (!char.trim()) return <motion.span key={index}>&nbsp;</motion.span>;
        return (
          <motion.span key={index} variants={charAnimate}>
            {char}
            {index + 1 !== char.length && (
              <motion.span
                className='border-r-2 border-white'
                variants={cursorAnimate}
              ></motion.span>
            )}
          </motion.span>
        );
      })}
      {!!infiniteBlinkCarret && (
        <motion.span
          className='border-r-2 border-white'
          variants={loopCursorAnimate}
          key={"infinite-carret"}
        ></motion.span>
      )}
    </motion.p>
  );
};

export default TypingEffect;
