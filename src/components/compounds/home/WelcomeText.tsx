"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import DancingText from "../../primitives/DancingText";
import TypingEffect from "../../primitives/TypingEffect";

const WelcomeText: FC = () => {
  return (
    <div className='flex flex-col w-full mt-4'>
      <motion.div className='text-[1.5rem] bold mb-8'>
        Hello, my name is{" "}
        <div className='inline text-[2rem] border-4 border-white rounded px-4 py-2 uppercase'>
          <TypingEffect text={"Duong Tu Anh"} delay={0} />
        </div>
      </motion.div>
      <div className='text-[1.5rem]'>
        I&apos;m a{" "}
        <div className='inline text-[2rem] border-4 border-white rounded p-2 uppercase'>
          <TypingEffect
            text={"front-end developer"}
            delay={2.5}
            infiniteBlinkCarret
          />
        </div>
      </div>
      <DancingText
        className='h-40 mt-8 mb-4 px-12 py-4 flex text-[8rem] tracking-widest font-bold'
        text={"Welcome"}
        delay={6.5}
      />
      <></>
    </div>
  );
};

export default WelcomeText;
