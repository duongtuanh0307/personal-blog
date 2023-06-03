import { PostMetaData } from "@/types/post";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  postMeta: PostMetaData;
  postContent: string;
};

const FeaturePost: FC<Props> = ({ postMeta, postContent }) => {
  return (
    <div className='rounded-md p-4 flex flex-row h-80 border-2 border-white shadow-lg'>
      <div className='w-1/2 overflow-hidden relative mr-6 rounded-md border-2 border-white'>
        <Image
          src={postMeta.image}
          alt='post illustration'
          fill
          className='object-cover'
          blurDataURL={postMeta.image}
        />
      </div>
      <div className='w-1/2'>
        <Link href={`/posts/${postMeta.slug}`}>
          <h2 className='text-2xl font-bold mb-2'>{postMeta.title}</h2>
        </Link>
        <p className='text-sm italic'>{postMeta.date}</p>
        <div className='mt-8'>
          <Markdown className='line-clamp-3'>{postContent}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
