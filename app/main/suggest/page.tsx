"use client";

import AnsQuesForProple from "@/app/component/Suggest/AnsQuesForProple";
import Begin from "@/app/component/Suggest/Begin";
import ResultForPeople from "@/app/component/Suggest/ResultForPeople";
import SelectYourKitten from "@/app/component/Suggest/SelectYourKitten";
import SelectionPattern from "@/app/component/Suggest/SelectionPattern";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const SuggestContext = createContext<unknown>(null);

export default function Suggest() {

  const [questionState, setQuestionState] = useState<string>("begin");

  const [kittenData, setKittenData] = useState<any[]>([]);

  useEffect(() => {
    getKittenData();
  }, []);

  const getKittenData = async () => {
    try {
      const responseKittens = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/cat",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (responseKittens.data.status === 200) {
        if (responseKittens.data.message === "success") {
          setKittenData(responseKittens.data.data);
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <SuggestContext.Provider value={{ questionState, setQuestionState, kittenData }}>
      <div>
        {questionState === "begin" && <Begin />}
        {questionState === "selectionPattern" && <SelectionPattern />}
        {questionState === "selectYourKitten" && <SelectYourKitten />}
        {questionState === "ansQuesForProple" && <AnsQuesForProple />}
        {questionState === "resultForPeople" && <ResultForPeople />}
      </div>
    </SuggestContext.Provider>
  );
}
