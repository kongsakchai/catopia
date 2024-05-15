"use client";

import React from "react";
import QuestionData from "@/public/QuestionData";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SuggestContext } from "@/app/store/context";

function GenQuesSugest({ progress, setProgress }: any) {
  const { setQuestionState }: any = useContext(SuggestContext);

  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [selectChoice, setSelectChoice] = useState<number>(-1);
  const [allSelected, setAllSelected] = useState([]);

  useEffect(() => {
    //console.log(allSelected);
    if (allSelected.length === 8) {
      handleSentAnswer();
    }
  }, [allSelected]);

  const prevQuestion = () => {
    if (current === 0) {
      setQuestionState("selectionPattern");
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
    setSelectChoice(-1); // Clear selectChoice
    if (current === QuestionData.length - 1) {
      router.push("/main/suggest/result_user");
      // //console.log(allSelected)
    } else setCurrent(current + 1);
  };

  const handleSelectChoice = () => {
    setAllSelected((prevAllSelected): any => [...prevAllSelected, selectChoice]);
    setProgress(progress + 100 / 7);
    nextQuestion();
  };

  const handleSentAnswer = async () => {
    const answer = allSelected;
    //console.log(answer);

    //console.log(process.env.NEXT_PUBLIC_API_URL);

    try {
      const response = await axios.post(
        "/api/user/answer",
        { answer },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        if (response.data.success) {
          //console.log("success sent answer");
        }
      }
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 mt-4">
      <button onClick={prevQuestion}>
        <img src="/ArrowLeft.svg" alt="Back" />
      </button>
      <div className="w-[364px]">
        <span className="text-black01 text-2xl not-italic font-bold leading-10">{QuestionData[current].question}</span>
      </div>
      <div className="flex flex-col items-start gap-4 max-h-[450px] overflow-auto">
        {QuestionData[current].choices.map((choice: string, index: number) => (
          <button
            key={index}
            onClick={() => setSelectChoice(index + 1)}
            className={`flex items-center justify-between w-[364px] gap-2.5 p-4 border-black01 ${
              index + 1 !== selectChoice
                ? "rounded-lg border-2 border-solid"
                : "border-primary rounded-lg border-2 border-solid"
            } hover:bg-primary hover:text-white`}
          >
            <span>{choice}</span>
            {index + 1 === selectChoice && (
              <img src="/Check.svg" alt="Check" style={{ marginRight: "5px", alignSelf: "center" }} />
            )}
          </button>
        ))}
      </div>
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

export default GenQuesSugest;
