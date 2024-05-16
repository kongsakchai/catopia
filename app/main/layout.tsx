"use client";

import { Noto_Sans_Thai } from "next/font/google";
import axios from "axios";
import Nav from "../component/Nav";
import "../globals.css";
import React, { useState, useEffect } from "react";
import { ActiveContext } from "../store/context";
import { useRouter } from "next/navigation";

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
  const router = useRouter()

  const [active, setActive] = useState("home");

  useEffect(() => {
    verifyToken()
  }, [])

  const verifyToken = async () => {
    try {
      const res = await axios.get("/api/auth/verify", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      // console.log("res", res.data);

      if (!res.data) {
        router.push("/")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

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
