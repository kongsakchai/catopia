"use client";

import AnsQuesForProple from "@/app/component/Suggest/AnsQuesForProple";
import Begin from "@/app/component/Suggest/Begin";
import SelectYourKitten from "@/app/component/Suggest/SelectYourKitten";
import SelectionPattern from "@/app/component/Suggest/SelectionPattern";
import { SuggestContext } from "@/app/store/context";
import axios from "axios";
import { useState, useEffect } from "react";

// export const SuggestContext = createContext<unknown>(null);

export default function Suggest() {
  const [questionState, setQuestionState] = useState<string>("begin");

  const [kittenData, setKittenData] = useState<any[]>([]);

  useEffect(() => {
    getKittenData();
  }, []);

  const getKittenData = async () => {
    try {
      const responseKittens = await axios.get("/api/cat", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (responseKittens.status === 200) {
        if (responseKittens.data.success) {
          //console.log("responseKittens: ", responseKittens.data.data);

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
      </div>
    </SuggestContext.Provider>
  );
}
