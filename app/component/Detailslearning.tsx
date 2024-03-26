"use client";

import React, { useState } from "react";

export default function Detailslearning({ currentCat }: any) {
  //nature overview characteristics grooming playing_with_cats
  const [currentTab, setCurrentTab] = useState("nature");

  function changeTab(tab: string) {
    setCurrentTab(tab);
  }

  return (
    <div className="flex flex-col justify-center items-start max-h-[390px] w-full gap-4 overflow-x-auto border border-solid border-red-500">
      <div className="flex justify-center gap-4 over border border-solid border-green-700">
        <button
          onClick={() => changeTab("nature")}
          className={`flex h-8 py-1 px-4 justify-center items-center rounded-2xl ${
            currentTab === "nature" ? "bg-primary" : "bg-line"
          }`}
        >
          <span
            className={`whitespace-nowrap ${
              currentTab === "nature" ? "text-white" : "text-textfield"
            } text-center text-base not-italic font-bold leading-6`}
          >
            ลักษณะ
          </span>
        </button>
        <button
          onClick={() => changeTab("overview")}
          className={`flex h-8 py-1 px-4 justify-center items-center rounded-2xl ${
            currentTab === "overview" ? "bg-primary" : "bg-line"
          }`}
        >
          <span
            className={`whitespace-nowrap ${
              currentTab === "overview" ? "text-white" : "text-textfield"
            } text-center text-base not-italic font-bold leading-6`}
          >
            ภาพรวมของ{currentCat.name}
          </span>
        </button>
        <button
          onClick={() => changeTab("characteristics")}
          className={`flex h-8 py-1 px-4 justify-center items-center rounded-2xl ${
            currentTab === "characteristics" ? "bg-primary" : "bg-line"
          }`}
        >
          <span
            className={`whitespace-nowrap ${
              currentTab === "characteristics" ? "text-white" : "text-textfield"
            } text-center text-base not-italic font-bold leading-6`}
          >
            ลักษณะทางกายภาพ
          </span>
        </button>
        <button
          onClick={() => changeTab("grooming")}
          className={`flex h-8 py-1 px-4 justify-center items-center rounded-2xl ${
            currentTab === "grooming" ? "bg-primary" : "bg-line"
          }`}
        >
          <span
            className={`whitespace-nowrap ${
              currentTab === "grooming" ? "text-white" : "text-textfield"
            } text-center text-base not-italic font-bold leading-6`}
          >
            กรูมมิ่ง
          </span>
        </button>
        <button
          onClick={() => changeTab("playing_with_cats")}
          className={`flex h-8 py-1 px-4 justify-center items-center rounded-2xl ${
            currentTab === "playing_with_cats" ? "bg-primary" : "bg-line"
          }`}
        >
          <span
            className={`whitespace-nowrap ${
              currentTab === "playing_with_cats"
                ? "text-white"
                : "text-textfield"
            } text-center text-base not-italic font-bold leading-6`}
          >
            การเล่นกับเเมว
          </span>
        </button>
      </div>
      <div className="flex justify-center overflow-auto">
        {currentTab === "nature" && (
          <div className="flex flex-col gap-4">
            <p className="text-textfield text-base not-italic font-normal leading-6">
              {currentCat.description}
            </p>
            <h1 className="text-black01 text-base not-italic font-semibold leading-6">
              สุขภาพของ{currentCat.name}
            </h1>
            <p className="text-textfield text-base not-italic font-normal leading-6">
              {currentCat.health}
            </p>
          </div>
        )}
        {currentTab === "overview" && (
          <div className="flex flex-col gap-4">
            {currentCat.overall.map((item: string, index: number) => (
              <li className="list-none text-textfield text-base not-italic font-normal leading-6" key={index}>{item}</li>
            ))}
          </div>
        )}
        {currentTab === "characteristics" && (
          <div className="flex flex-col gap-4">
            <p className="text-textfield text-base not-italic font-normal leading-6">
              {currentCat.characteristics}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
