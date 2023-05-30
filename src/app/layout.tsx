import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DTA blog",
  description: "Created with Nextjs and Tailwindcss",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: FC<Props> = (props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
