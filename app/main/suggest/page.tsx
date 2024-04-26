'use client';

import AnsQuesForProple from "@/app/component/Suggest/AnsQuesForProple";
import Begin from "@/app/component/Suggest/Begin";
import ResultForPeople from "@/app/component/Suggest/ResultForPeople";
import SelectionPattern from "@/app/component/Suggest/SelectionPattern";
import { createContext, useState } from "react";

export const SuggestContext = createContext<unknown>(null);

export default function Suggest() {

    const [questionState, setQuestionState] = useState<string>("begin");

    return (
        <SuggestContext.Provider value={{ questionState, setQuestionState }}>
            <div>
                {questionState === "begin" && <Begin />}
                {questionState === "selectionPattern" && <SelectionPattern />}
                {questionState === "ansQuesForProple" && <AnsQuesForProple />}
                {questionState === "resultForPeople" && <ResultForPeople />}
            </div>
        </SuggestContext.Provider>
    )
}