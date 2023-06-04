"use client";

import { wardrobeItems } from "@/data/wardrobe-items";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import WardrobeItemCard from "./WardrobeItemCard";

const ItemList: FC = () => {
  const [currentItemIdx, setCurrentItemIdx] = useState<number>(-1);
  const currentPath = usePathname();

  useEffect(() => {
    setCurrentItemIdx(-1);
  }, [currentPath]);

  const listWrapperClass =
    currentItemIdx === -1
      ? "w-full h-full overflow-auto px-2"
      : "w-1/3 h-full overflow-auto px-2";

  const ulTagClass = currentItemIdx === -1 ? "flex flex-wrap" : "";

  const itemClass =
    currentItemIdx === -1
      ? "w-1/3 min-w-60 h-80 px-2 pb-4"
      : "w-full min-w-60 h-80 px-2 pb-4";

  return (
    <div className='mt-4 w-full h-[calc(100%_-_100px)] flex'>
      {currentItemIdx !== -1 && (
        <div
          className='w-2/3 h-full px-2'
          onClick={() => {
            setCurrentItemIdx(-1);
          }}
        >
          <WardrobeItemCard wardrobeItem={wardrobeItems[currentItemIdx]} />
        </div>
      )}
      <div className={listWrapperClass}>
        <ul className={ulTagClass}>
          {wardrobeItems.map((item, index) => {
            if (index === currentItemIdx) return;
            return (
              <li
                key={index}
                className={itemClass}
                onClick={() => {
                  setCurrentItemIdx(index);
                }}
              >
                <WardrobeItemCard wardrobeItem={item} />
              </li>
            );
          })}
        </ul>
        {/* virtual div for prevent page list info hidden */}
        <div className='w-full h-8'></div>
      </div>
    </div>
  );
};

export default ItemList;
