import Markdown from "markdown-to-jsx";
import { getPostMetaData, getPostContent } from "@/utils/post-helpers";
import { FC } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Post: FC<Props> = ({ params }) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h2>{post.data.title}</h2>
      <p>{post.data.date}</p>
      <article className='prose lg: prose-x1'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default Post;
