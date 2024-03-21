"use client";

import Image from "next/image";
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

export default function Homeheader() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [newListCats, setNewListCats] = useState({});
  const [activeSearch, setActiveSearch] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    listCatBreed();
  }, []);

  function listCatBreed() {
    setNewListCats(learningcats.map((cat: any) => cat.name));
  }
  
    function handleSearch() {
      console.log(newListCats);
    }

  return (
    <div className="flex flex-col justify-center items-start gap-2 w-full ">
      <div className="flex w-full justify-between items-center">
        <h1 className="shrink-0 text-2xl text-primary not-italic font-semibold leading-8">
          เลือกแมวที่คุณต้องการ
        </h1>
        <button className="flex justify-center items-center shrink-0">
          <Image
            src="/Notification.svg"
            width={24}
            height={24}
            alt="Notification-btn"
          />
        </button>
      </div>
      <span className="text-base text-textfield not-italic font-normal leading-6">
        {currentDate.toLocaleString("th-TH", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <div className="flex items-start relative w-full border rounded border-textfield">
        <button className="absolute left-0 top-0 h-full mx-3 border-[none] rounded border-textfield focus:outline-primary flex items-center">
          <Image src="/Search.svg" width={18} height={18} alt="Search-btn" />
        </button>
        <input
          type="search"
          placeholder="ค้นหา"
          className={`flex w-full h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 ml-8 focus:outline-none border-[none]`}
        />
        <div className="flex flex-col gap-2 absolute top-10 p-4 bg-slate-800 text-textfield w-full rounded left-1/2 -translate-x-1/2 ">
          <span>1</span>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}
