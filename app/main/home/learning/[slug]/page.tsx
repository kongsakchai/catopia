"use client";

import { useState, useEffect, createContext } from "react";
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

export let CatsContext = createContext<learningcats | undefined>(undefined);

export default function Learning({ params }: any): JSX.Element {
  const [currentCat, setCurrentCat] = useState<any>({} as learningcats);

  const encodedCat = decodeURI(params.slug);

  useEffect(() => {
    findCat();
  }, []);

  function findCat() {
    const cat = learningcats.find((cat: any) => cat.name === encodedCat);
    setCurrentCat(cat as learningcats);
  }

  return (
    <CatsContext.Provider value={ currentCat }>
      <div className="flex flex-col items-center min-h-screen border border-solid border-red-500">
        {currentCat?.name}
        <Headerlearning />
        <Detailslearning />
      </div>
    </CatsContext.Provider>
  );
}
