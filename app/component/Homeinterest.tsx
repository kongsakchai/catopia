"use client";

import learningcats from "@/public/learningcats.json";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Homeinterest() {
  const router = useRouter();

  const [interest, setInterest] = useState({});

  useEffect(() => {
    sliceInterest();
  }, []);

  const sliceInterest = () => {
    const newSlided = learningcats.slice(0, 10);
    setInterest(newSlided);
  };

  // console.log("interest : ", interest);

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="flex flex-row gap-2">
        <h1 className="text-primary text-base not-italic font-bold leading-6">
          สายพันธุ์แมว
        </h1>
        <h1 className="text-black01 text-base not-italic font-bold leading-6">
          ที่คุณอาจจะสนใจ
        </h1>
      </div>
      <div className="flex flex-row w-full gap-4 overflow-x-auto">
        {interest &&
          Object.values(interest).map((cat: any, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <button
                type="button"
                className="rounded-lg w-[155px] h-[130px]"
                onClick={() => router.push(`/main/home/learning/${cat.name}`)}
              >
                <Image
                  src={cat.img_url}
                  alt={cat.name}
                  width={155}
                  height={130}
                  className="rounded-lg w-full h-full object-cover"
                />
              </button>
              <h1 className="text-black01 text-nowrap text-xs not-italic font-normal leading-5">
                {cat.name}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}
