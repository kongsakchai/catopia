"use client";

import QuestionBreeding from "@/public/QuestionBreeding";
import { useState, useContext } from "react";
import { DataContext } from "../main/breeding/page";

export default function Genbreeding({ progressBreeding, setProgressBreeding }) {

    const { setBreedingState } = useContext(DataContext);

    const [current, setCurrent] = useState(0);
    const [selectChoice, setSelectChoice] = useState("");
    const [allSelected, setAllSelected] = useState([]);

    const prevQuestion = () => {
        if (current === 0) {
            return;
        } else {
            clearLastAnswer();
            setCurrent(current - 1);
            setProgressBreeding(progressBreeding - 100 / 4);
        }
    };

    const clearLastAnswer = () => {
        setAllSelected((prevAllSelected) => prevAllSelected.slice(0, -1));
    };

    const nextQuestion = () => {
        setSelectChoice(""); // Clear selectChoice
        if (current === QuestionBreeding.length - 1) {
            setBreedingState("selectbreeding");
            // console.log(allSelected)
        } else setCurrent(current + 1);
    };

    const handleSelectChoice = () => {
        setAllSelected((prevAllSelected) => [...prevAllSelected, selectChoice]);
        setProgressBreeding(progressBreeding + 100 / 4);
        nextQuestion();
    };

    return (
        <div className="flex flex-col items-start gap-4 mt-4 border border-solid border-red-500">
            <button onClick={prevQuestion}>
                <img src="/ArrowLeft.svg" alt="Back" />
            </button>
            <div className="w-[364px]">
                <span className="text-black01 text-2xl not-italic font-bold leading-10">
                    {QuestionBreeding[current].questionHeader}
                </span>
                <span className="text-primary text-2xl not-italic font-bold leading-10">
                    { QuestionBreeding[current].sex }
                </span>
                <span className="text-black01 text-2xl not-italic font-bold leading-10">
                    {QuestionBreeding[current].questionTail}
                </span>
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