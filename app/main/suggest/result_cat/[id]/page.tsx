"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import learningcats from "@/app/file/learningcats.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ResultCat({ params }: any) {
  const router = useRouter();

  const [resultSuggest, setResultSuggest] = useState<any>([]);

  useEffect(() => {
    getResultSuggest();
  }, []);

  const getResultSuggest = async () => {
    try {
      const response = await axios.get("/api/recommend/cat/" + params.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        if (response.data.success) {
          // //console.log('Suggest : ', response.data.data);

          matchSuggest(response.data.data);
        }
      }
    } catch (error) {
      //console.log('Error : ', error);
    }
  };

  function matchSuggest(suggestArr: Array<string>) {
    const resultMatching = suggestArr
      .slice(0, 5)
      .map((catname: string) => learningcats.find((cat: any) => cat.english_name === catname));
    setResultSuggest(resultMatching);
  }

  // //console.log("resultSuggest: ", resultSuggest);

  return (
    <div
      className="flex flex-col h-screen w-full"
      style={{
        backgroundImage: "url(/Mainbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center buttom",
        height: "full",
        zIndex: 0,
      }}
    >
      <div className="inline-flex flex-col items-center mt-14">
        <h1 className="text-center text-2xl text-black01 not-italic font-semibold leading-8">ลักษณะพันธุ์แมว</h1>
        <h3 className="text-center text-base text-primary not-italic font-semibold leading-6">
          ที่เหมาะสมกับแมวของคุณ
        </h3>
      </div>
      <div
        className="flex items-center justify-center h-[605px] w-full mt-6"
        style={{
          backgroundImage: "url(/ResultSuggestbg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "full",
        }}
      >
        <div className="flex flex-col items-start gap-4">
          {resultSuggest.map((cat: any) => (
            <div
              key={cat.id}
              className="flex justify-between w-[364px] h-[96px] pl-4 pr-4 rounded-[20px] border-[2px] border-solid border-secondary"
            >
              <div className="flex items-center gap-5">
                <Image src={cat.img_url} width={72} height={72} alt={cat.english_name} className=" rounded-lg" />
                <div className=" flex flex-col gap-[6px]">
                  <h1 className=" text-black01 text-base not-italic font-bold leading-6">{cat.name}</h1>
                  <h3 className=" text-textfield text-xs not-italic font-semibold leading-5">{cat.english_name}</h3>
                </div>
              </div>
              <button onClick={() => router.push(`/main/home/learning/${cat.name}`)}>
                <Image src="/primary-about.svg" width={24} height={24} alt="aboutcat" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultCat;
