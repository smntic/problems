import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Problems List",
  description: "Problems to upsolve and problem notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
