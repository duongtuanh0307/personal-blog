import { Project } from "@/types/project";
import Image from "next/image";
import { FC } from "react";

type Props = {
  project: Project;
};

const ProjectPreview: FC<Props> = ({ project }) => {
  return (
    <div className='h-full border-2 border-white rounded-md py-2 px-4 flex flex-col shadow-lg'>
      <h4 className='text-[1.25rem] font-bold tracking-widest mb-4'>
        {project.title}
      </h4>
      <div className='w-full h-80 overflow-hidden relative mr-6 rounded-md border-2 border-white bg-gray-950 mb-4'>
        <Image
          src={project.demoSrc}
          alt='pet project illustration'
          fill
          className='object-contain'
          blurDataURL={project.demoSrc}
        />
      </div>
      <div className='overflow-auto'>
        <p className='mb-2'>{project.description}</p>
        <p>&bull; Tech Stack: {project.techStack.join(", ")}</p>
        <p className='flex flex-col'>
          &bull; Github:{" "}
          {project.github.map((repo, index) => (
            <span key={index}>
              <a
                href={repo}
                className='underline hover:cursor-pointer hover:italic hover:text-blue-500'
              >
                {repo}
              </a>
            </span>
          ))}
        </p>
        <p>
          &bull; Deployment:{" "}
          {!!project.deployment ? (
            <a
              href={project.deployment}
              className='underline hover:cursor-pointer hover:italic hover:text-blue-500'
            >
              {project.deployment}
            </a>
          ) : (
            "N/A (I run this app locally only)"
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectPreview;
