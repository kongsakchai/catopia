import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeaderInfo from "@/app/component/Kitten_info/HeaderInfo";
import Treatment from "@/app/component/Kitten_info/Treatment";

function KittenInfo() {
  return (
    <div
      className=" flex flex-col items-center w-screen h-screen"
      style={{
        backgroundImage: "url('/Moon.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "cover",
        zIndex: 0,
      }}
    >
      <div className="flex w-[364px]  mt-12">
        <Link href="/main/profile">
          <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow-left" />
        </Link>
      </div>
      <div className="flex flex-col items-center mt-2 gap-8 border border-solid border-green-800">
        <HeaderInfo />
        <hr className="w-screen border border-solid border-red-500" />
        <Treatment />
      </div>
    </div>
  );
}

export default KittenInfo;
