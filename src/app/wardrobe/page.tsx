"use client";

import WardrobeItemCard from "@/components/compounds/wardrobe/WardrobeItemCard";
import { wardrobeItems } from "@/data/wardrobe-items";
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Clothes and Embroideries made by Duong Tu Anh",
};

const Posts: FC = () => {
  const [currentItemIdx, setCurrentItemIdx] = useState<number | undefined>(
    undefined
  );
  const currentPath = usePathname();

  useEffect(() => {
    setCurrentItemIdx(undefined);
  }, [currentPath]);

  return (
    <div className='flex flex-col max-w-1280 w-full h-full p-8 rounded-md bg-blue-500/25'>
      <h2 className='text-[1.5rem] border border-white rounded tracking-widest px-4 py-2 mb-4 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
        Wardrobe
      </h2>
      <p className='italic mb-6'>Embroideries and clothes made by me</p>
      <div className='overflow-auto mt-4 w-full'>
        <ul className='flex flex-wrap w-full'>
          {wardrobeItems.map((item, index) => {
            const sizeClass =
              index === currentItemIdx ? "w-1/2 h-96" : "w-1/4 min-w-60 h-80";
            return (
              <motion.li
                key={index}
                className={`${sizeClass} p-2`}
                onClick={() => {
                  if (currentItemIdx !== index) {
                    setCurrentItemIdx(index);
                  } else {
                    setCurrentItemIdx(undefined);
                  }
                }}
              >
                <WardrobeItemCard wardrobeItem={item} />
              </motion.li>
            );
          })}
        </ul>
        {/* virtual div for prevent page list info hidden */}
        <div className='w-full h-8'></div>
      </div>
    </div>
  );
};

export default Posts;
