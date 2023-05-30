import { getPostMetaData } from "@/utils/post-helpers";
import { FC } from "react";
import PostCard from "@/components/PostCard";

const Home: FC = () => {
  const postMetaData = getPostMetaData();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ul>
        {postMetaData.map((post, index) => (
          <li key={index}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
