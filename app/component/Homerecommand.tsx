"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Homerecommand() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h1 className=" text-black01 text-base font-bold not-italic leading-6">
        แนะนำ
      </h1>
      <div className=" flex flex-col items-center gap-2 w-full">
        <button type="button" onClick={() => router.push("/main/suggest")}>
          <Image
            src="/suggest-home-bg.svg"
            width={364}
            height={131}
            alt="suggest-home"
            className=" rounded-lg"
          />
        </button>
        <h3 className=" text-black01 text-xs not-italic font-normal leading-5">
          ระบบแนะนำแมวที่เหมาะสมกับคุณ
        </h3>
      </div>
    </div>
  );
}
