import ProjectList from "@/components/compounds/projects/ProjectList";
import { FC } from "react";

export const metadata = {
  title: "Pet Projects coded by Duong Tu Anh",
};

const Projects: FC = () => {
  return (
    <div className='flex flex-col max-w-1280 w-full h-full p-8 rounded-md bg-blue-500/25'>
      <h2 className='text-[1.5rem] border border-white rounded tracking-widest px-4 py-2 mb-8 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
        Projects
      </h2>
      <ProjectList />
    </div>
  );
};

export default Projects;
