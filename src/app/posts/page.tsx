import PostCard from "@/components/compounds/post/PostCard";
import { getPostMetaData } from "@/utils/post-helpers";
import { FC } from "react";

export const metadata = {
  title: "Duong Tu Anh Blog Posts",
};

const Posts: FC = () => {
  const postList = getPostMetaData();

  return (
    <div className='flex flex-col max-w-1280 w-full h-full p-8 rounded-md bg-blue-500/25'>
      <h2 className='text-[1.5rem] border border-white rounded tracking-widest px-4 py-2 mb-8 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
        BLOG POSTS
      </h2>
      <p className='flex justify-end font-bold'>{postList.length} Articles</p>
      <div className='overflow-auto mt-4'>
        <ul className='grid grid-cols-3 gap-4'>
          {postList.map((post, index) => (
            <li key={index}>
              <PostCard postMeta={post} />
            </li>
          ))}
        </ul>
        {/* virtual div for prevent page list info hidden */}
        <div className='w-full h-8'></div>
      </div>
    </div>
  );
};

export default Posts;
