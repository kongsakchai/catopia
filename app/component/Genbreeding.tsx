"use client";

import QuestionBreeding from "@/public/QuestionBreeding";
import Catparent from "@/public/Catparent";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../main/breeding/page";

interface Catparent {
    id: string;
    color: string;
    sex: string;
    typecolor: string
}

export default function Genbreeding({ progressBreeding, setProgressBreeding }) {

    const { setBreedingState } = useContext(DataContext);

    const [current, setCurrent] = useState(0);
    const [selectChoice, setSelectChoice] = useState("");
    const [allSelected, setAllSelected] = useState([]);
    const [typecolorDad, setTypecolorDad] = useState<string>("");
    const [dadId, setDadId] = useState<string>("");
    const [typecolorMom, setTypecolorMom] = useState<string>("");
    const [momId, setMomId] = useState<string>("");

    const maleParent = Catparent.filter((parent: string) => parent.sex === "M")
    const typecolorMaleList = [...new Set(maleParent.map((parent: string) => parent.type_color))]//unique typecolor

    const femaleParent = Catparent.filter((parent: string) => parent.sex === "F")
    const typecolorFemaleList = [...new Set(femaleParent.map((parent: string) => parent.type_color))]//unique typecolor

    useEffect(() => {
        console.log(allSelected);
    }, [allSelected]);

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
                    {QuestionBreeding[current].sex}
                </span>
                <span className="text-black01 text-2xl not-italic font-bold leading-10">
                    {QuestionBreeding[current].questionTail}
                </span>
            </div>
            {current === 0 ? (
                typecolorMaleList.map((choice, index) => (
                    <button
                        key={index}
                        value={choice}
                        onClick={() => {
                            setTypecolorDad(choice)
                            setSelectChoice(choice)
                        }}
                        className={`flex items-center justify-between w-[364px] gap-2.5 p-4 border-black01 ${choice === selectChoice ? 'border-primary rounded-lg border-2 border-solid' : 'rounded-lg border-2 border-solid'} hover:bg-primary hover:text-white`}
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
                ))
            ) : current === 1 ? (
                maleParent.filter((dad: string) => dad.type_color === typecolorDad).map((choice, index) => (
                    <button
                        key={index}
                        value={choice.id}
                        onClick={() => setSelectChoice(choice.color)}
                        className={`flex items-center justify-between w-[364px] gap-2.5 p-4 border-black01 ${choice.color === selectChoice ? 'border-primary rounded-lg border-2 border-solid' : 'rounded-lg border-2 border-solid'} hover:bg-primary hover:text-white`}
                    >
                        <span>{choice.color}</span>
                        {choice.color === selectChoice && (
                            <img
                                src="/Check.svg"
                                alt="Check"
                                style={{ marginRight: "5px", alignSelf: "center" }}
                            />
                        )}
                    </button>
                )
                )) : (
                <span>Test2</span>
            )}
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