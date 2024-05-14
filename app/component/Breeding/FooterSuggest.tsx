'use client'

import learningcats from "@/public/learningcats.json";
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function FooterSuggest() {
    const router = useRouter()

    const [suggestData, setSuggestData] = useState({});
    useEffect(() => {
        getSuggest();
    }, []);

    const getSuggest = async () => {
        try {
            const response = await axios.get(
                process.env.NEXT_PUBLIC_API_URL + "/recommend/cat/",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            if (response.status === 200) {
                // setSuggestData(response.data.data);
                matchSuggest(response.data.data);
                return true;
            }
            return false;
        } catch (error) {
            console.log("Error : ", error);
            return false;
        }
    };

    function matchSuggest(suggestArr: Array<string>) {
        if (Array.isArray(suggestArr)) {
            const resultMatching = suggestArr
                .map((catname: string) =>
                    learningcats.find((cat: any) => cat.english_name === catname)
                );
                setSuggestData(resultMatching);
        } else console.log("suggestArr is not an array");
    }

    console.log("suggestData on breeding : ", suggestData);
    
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
                {suggestData &&
                    Object.values(suggestData).map((cat: any, index: number) => (
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
    )
}

export default FooterSuggest