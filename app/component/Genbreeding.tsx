"use client";

import { useState, useEffect, useContext } from "react";
import { DataContext } from "../main/breeding/page";
import QuestionBreeding from "@/public/QuestionBreeding";
import Catparent from "@/public/catparent.json";

interface Catparent {
  id: string;
  color: string;
  sex: string;
  type_color: string;
}

export default function Genbreeding() {
  const {
    setBreedingState,
    allSelectedParent,
    setAllSelectedParent,
    current,
    setCurrent,
    progressBreeding,
    setProgressBreeding,
  }: any = useContext(DataContext);

  const [selectChoice, setSelectChoice] = useState("");
  const [typecolorDad, setTypecolorDad] = useState("");
  const [typecolorMom, setTypecolorMom] = useState("");

  const maleParent = Catparent.filter((parent) => parent.sex === "M");
  const typecolorMaleList = [
    ...new Set(maleParent.map((parent) => parent.type_color)),
  ]; //unique typecolor

  const femaleParent = Catparent.filter((parent) => parent.sex === "F");
  const typecolorFemaleList = [
    ...new Set(femaleParent.map((parent) => parent.type_color)),
  ]; //unique typecolor

  useEffect(() => {
    //console.log(allSelectedParent);
  }, [allSelectedParent]);

  const clearLastAnswer = () => {
    setAllSelectedParent((prevAllSelected: any) =>
      prevAllSelected.slice(0, -1)
    );
  };

  const prevQuestion = () => {
    if (current === 0) {
      return;
    } else {
      clearLastAnswer();
      setCurrent(current - 1);
      setProgressBreeding(progressBreeding - 100 / 4);
    }
  };

  const nextQuestion = () => {
    setSelectChoice(""); // Clear selectChoice
    if (current === QuestionBreeding.length - 1) {
      setBreedingState("resultbreeding");
      // //console.log(allSelected)
    } else setCurrent(current + 1);
  };

  const handleSelectChoice = async () => {
    await setAllSelectedParent((prevAllSelected: any) => [
      ...prevAllSelected,
      selectChoice,
    ]);
    setProgressBreeding(progressBreeding + 100 / 4);
    nextQuestion();
  };

  return (
    <div className="flex flex-col items-start gap-4 mt-4">
      <button onClick={prevQuestion}>
        <img src="/ArrowLeft.svg" alt="Back" />
      </button>
      <div className="w-[364px]">
        <span className="text-black01 text-2xl not-italic font-bold leading-10">
          {QuestionBreeding[current].questionHeader}
        </span>
        <span className="text-primary text-2xl not-italic font-bold leading-10">
          {QuestionBreeding[current].sex}
        </span>
        <span className="text-black01 text-2xl not-italic font-bold leading-10">
          {QuestionBreeding[current].questionTail}
        </span>
      </div>
      <div className="flex flex-col items-start gap-4 max-h-[450px] min-h-[410px] overflow-auto">
        {current === 0
          ? typecolorMaleList.map((choice : any, index : number) => (
              <button
                key={index}
                value={choice}
                onClick={() => {
                  setTypecolorDad(choice);
                  setSelectChoice(choice);
                }}
                className={`flex flex-col items-start w-[364px] gap-2.5 p-4 border-black01 ${
                  choice === selectChoice
                    ? "border-primary rounded-lg border-2 border-solid"
                    : "rounded-lg border-2 border-solid"
                } hover:bg-primary hover:text-white`}
              >
                <span className="text-base text-black01 not-italic font-normal leading-6">
                  {choice}
                </span>
                <img
                  src={
                    maleParent
                      .filter((dad) => dad.type_color === choice)
                      .map((dad) => dad.img_url)[0]
                  }
                  alt={choice.color}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </button>
            ))
          : current === 1
          ? maleParent
              .filter((dad) => dad.type_color === typecolorDad)
              .map((choice, index) => (
                <button
                  key={index}
                  value={choice.id}
                  onClick={() => setSelectChoice(choice.color)}
                  className={`flex flex-col items-start w-[364px] gap-2.5 p-4 border-black01 ${
                    choice.color === selectChoice
                      ? "border-primary rounded-lg border-2 border-solid"
                      : "rounded-lg border-2 border-solid"
                  } hover:bg-primary hover:text-white`}
                >
                  <span className="text-base text-black01 not-italic font-normal leading-6">
                    {choice.color}
                  </span>
                  <img
                    src={choice.img_url}
                    alt={choice.color}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </button>
              ))
          : current === 2
          ? typecolorFemaleList.map((choice : any, index : number) => (
              <button
                key={index}
                value={choice}
                onClick={() => {
                  setTypecolorMom(choice);
                  setSelectChoice(choice);
                }}
                className={`flex flex-col items-start w-[364px] gap-2.5 p-4 border-black01 ${
                  choice === selectChoice
                    ? "border-primary rounded-lg border-2 border-solid"
                    : "rounded-lg border-2 border-solid"
                } hover:bg-primary hover:text-white`}
              >
                <span className="text-base text-black01 not-italic font-normal leading-6">
                  {choice}
                </span>
                <img
                  src={
                    femaleParent
                      .filter((mom) => mom.type_color === choice)
                      .map((mom) => mom.img_url)[0]
                  }
                  alt={choice.color}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </button>
            ))
          : current === 3
          ? femaleParent
              .filter((mom) => mom.type_color === typecolorMom)
              .map((choice, index) => (
                <button
                  key={index}
                  value={choice.id}
                  onClick={() => setSelectChoice(choice.color)}
                  className={`flex flex-col items-start w-[364px] gap-2.5 p-4 border-black01 ${
                    choice.color === selectChoice
                      ? "border-primary rounded-lg border-2 border-solid"
                      : "rounded-lg border-2 border-solid"
                  } hover:bg-primary hover:text-white`}
                >
                  <span className="text-base text-black01 not-italic font-normal leading-6">
                    {choice.color}
                  </span>
                  <img
                    src={choice.img_url}
                    alt={choice.color}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </button>
              ))
          : null}
      </div>
      <button
        type="submit"
        onClick={handleSelectChoice}
        className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2  bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
      >
        ถัดไป
      </button>
    </div>
  );
}
