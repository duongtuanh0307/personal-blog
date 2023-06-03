"use client";
import { FC, useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectPreview from "./ProjectPreview";
import { projectList } from "@/data/projects";
import { Project } from "@/types/project";

const ProjectList: FC = () => {
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
  );
};

export default ProjectList;
