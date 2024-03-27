"use client";

import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import learningcats from "@/public/learningcats.json";
import Headerlearning from "@/app/component/Headerlearning";
import Detailslearning from "@/app/component/Detailslearning";

interface learningcats {
  name: string;
  english_name: string;
  description: string;
  characteristics: string;
  grooming: string;
  health: string;
  playing_with_cats: string;
  img_url: string;
  outstanding: Array<string>;
  overall: Array<string>;
}

export default function Learning({ params }: any): JSX.Element {
  const router = useRouter();
  const [currentCat, setCurrentCat] = useState<any>({} as learningcats);

  const encodedCat = decodeURI(params.slug);

  useEffect(() => {
    findCat();
  }, []);

  function findCat() {
    setCurrentCat(learningcats.find((cat: any) => cat.name === encodedCat));
  }

  function blackToHomePage() {
    setCurrentCat({} as learningcats);
    router.push("/main/home");
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col justify-center items-start w-[364px] mt-12 gap-4">
        <button onClick={blackToHomePage}>
          <img src="/ArrowLeft.svg" alt="Back" />
        </button>
        <div className="flex-grow w-full">
          {currentCat && <Headerlearning currentCat={currentCat} />}
        </div>
      </div>
      <div className="w-full mt-6 h-[0.001px] shrink-0 border border-line" />
      <div className="flex w-[364px] h-full mt-4 ">
        {currentCat && <Detailslearning currentCat={currentCat} />}
      </div>
    </div>
  );
}
