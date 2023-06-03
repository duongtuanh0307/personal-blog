"use client";

import { WardrobeItem } from "@/types/wardrobe-item";
import Image from "next/image";
import { FC } from "react";

type Props = {
  wardrobeItem: WardrobeItem;
};

const WardrobeItemCard: FC<Props> = ({ wardrobeItem }) => {
  return (
    <div className='border-2 border-white bg-gray-950 rounded-md shadow-lg hover:cursor-pointer relative w-full h-full p-2 hover:shadow-white'>
      <Image
        src={wardrobeItem.front}
        alt={wardrobeItem.description}
        fill
        blurDataURL={wardrobeItem.front}
        className='object-contain'
      />
    </div>
  );
};

export default WardrobeItemCard;
