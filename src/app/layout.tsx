import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DTA blog",
  description: "Created with Nextjs and Tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Link href='/'>
          <h1>Welcome to my blog</h1>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Created by Duong Tu Anh</h3>
      </div>
    </footer>
  );

  return (
    <html lang='en'>
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
