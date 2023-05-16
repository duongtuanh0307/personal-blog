import Link from "next/link";
import { getPostMetaData } from "@/utils/post-helpers";

export default function Home() {
  const postMetaData = getPostMetaData();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ul>
        {postMetaData.map((post, index) => (
          <li key={index}>
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.subtitle}</p>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
