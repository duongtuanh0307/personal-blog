"use client";

import ProjectItem from "@/components/compounds/projects/ProjectItem";
import ProjectPreview from "@/components/compounds/projects/ProjectPreview";
import { projectList } from "@/data/projects";
import { Project } from "@/types/project";
import { FC, useState } from "react";

export const metadata = {
  title: "Pet Projects coded by Duong Tu Anh",
};

const Projects: FC = () => {
  const [previewTarget, setPreviewTarget] = useState<Project>(projectList[0]);

  const selectProject = (projectId: number) => {
    const targetProject = projectList.find(
      (project) => project.id == projectId
    );
    if (targetProject) setPreviewTarget(targetProject);
  };

  const otherProjects = projectList.filter(
    (project) => project.id !== previewTarget.id
  );

  return (
    <div className='flex flex-col max-w-1280 w-full h-full p-8 rounded-md bg-blue-500/25'>
      <h2 className='text-[1.5rem] border border-white rounded tracking-widest px-4 py-2 mb-8 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
        Projects
      </h2>
      <div className='h-full grid grid-cols-3-1 grid-rows-1 gap-4 overflow-auto mt-4'>
        <ProjectPreview project={previewTarget} />
        <div className='flex flex-col h-full'>
          <h3 className='uppercase font-bold'>Others</h3>
          <p className='text-xs italic'>Click to view project detail</p>
          {otherProjects.length > 0 ? (
            <ul className='h-full overflow-auto mt-4'>
              {otherProjects.map((project, index) => (
                <li key={index}>
                  <ProjectItem
                    project={project}
                    handleClick={() => selectProject(project.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-center mt-8'>No other projects.</p>
          )}
          {/* virtual div for prevent page list info hidden */}
          <div className='w-full h-8'></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
