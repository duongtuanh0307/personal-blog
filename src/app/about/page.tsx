import Link from "next/link";
import { FC } from "react";

const SKILLS: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Vue",
  "Svelte",
  "Express",
  "Hapi",
  "Nest",
];

const LANGUAGES: string[] = [
  "Vietnamse (Mother tongue)",
  "Japanese",
  "English",
  "Chinese",
];

const START_YEAR = 2021;
const START_MONTH = 1;

export const metadata = {
  title: "About Duong Tu Anh",
};

const About: FC = () => {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();
  const experience = roundHaft(
    ((currentYear - START_YEAR) * 12 + currentMonth - START_MONTH) / 12
  );
  return (
    <div className='flex overflow-auto max-w-1280 w-full p-8 rounded-md bg-blue-500/25'>
      {/* General Info Section */}
      <div className='w-2/3 mr-6'>
        <h2 className='text-[1.5rem] border border-white rounded tracking-widest px-4 py-2 mb-4 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
          About Me
        </h2>
        <div className='border-2 border-white py-8 px-4 rounded tracking-wide'>
          <p className='mb-2'>
            I&apos;m a Front-end Developer from Vietnam with {experience} years
            of experience.
          </p>
          <p className='mb-2'>
            Graduted in 2019 with International Agriculture and Food Studies
            Bachelor Degree in Agribusiness Management major, I worked as an IT
            comunicator (translator) for an IT company for 1.5 year before
            switching to Developer position.
          </p>
          <p className='mb-2'>
            I spend my spare time trying new libraries and frameworks.
          </p>
          <p className='mb-2'>
            Apart from coding, I also like drawing and sewing
            {/* <Link
              href='/wardrobe'
              className='underline hover:text-blue-500 hover:italic'
            >
              sewing
            </Link> */}
            .
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className='w-1/3'>
        {/* Technical skills */}
        <div className='mb-6'>
          <h3 className='border border-white rounded-md  px-4 py-2 mb-4 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
            Skills
          </h3>
          <ul className='flex flex-wrap'>
            {SKILLS.map((skill, index) => (
              <li
                key={index}
                className='border-2 border-white rounded-md py-2 px-4 mr-4 mb-2 text-sm tracking-widers'
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* Languages */}
        <div>
          <h3 className='border border-white rounded-md px-4 py-2 mb-4 w-fit outline outline-2 outline-white outline-offset-4 uppercase font-bold'>
            Languages
          </h3>
          <ul className='flex flex-wrap items-start'>
            {LANGUAGES.map((language, index) => (
              <li
                key={index}
                className='inline-flex border-2 border-white rounded-md py-2 px-4 mr-4 mb-2 text-sm'
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

const roundHaft = (num: number): number => {
  return Math.round(num * 2) / 2;
};
