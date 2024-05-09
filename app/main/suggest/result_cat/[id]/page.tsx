'use client';

import axios from "axios";
import React, { useEffect,useState } from "react";
import learningcats from "@/public/learningcats.json";

function ResultCat({ params }: any) {

  const [resultSuggest, setResultSuggest] = useState<any>([]);

  useEffect(() => {
    getResultSuggest();
  }, []);

  const getResultSuggest = async () => {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/recommend/cat/" + params.id, {
        headers:{
          Authorization: `Bearer + ${localStorage.getItem('token')}`
        }
      });
      if (response.status === 200) {
        if(response.data.data.success){
          // setResultSuggest(response.data.data.data);
          matchSuggest(response.data.data.data);
        }
      }
    } catch (error) {
      console.log('Error : ', error);
    }
  };
  
  function matchSuggest(suggestArr: Array<string>){
    const resultMatching = learningcats.filter((cat : any) => suggestArr.includes(cat.english_name))
    setResultSuggest(resultMatching);
  }

  console.log(resultSuggest);

  return (
    <div
      className="flex flex-col h-[793px] w-full"
      style={{
        backgroundImage: "url(/Mainbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center buttom",
        height: "full",
        zIndex: 0,
      }}
    >
      <div className="inline-flex flex-col items-center mt-14">
        <h1 className="text-center text-2xl text-black01 not-italic font-semibold leading-8">
          ลักษณะพันธุ์แมว
        </h1>
        <h3 className="text-center text-base text-primary not-italic font-semibold leading-6">
          ที่เหมาะสมกับแมวของคุณ
        </h3>
      </div>
      <div
        className=" flex items-center justify-center h-[605px] w-full mt-6 border border-solid border-red-800"
        style={{
          backgroundImage: "url(/ResultSuggestbg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "full",
        }}
      ></div>
    </div>
  );
}

export default ResultCat;
