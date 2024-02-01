"use client";
import QuestionData from "@/public/QuestionData"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../register/getquestion/page";


export default function Genquestion() {

    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoice] = useState("")
    const { setQuestionState } = useContext(DataContext)

    useEffect(() => {
        selectAnswer()
    }, [selectChoice])

    const selectAnswer = () => {
        if (selectChoice !== "") {
            nextQuestion()
        }
    }

    const nextQuestion = () => {
        // setSelectChoice("")
        if (current === QuestionData.length - 1) {
            setQuestionState("complete")
        }
        setCurrent(current + 1)
    }

    return (
        <div className="flex flex-col items-start gap-4 mt-4">
            <div className="w-[364px]">
                <span className="text-black01 text-2xl not-italic font-bold leading-10">
                    {QuestionData[current].question}
                </span>
            </div>
            {QuestionData[current].choices.map((choice, index) => (
                <button
                    key={index}
                    onClick={() => setSelectChoice(choice)}
                    className="flex w-[364px] flex-col items-start gap-2.5 p-4 border-black01 rounded-lg border-2 border-solid">
                    {choice}
                </button>
            ))}
        </div>

        // {/* <Link href="/register">
        //             <Image src="ArrowLeft.svg" alt="ArrowLeft" width={24} height={24}/>
        //     </Link> */}

        // {/* <Link href="/">
        //                 <button type="submit" className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
        //                     ถัดไป
        //                 </button>
        //             </Link> */}

    )
}