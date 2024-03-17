"use client";

import { useContext, useEffect } from "react";
import { DataContext } from "../main/breeding/page";
import DataKitten from "@/public/DataKitten.json";
import Catparent from "@/public/Catparent.json";

export default function Resultbreeding() {
  const {
    allSelectedParent,
    setAllSelectedParent,
    current,
    setCurrent,
    setBreedingState,
    setProgressBreeding,
  }: any = useContext(DataContext);

  useEffect(() => {
    getKitten();
  }, []);

  useEffect(() => {
    console.log(allSelectedParent);
  }, [allSelectedParent]);

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
    console.log(getKitten.length === 0 ? "No kitten" : getKitten);

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
  }

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
    <div className="flex flex-col">
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
      <div className="flex flex-col relative items-center h-full border border-solid border-red-500">
        <div className="flex flex-col justify-center items-center relative shrink-0 z-10 w-[364px] h-[424px] rounded-2xl bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.16)] border border-solid border-blue-500">
          <h1>text div 1</h1>
        </div>
        <div className="flex flex-col justify-center items-center absolute shrink-0 z-0 top-[115px] w-full h-screen rounded-2xl bg-black01">
          <h1 className="text-white">text div 2</h1>
        </div>
      </div>

      {/* <div className="relative flex flex-col items-center h-full border border-solid border-red-500">
        <div className="flex-shrink-0 w-[364px] h-[424px] rounded-2xl bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.16)] border border-solid border-blue-500 relative">
          <h1>text div 1</h1>
        </div>
        <div className="absolute top-[-100px] left-0 w-full h-[250px] bg-black flex justify-center items-center">
          <h1 className="text-white">text div 2</h1>
        </div>
      </div> */}

    </div>
  );
}
