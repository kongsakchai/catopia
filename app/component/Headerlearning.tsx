"use client";

import Image from "next/image";
import React, { useContext, useEffect } from "react";
// import { CatsContext } from "../main/home/learning/[slug]/page";

export default function Headerlearning({ currentCat }: any) {

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <img src={currentCat?.img_url} alt={currentCat.name} width={127} height={127} style={{ borderRadius: 16 }} />
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-black01 text-center text-2xl not-italic font-bold leading-10">{currentCat.name}</span>
        <span className="text-textfield text-center text-base not-italic font-normal leading-6">{currentCat.english_name}</span>
        <div className="flex flex-start mt-2 gap-4">
          {currentCat?.outstanding?.map((outstanding: string, index: number) => (
            <span key={index} className="flex items-center justify-center py-1 px-4 rounded-2xl bg-line">{outstanding}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
