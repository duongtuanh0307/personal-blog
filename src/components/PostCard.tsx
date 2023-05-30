import { PostMetaData } from "@/types/post";
import Link from "next/link";
import { FC } from "react";

type Props = {
  post: PostMetaData;
};

const PostCard: FC<Props> = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default PostCard;
