"use client";
import Ansquestion from "@/app/component/Ansquestion"
import { createContext, useState } from "react"
import Completeregister from "../completeregister/page";

export const DataContext = createContext()

export default function Getquestion() {

    const [questionState, setQuestionState] = useState("questions")

    return (
        <DataContext.Provider value={{ questionState, setQuestionState }}>
            <div>
                {questionState === "questions" && <Ansquestion />}
                {questionState === "complete" && <Completeregister/>}
            </div>
        </DataContext.Provider>
    )
}