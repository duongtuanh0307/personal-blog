import { PostMetaData } from "@/types/post";
import Link from "next/link";
import { FC } from "react";

type Props = {
  postMeta: PostMetaData;
};

const PostCard: FC<Props> = ({ postMeta }) => {
  return (
    <div className='border-2 border-white rounded-md p-4 flex flex-col shadow-lg hover:shadow-white'>
      <Link href={`/posts/${postMeta.slug}`}>
        <h2 className='text-lg font-bold tracking-widest'>{postMeta.title}</h2>
        <p className='text-sm italic'>{postMeta.date}</p>
        <p className='mt-4'>{postMeta.subtitle}</p>
      </Link>
    </div>
  );
};

export default PostCard;
