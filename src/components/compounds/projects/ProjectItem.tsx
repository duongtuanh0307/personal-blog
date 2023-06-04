import { Project } from "@/types/project";
import { FC } from "react";

type Props = {
  project: Project;
  handleClick: () => void;
  className?: string;
  isPreviewTarget: boolean;
};

const ProjectItem: FC<Props> = ({
  project,
  handleClick,
  isPreviewTarget,
  className = "",
}) => {
  return (
    <div
      onClick={handleClick}
      className={`${className} border-2 rounded-md py-2 px-4 flex flex-col shadow-lg ${
        isPreviewTarget
          ? "shadow-blue-500 text-blue-500 border-blue-500"
          : "border-white hover:shadow-white hover:cursor-pointer"
      }`}
    >
      <h2 className='text-base font-bold tracking-widest'>{project.title}</h2>
      <p className='text-sm my-2 text-justify'>{project.description}</p>
    </div>
  );
};

export default ProjectItem;
