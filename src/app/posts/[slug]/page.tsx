import { getPostMetaData, getMdFileContent } from "@/utils/post-helpers";
import { FC } from "react";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import CustomMarkdown from "./CustomMarkdown";

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
  const h4TagClass = "prose-h4:font-bold prose-h4:my-4";
  const imgTagClass =
    "prose-img:w-full prose-img:h-full prose-img:max-h-60 prose-img:object-contain prose-img:my-4";
  const ulTagClass = "prose-ul:list-disc prose-ul:list-inside";
  const aTagClass = "prose-a:underline";
  const tableClass =
    "prose-table:border prose-table:table-auto prose-th:border prose-th:px-4 prose-th:py-2 prose-th:whitespace-nowrap prose-tr:border prose-td:border";

  return (
    <div className='max-w-1280 w-full h-full px-12 py-8 rounded-md bg-blue-500/25'>
      <div className='flex flex-col w-full h-full overflow-auto'>
        <h2 className='text-[1.75rem] tracking-wide font-bold text-center'>
          {post.data.title}
        </h2>
        <p className='text-sm italic text-right'>{post.data.date}</p>
        <article
          className={`prose prose-invert w-full py-4 ${pTagClass} ${h3TagClass} ${h4TagClass} ${imgTagClass} ${ulTagClass} ${aTagClass} ${tableClass}`}
        >
          <CustomMarkdown content={post.content} />
        </article>
      </div>
    </div>
  );
};

export default Post;
