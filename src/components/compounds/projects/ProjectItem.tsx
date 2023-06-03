import { Project } from "@/types/project";
import { FC } from "react";

type Props = {
  project: Project;
  handleClick: () => void;
};

const ProjectItem: FC<Props> = ({ project, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className='border-2 border-white rounded-md py-2 px-4 flex flex-col shadow-lg hover:shadow-white hover:cursor-pointer'
    >
      <h2 className='text-base font-bold tracking-widest'>{project.title}</h2>
      <p className='text-sm my-2 text-justify'>{project.description}</p>
    </div>
  );
};

export default ProjectItem;
