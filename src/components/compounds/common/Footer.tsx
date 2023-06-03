import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className='w-full h-16'>
      <div className='w-full h-full flex flex-col items-center p-4 text-white font-semibold'>
        <h3>Created by Duong Tu Anh</h3>
        <span className='text-xs italic'>
          Background Source: Image by{" "}
          <a href='https://pixabay.com/users/wild0ne-920941/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1844231'>
            M. Maggs
          </a>{" "}
          from{" "}
          <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1844231'>
            Pixabay
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
