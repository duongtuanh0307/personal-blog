import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <div>
        <Link href='/'>
          <h1>Welcome to my blog</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
