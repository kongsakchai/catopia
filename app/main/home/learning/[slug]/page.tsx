'use client';

import { useState, useEffect } from "react";
import learningcats from "@/public/learningcats.json";

interface learningcats {
  name: string;
  description: string;
  characteristics: string;
  grooming: string;
  health: string;
  playing_with_cats: string;
  overall: Array<string>;
}

export default function Learning({params}: any) {
    const encodedCat = decodeURI(params.slug);

    const [currentCat, setCurrentCat] = useState({} as learningcats);

    useEffect(() => {
        findCat();
    }, []);

    function findCat() {
        const cat = learningcats.find((cat: any) => cat.name === encodedCat);
        setCurrentCat(cat as learningcats);
    }

    console.log(currentCat);
    
    return (
        <div>
            Slug: {encodedCat}
            {currentCat.overall.map((item: string, index: number) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}