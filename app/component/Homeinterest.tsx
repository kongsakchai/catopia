"use client";

// import learningcats from "@/public/learningcats.json";
import learningcats from "../file/learningcats.json";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Homeinterest({ suggestData }: any) {
  //console.log("suggestData from Home : ", suggestData);

  const router = useRouter();

  const [resultSuggest, setResultSuggest] = useState<any>([]);

  useEffect(() => {
    matchSuggest(suggestData);
  }, [suggestData]);

  function matchSuggest(suggestArr: Array<string>) {
    if (Array.isArray(suggestArr)) {
      const resultMatching = suggestArr
        .map((catname: string) =>
          learningcats.find((cat: any) => cat.english_name === catname)
        );
      setResultSuggest(resultMatching);
    }
  }

  //console.log("resultSuggest: ", resultSuggest);

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
      <div
        className="flex flex-col w-full overflow-y-auto"
        style={{ maxHeight: "300px" }}
      >
        <div className="grid grid-cols-2 gap-4">
          {resultSuggest &&
            resultSuggest.map((cat: any, index: number) => (
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
    </div>
  );
}
