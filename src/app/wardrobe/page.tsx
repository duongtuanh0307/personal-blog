import ItemList from "@/components/compounds/wardrobe/ItemList";
import { FC } from "react";

export const metadata = {
  title: "Clothes and Embroideries made by Duong Tu Anh",
};

const Posts: FC = () => {
  return (
    <div className='max-w-1280 w-full h-full p-8 rounded-md bg-blue-500/25'>
      <h2 className='text-[1.5rem] border border-white rounded tracking-widest px-4 py-2 mb-4 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
        Wardrobe
      </h2>
      <p className='italic mb-6'>Embroideries and clothes made by me</p>
      <ItemList />
    </div>
  );
};

export default Posts;
