"use client";

import { SuggestContext } from "@/app/main/suggest/page";
import Image from "next/image";
import React, { useContext } from "react";

function SelectYourKitten() {
  const { setQuestionState, kittenData }: any = useContext(SuggestContext);

  //   console.log("kittenData: ", kittenData);

  return (
    <div className=" container mx-auto flex flex-col items-start gap-4 pl-8 pr-8 mt-12">
      <button onClick={() => setQuestionState("selectionPattern")}>
        <Image src="/ArrowLeft.svg" width={24} height={24} alt="ArrowLeft" />
      </button>
      <div className="w-full">
        <span className="  text-black01 text-2xl not-italic font-bold leading-10">
          เลือกแมวที่คุณต้องการให้
        </span>
        <span className="  text-primary text-2xl not-italic font-bold leading-10">
          คาดคะเนพันธุ์แมว
        </span>
      </div>
      <div className="flex flex-col items-start gap-4 max-h-[550px] overflow-auto">
        {kittenData?.map((kitten: any, index: number) => (
          <button
            key={index}
            className="flex flex-col w-[350px] p-4 items-start gap-[10px] rounded-2xl border-[2px] border-solid border-black01"
          >
            <p className="text-center text-black01 text-base not-italic font-normal leading-6">
              {kitten.name}
            </p>
            <Image
              src={process.env.NEXT_PUBLIC_API_IMAGES + kitten.profile}
              width={300}
              height={150}
              alt={kitten.name}
              className="rounded-lg"
              layout="responsive"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectYourKitten;
