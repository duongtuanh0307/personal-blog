import Header from "@/components/compounds/common/Header";
import Footer from "@/components/compounds/common/Footer";
import "./globals.css";
import { FC } from "react";
import { inter } from "@/vendor/font";
import Background from "@/components/compounds/common/Background";
import Script from "next/script";

export const metadata = {
  description: "Created with Nextjs and Tailwindcss",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: FC<Props> = (props) => {
  return (
    <html lang='en'>
      <head>
        <Script
          src='https://kit.fontawesome.com/fe0c67198f.js'
          crossOrigin='anonymous'
        ></Script>
      </head>
      <body
        className={`${inter.className} h-screen flex flex-col overflow-hidden text-white text-shadow-dark`}
      >
        <Background />
        <Header />
        <main className='flex flex-col items-center h-full overflow-x-hidden overflow-y-auto py-4 px-44'>
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
