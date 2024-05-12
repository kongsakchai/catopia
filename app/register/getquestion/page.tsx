"use client";
import Ansquestion from "@/app/component/Ansquestion";
import { useState } from "react";
import Completeregister from "../completeregister/page";
import { RegisContext } from "@/app/store/context";

export default function Getquestion() {
  const [questionState, setQuestionState] = useState<string>("questions");

  return (
    <RegisContext.Provider value={{ questionState, setQuestionState }}>
      <div>
        {questionState === "questions" && <Ansquestion />}
        {questionState === "complete" && <Completeregister />}
      </div>
    </RegisContext.Provider>
  );
}
