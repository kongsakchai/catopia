"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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

  function handleSearch(e: any) {
    if (e.target.value === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(newListCats.filter((words: any) => words.includes(e.target.value)).slice(0, 8));
  }

  const afterSearch = (cat: string) => {
    router.push({
      pathname: "/main/home/learning",
      query: { cat: cat },
    } as unknown as string);
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
          onChange={(e) => handleSearch(e)}
          className={`flex w-full h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 ml-8 focus:outline-none border-[none]`}
        />
        {
          activeSearch.length > 0 && (
            <div className="flex flex-col gap-2 absolute top-10 p-4 bg-slate-800 text-textfield w-full rounded left-1/2 -translate-x-1/2 ">
              {
                activeSearch.map((cat: string, index: number) => (
                  <button
                    value={cat}
                    key={index}
                    onClick={() => afterSearch(cat)}
                    className="flex items-center gap-2">
                    <span>{cat}</span>
                  </button>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
}
