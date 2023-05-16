import fs from "fs";
import { PostMetaData } from "@/types/post";
import matter, { GrayMatterFile } from "gray-matter";

export const getPostMetaData = (): PostMetaData[] => {
  const folder = "src/data/posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts: PostMetaData[] = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/data/posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title || "",
      date: matterResult.data.date || "",
      subtitle: matterResult.data.subtitle || "",
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export const getPostContent = (slug: string): GrayMatterFile<string> => {
  const folder = "src/data/posts";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);

  return matterResult;
};
