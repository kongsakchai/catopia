"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {

  const router = useRouter();

  const [active, setActive] = useState("home");

  const handleActive = (page: string) => {
    setActive(page);
  };

  useEffect(() => {
    router.push("/main/home")
  }, []);

  return (
    <div className=" flex w-full h-[104px] items-center justify-center shrink-0 border border-solid border-[red]">
      <div className="flex w-[364px] justify-between gap-14 border border-solid border-[red]">
        <Link href="/main/home">
          <button
            onClick={() => handleActive("home")}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`${active === "home" ? "/Home-active" : "/Home"}.svg`}
              width={28}
              height={28}
              alt="Home page"
              style={{ width: "auto", height: "auto" }}
            />
            <span
              className={`text-xs not-italic font-normal leading-5 text-center mt-1 ${
                active === "home" ? "text-primary" : "text-textfield"
              }`}
            >
              หน้าหลัก
            </span>
          </button>
        </Link>
        <Link href="/main/breeding">
          <button
            onClick={() => handleActive("Breeding")}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`${
                active === "Breeding" ? "/Breeding-active" : "/Breeding"
              }.svg`}
              width={28}
              height={28}
              alt="Breeding page"
              style={{ width: "auto", height: "auto" }}
            />
            <span
              className={`text-xs not-italic font-normal leading-5 text-center mt-1 ${
                active === "Breeding" ? "text-primary" : "text-textfield"
              }`}
            >
              ผสมพันธุ์
            </span>
          </button>
        </Link>
        <Link href="/main/suggest">
          <button
            onClick={() => handleActive("Suggest")}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`${
                active === "Suggest" ? "/Suggest-active" : "/Suggest"
              }.svg`}
              width={28}
              height={28}
              alt="Suggest page"
              style={{ width: "auto", height: "auto" }}
            />
            <span
              className={`text-xs not-italic font-normal leading-5 text-center mt-1 ${
                active === "Suggest" ? "text-primary" : "text-textfield"
              }`}
            >
              แนะนำ
            </span>
          </button>
        </Link>
        <Link href="/main/profile">
          <button
            onClick={() => handleActive("Profile")}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`${
                active === "Profile" ? "/Profile-active" : "/Profile"
              }.svg`}
              width={28}
              height={28}
              alt="Profile page"
              style={{ width: "auto", height: "auto" }}
            />
            <span
              className={`text-xs not-italic font-normal leading-5 text-center mt-1 ${
                active === "Profile" ? "text-primary" : "text-textfield"
              }`}
            >
              ประวัติ
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
