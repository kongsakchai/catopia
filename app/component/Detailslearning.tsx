"use client";

import React, { useState } from "react";

export default function Detailslearning({ currentCat }: any) {
  //nature overview characteristics grooming playing_with_cats
  const [currentTab, setCurrentTab] = useState("nature");

  function changeTab(tab: string) {
    setCurrentTab(tab);
  }

  return (
    <div className="flex flex-col h-[390px] w-full gap-4">
      <div className="flex min-h-9 max-w-full overflow-x-auto gap-4">
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
      <div className="flex overflow-auto">
        {currentTab === "nature" && (
          <div className="flex flex-col gap-4">
            {currentCat.description?.map((desc: string, index: number) => (
              <p
                className="text-textfield text-base not-italic font-normal leading-6"
                key={index}
              >
                {desc}
              </p>
            ))}
            <h1 className="text-black01 text-base not-italic font-semibold leading-6">
              สุขภาพของ{currentCat.name}
            </h1>
            {currentCat.health?.map((health: string, index: number) => (
              <p
                className="text-textfield text-base not-italic font-normal leading-6"
                key={index}
              >
                {health}
              </p>
            ))}
          </div>
        )}
        {currentTab === "overview" && (
          <div className="flex flex-col gap-4">
            {currentCat.overall?.map((overall: string, index: number) => (
              <li
                className="list-none text-textfield text-base not-italic font-normal leading-6"
                key={index}
              >
                {overall}
              </li>
            ))}
          </div>
        )}
        {currentTab === "characteristics" && (
          <div className="flex flex-col gap-4">
            {currentCat.characteristics?.map((charac: string, index: number) => (
              <p
                className="text-textfield text-base not-italic font-normal leading-6"
                key={index}
              >
                {charac}
              </p>
            ))}
          </div>
        )}
        {currentTab === "grooming" && (
          <div className="flex flex-col gap-4">
            {currentCat.grooming?.map((groom: string, index: number) => (
              <p
                className="text-textfield text-base not-italic font-normal leading-6"
                key={index}
              >
                {groom}
              </p>
            ))}
          </div>
        )}
        {currentTab === "playing_with_cats" && (
          <div className="flex flex-col gap-4">
            {currentCat.playing_with_cats?.map((playing: string, index: number) => (
              <p
                className="text-textfield text-base not-italic font-normal leading-6"
                key={index}
              >
                {playing}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
