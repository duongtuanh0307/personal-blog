import Markdown from "markdown-to-jsx";
import { getPostMetaData, getMdFileContent } from "@/utils/post-helpers";
import { FC } from "react";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = getMdFileContent(`/posts/${slug}`);

  return {
    title: post.data.title,
  };
}

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Post: FC<Props> = ({ params }) => {
  const slug = params.slug;
  const post = getMdFileContent(`/posts/${slug}`);
  const pTagClass = "prose-p:text-justify prose-p:text-white prose-p:mb-2";
  const h3TagClass = "prose-h3:text-[1.25rem] prose-h3:font-bold prose-h3:my-4";
  const imgTagClass =
    "prose-img:w-full prose-img:h-full prose-img:max-h-60 prose-img:object-contain prose-img:my-4";
  return (
    <div className='max-w-1280 w-full h-full px-12 py-8 rounded-md bg-blue-500/25'>
      <div className='flex flex-col w-full h-full overflow-auto'>
        <h2 className='text-[1.75rem] tracking-widest uppercase font-bold text-center'>
          {post.data.title}
        </h2>
        <p className='text-sm italic text-right'>{post.data.date}</p>
        <article
          className={`prose prose-invert w-full py-4 ${pTagClass} ${h3TagClass} ${imgTagClass}`}
        >
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default Post;
