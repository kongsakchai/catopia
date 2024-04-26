"use client";
import QuestionData from "@/public/QuestionData";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../register/getquestion/page";

export default function Genquestion({ progress, setProgress }: any) {

  const { setQuestionState }: any = useContext(DataContext);

  const [current, setCurrent] = useState(0);
  const [selectChoice, setSelectChoice] = useState("");
  const [allSelected, setAllSelected] = useState([]);

  useEffect(() => {
    console.log(allSelected);
  }, [allSelected]);

  const prevQuestion = () => {
    if (current === 0) {
      return;
    } else {
      clearLastAnswer();
      setCurrent(current - 1);
      setProgress(progress - 100 / 7);
    }
  };

  const clearLastAnswer = () => {
    setAllSelected((prevAllSelected) => prevAllSelected.slice(0, -1));
  };

  const nextQuestion = () => {
    setSelectChoice(""); // Clear selectChoice
    if (current === QuestionData.length - 1) {
      setQuestionState("complete");
      // console.log(allSelected)
    } else setCurrent(current + 1);
  };

  const handleSelectChoice = async () => {
    await setAllSelected((prevAllSelected): any => [...prevAllSelected, selectChoice]);
    setProgress(progress + 100 / 7);
    nextQuestion();
  };

  // const handleSelectChoice = () => {
  //     setAllSelected({...allSelected, [current]: selectChoice});
  //     nextQuestion();
  // };

  return (
    <div className="flex flex-col items-start gap-4 mt-4">
      <button onClick={prevQuestion}>
        <img src="/ArrowLeft.svg" alt="Back" />
      </button>
      <div className="w-[364px]">
        <span className="text-black01 text-2xl not-italic font-bold leading-10">
          {QuestionData[current].question}
        </span>
      </div>
      {QuestionData[current].choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => setSelectChoice(choice)}
          className={`flex items-center justify-between w-[364px] gap-2.5 p-4 border-black01 ${choice !== selectChoice
              ? "rounded-lg border-2 border-solid"
              : "border-primary rounded-lg border-2 border-solid"
            } hover:bg-primary hover:text-white`}
        >
          <span>{choice}</span>
          {choice === selectChoice && (
            <img
              src="/Check.svg"
              alt="Check"
              style={{ marginRight: "5px", alignSelf: "center" }}
            />
          )}
        </button>
      ))}
      <button
        type="submit"
        onClick={handleSelectChoice}
        className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
      >
        ถัดไป
      </button>
    </div>
  );
}
