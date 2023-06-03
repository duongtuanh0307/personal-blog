"use client";

import { wardrobeItems } from "@/data/wardrobe-items";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import WardrobeItemCard from "./WardrobeItemCard";

const ItemList: FC = () => {
  const [currentItemIdx, setCurrentItemIdx] = useState<number | undefined>(
    undefined
  );
  const currentPath = usePathname();

  useEffect(() => {
    setCurrentItemIdx(undefined);
  }, [currentPath]);

  return (
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
  );
};

export default ItemList;
