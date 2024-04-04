"use client";

import { useContext, useEffect, useState } from "react";
import { DataContext } from "../main/breeding/page";
import Image from "next/image";
import DataKitten from "@/public/DataKitten.json";
import Catparent from "@/public/Catparent.json";
import Homeinterest from "./Homeinterest";

export default function Resultbreeding() {
  useEffect(() => {
    getKitten();
  }, []);

  const [showKitten, setShowKitten] = useState([{}]);
  const [showMaleKitten, setShowMaleKitten] = useState(true);
  const [showFemaleKitten, setShowFemaleKitten] = useState(false);

  const {
    allSelectedParent,
    setAllSelectedParent,
    current,
    setCurrent,
    setBreedingState,
    setProgressBreeding,
  }: any = useContext(DataContext);

  function isShowGender(show: string) {
    if (show === "showMaleKitten") {
      setShowMaleKitten(true);
      setShowFemaleKitten(false);
    } else {
      setShowFemaleKitten(true);
      setShowMaleKitten(false);
    }
  }

  function getKitten() {
    const getFather_id = Catparent.filter(
      (cat) =>
        cat.sex === "M" &&
        cat.type_color === allSelectedParent[0] &&
        cat.color === allSelectedParent[1]
    );
    const getMother_id = Catparent.filter(
      (cat) =>
        cat.sex === "F" &&
        cat.type_color === allSelectedParent[2] &&
        cat.color === allSelectedParent[3]
    );

    console.log("father_id :", getFather_id[0].id);
    console.log("mother_id :", getMother_id[0].id);

    //show kitten
    const getKitten = DataKitten.filter(
      (kitten) =>
        kitten.father_id === getFather_id[0].id &&
        kitten.mother_id === getMother_id[0].id
    );
    // console.log(getKitten.length === 0 ? "No kitten" : getKitten);

    const getKittenMale = getKitten
      .filter((kitten) => kitten.sex === "M")
      .map((kitten) => kitten.color);

    const getKittenFemale = getKitten
      .filter((kitten) => kitten.sex === "F")
      .map((kitten) => kitten.color);

    console.log(
      getKittenMale.length === 0
        ? "No kitten"
        : `getKittenMale: ${getKittenMale}`
    );

    console.log(
      getKittenFemale.length === 0
        ? "No kitten"
        : `getKittenFemale: ${getKittenFemale}`
    );
    setShowKitten(getKitten);
  }

  console.log("showKitten: ", showKitten);

  const clearLastAnswer = () => {
    setAllSelectedParent((prevAllSelected: any) =>
      prevAllSelected.slice(0, -4)
    );
  };

  const prevQuestion = async () => {
    if (current === 0) {
      return;
    } else {
      clearLastAnswer();
      await setCurrent(0);
      setProgressBreeding(0);
      setBreedingState("selectbreeding");
    }
  };

  return (
    <div
      className="flex flex-col border border-solid border-blue-500"
      style={{
        backgroundImage: "url(/Mainbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center buttom",
        height: "full",
        zIndex: 0,
      }}
    >
      <div className="flex flex-col items-start mt-[33px] ml-8">
        <button onClick={prevQuestion}>
          <img src="/ArrowLeft.svg" alt="Back" />
        </button>
      </div>
      <div className="inline-flex flex-col items-center">
        <h1 className="text-center text-2xl text-black01 not-italic font-semibold leading-8">
          ความเป็นไปได้
        </h1>
        <h3 className="text-center text-base text-primary not-italic font-semibold leading-6">
          สำหรับสีของลูกแมว
        </h3>
      </div>
      {showKitten.length === 0 ? (
        <div className="flex flex-col items-center shrink-0 z-0 top-[115px] w-full h-screen rounded-t-2xl bg-white">
          <div className="flex flex-col items-center gap-6 mt-20 mb-20">
            <Image src="/Warning.svg" width={80} height={80} alt="Alert no have kitten" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-black01 text-center text-base not-italic font-bold leading-6">ไม่สามารถคาดคะเนสีของ</p>
              <p className="text-black01 text-center text-base not-italic font-bold leading-6">ลูกแมวผ่านพ่อและแม่พันธุ์</p>
            </div>
          </div>
          <Homeinterest />
        </div>
      ) : (
        <div className="flex flex-col relative items-center h-full mt-4">
          <div className="flex flex-col justify-center items-center relative shrink-0 z-10 w-[364px] h-[424px] rounded-2xl bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.16)]">
            <div className="flex flex-col shrink-0 items-center gap-2 w-[316px] h-[376px] overflow-auto">
              <div className="flex items-center justify-between p-1 shrink-0 w-[316px] h-[42px] fixed bg-blue02 rounded-lg">
                <button
                  type="button"
                  onClick={() => isShowGender("showMaleKitten")}
                  style={{ transition: "background-color 0.3s, color 0.3s" }}
                  className={`flex items-center justify-center gap-[6px] shrink-0 w-[152px] h-[34px] rounded ${showMaleKitten ? "bg-primary" : "bg-none"
                    }`}
                >
                  <Image
                    src="/male-gender.svg"
                    width={14}
                    height={14}
                    alt="male-gender"
                  />
                  <p className="text-xs not-italic font-semibold leading-5 text-white">
                    เพศชาย
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => isShowGender("showFemaleKitten")}
                  style={{ transition: "background-color 0.3s, color 0.3s" }}
                  className={`flex items-center justify-center gap-[6px] shrink-0 w-[152px] h-[34px] rounded ${showFemaleKitten ? "bg-primary" : "bg-none"
                    }`}
                >
                  <Image
                    src="/female-gender.svg"
                    width={14}
                    height={14}
                    alt="male-gender"
                  />
                  <p className="text-xs not-italic font-semibold leading-5 text-white">
                    เพศหญิง
                  </p>
                </button>
              </div>
              <div className="flex flex-col items-center gap-2 w-[316px] h-full mt-12 overflow-y-auto">
                {showMaleKitten &&
                  showKitten
                    .filter((kitten: any) => kitten.sex === "M")
                    .map((kitten: any, index: number) => (
                      <div
                        key={index}
                        className="flex shrink-0 items-center justify-between w-full h-14 pr-[10px] pl-[10px] bg-white border-b-2"
                      >
                        <div className="flex items-center justify-center gap-4">
                          <img
                            src={kitten.img_url}
                            alt={kitten.color}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: "1px solid #3FA8D0",
                            }}
                          />
                          <span className="text-xs text-black01 not-italic font-normal leading-5">
                            {kitten.color}
                          </span>
                        </div>
                        <div className="flex justify-center items-center">
                          <span className="text-xs text-primary not-italic font-semibold leading-5">
                            เพศชาย
                          </span>
                        </div>
                      </div>
                    ))}
                {showFemaleKitten &&
                  showKitten
                    .filter((kitten: any) => kitten.sex === "F")
                    .map((kitten: any, index: number) => (
                      <div
                        key={index}
                        className="flex shrink-0 items-center justify-between w-full h-14 pr-[10px] pl-[10px] bg-white border-b-2"
                      >
                        <div className="flex items-center justify-center gap-4">
                          <img
                            src={kitten.img_url}
                            alt={kitten.color}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: "1px solid #3FA8D0",
                            }}
                          />
                          <span className="text-xs text-black01 not-italic font-normal leading-5">
                            {kitten.color}
                          </span>
                        </div>
                        <div className="flex justify-center items-center">
                          <span className="text-xs text-primary not-italic font-semibold leading-5">
                            เพศหญิง
                          </span>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center absolute shrink-0 z-0 top-[115px] w-full h-[550px] rounded-t-2xl bg-white">
            <div className="flex mt-[320px]">
              <Homeinterest />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
