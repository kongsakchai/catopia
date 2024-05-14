"use client";

import { Noto_Sans_Thai } from "next/font/google";
import Nav from "../component/Nav";
import "../globals.css";
import React, {
  useState
} from "react";
import { ActiveContext } from "../store/context";

const noto_san_thai = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-sans-thai",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("home");

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      <html lang="en">
        <body className={noto_san_thai.className}>
          {children}
          <Nav />
        </body>
      </html>
    </ActiveContext.Provider>
  );
}
