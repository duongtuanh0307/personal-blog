import Markdown from "markdown-to-jsx";
import { getPostMetaData, getPostContent } from "@/utils/post-helpers";

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function Post({ params }: { params: { slug: string } }) {
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
}
