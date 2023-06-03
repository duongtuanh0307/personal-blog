"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { routes } from "@/utils/routes";
import Link from "next/link";

const SiteGuide: FC = () => {
  const siteGuideAnimate = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 10.5,
        staggerChildren: 1,
      },
    },
  };
  const childAnimate = {
    hidden: {
      opacity: 0,
      transform: "translateX(-50%)",
    },
    show: {
      opacity: [0, 1],
      transform: ["translateX(-50%)", "translateX(0)"],
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };
  const pageList = routes.filter((item) => item.label.toLowerCase() !== "home");
  return (
    <>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 10, duration: 0.5, ease: "linear" }}
        className='font-bold tracking-wider'
      >
        Start exploring my website:
      </motion.h4>
      <motion.div
        variants={siteGuideAnimate}
        initial='hidden'
        animate='show'
        className='flex flex-wrap w-full'
      >
        {pageList.map((pageInfo, index) => {
          return (
            <motion.div
              variants={childAnimate}
              key={index}
              className='w-1/2 relative px-4 my-10'
            >
              <Link href={pageInfo.href}>
                <h4 className='flex items-center border border-white px-4 h-10 rounded-md w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold hover:text-[1.25rem]'>
                  {pageInfo.label}
                </h4>
              </Link>
              <p className='border-2 border-white px-8 py-4 rounded-md w-2/3 absolute top-[80%] left-[80px] shadow-lg'>
                {pageInfo.introduction}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
      {/* virtual div for prevent page list info hidden */}
      <div className='h-4'></div>
    </>
  );
};

export default SiteGuide;
