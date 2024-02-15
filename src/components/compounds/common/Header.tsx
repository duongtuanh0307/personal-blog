"use client";

import { FC, useEffect, useState } from "react";
import BarsIcon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header: FC = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);
  const currentRouter = usePathname();
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  useEffect(() => {
    setIsCollapse(true);
  }, [currentRouter]);

  const navigationClass = isCollapse ? "translate-x-[100%]" : "";

  return (
    <>
      <header className='flex flex-row items-center px-8 py-4 text-white'>
        <div className='w-full text-3xl font-bold tracking-[.8em]'>
          <Link href='/'>D.T.A</Link>
        </div>
        <div className='w-48 flex justify-between'>
          <button
            onClick={toggleCollapse}
            className={`flex items-center justify-center h-10 w-16 border rounded-lg`}
          ></button>
          <button
            onClick={toggleCollapse}
            className={`flex items-center justify-center h-10 w-16 border rounded-lg ${
              !isCollapse
                ? "shadow-lg shadow-blue-500 text-blue-500 border-blue-500"
                : "shadow-lg text-white border-white hover:shadow-white"
            }`}
          >
            {!isCollapse ? (
              <BarsIcon className={"h-6 w-6 text-blue-500 stroke-2"} />
            ) : (
              <BarsIcon className='h-6 w-6 text-white stroke-2' />
            )}
          </button>
        </div>
      </header>
      <Navigation
        currentRouter={currentRouter}
        className={`${navigationClass} transition-transform duration-300`}
      />
    </>
  );
};

export default Header;
