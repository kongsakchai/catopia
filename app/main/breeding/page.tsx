"use client";

import Titlebreeding from "@/app/component/Titlebreeding";
import Selectbreeding from "@/app/component/Selectbreeding";
import Resultbreeding from "@/app/component/Resultbreeding";

import { useState } from "react";
import { BreedingContext } from "@/app/store/breeding";

export default function Breeding(): JSX.Element {
  const [breedingState, setBreedingState] = useState<string>("titlebreeding");
  const [allSelectedParent, setAllSelectedParent] = useState<any[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [progressBreeding, setProgressBreeding] = useState<number>(0);

  return (
    <BreedingContext.Provider
      value={{
        breedingState,
        setBreedingState,
        allSelectedParent,
        setAllSelectedParent,
        current,
        setCurrent,
        progressBreeding,
        setProgressBreeding,
      }}
    >
      <div>
        {breedingState === "titlebreeding" && <Titlebreeding />}
        {breedingState === "selectbreeding" && <Selectbreeding />}
        {breedingState === "resultbreeding" && <Resultbreeding />}
      </div>
    </BreedingContext.Provider>
  );
}
