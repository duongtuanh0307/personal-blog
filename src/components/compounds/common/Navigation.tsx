import { facebookSrc, githubSrc } from "@/utils/constants";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { FC } from "react";

type Props = {
  className?: string;
  currentRouter: string;
};

const Navigation: FC<Props> = ({ className, currentRouter }) => {
  return (
    <div
      className={`absolute top-[60px] right-0 p-4 flex flex-col w-40 ${className}`}
    >
      {routes.map((route) => {
        const navItemStyle = getNavItemStyle(route.href === currentRouter);
        return (
          <Link className='mb-4' key={route.id} href={route.href}>
            <h1 className={`px-4 py-2 border rounded-lg ${navItemStyle}`}>
              {route.label}
            </h1>
          </Link>
        );
      })}
      <div className='flex w-full justify-end'>
        <div className='hover:cursor-pointer w-10 h-10 mr-2 flex justify-center items-center border rounded-lg shadow-lg text-white border-white hover:text-white hover:border-white hover:shadow-white'>
          <a href={facebookSrc}>
            <i className='text-[24px] fa-brands fa-github'></i>
          </a>
        </div>
        <div className='hover: cursor-pointer w-10 h-10 flex justify-center items-center border rounded-lg shadow-lg text-white border-white hover:text-white hover:border-white hover:shadow-white'>
          <a href={githubSrc}>
            <i className='text-[24px] fa-brands fa-facebook-f'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

const getNavItemStyle = (isAcive: boolean) => {
  if (!isAcive)
    return "shadow-lg text-white border-white hover:text-white hover:border-white hover:shadow-white";
  return "shadow-lg border-blue-500 text-blue-500  shadow-blue-500";
};
