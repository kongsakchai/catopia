"use client";

import Titlebreeding from "@/app/component/Titlebreeding";
import Selectbreeding from "@/app/component/Selectbreeding";
import Resultbreeding from "@/app/component/Resultbreeding";

import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type DataContextType = {
  breedingState: string;
  setBreedingState: Dispatch<SetStateAction<string>>;
  allSelectedParent: any[];
  setAllSelectedParent: Dispatch<SetStateAction<any[]>>;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  progressBreeding: number;
  setProgressBreeding: Dispatch<SetStateAction<number>>;
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export default function Breeding(): JSX.Element {
  const [breedingState, setBreedingState] = useState<string>("titlebreeding");
  const [allSelectedParent, setAllSelectedParent] = useState<any[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [progressBreeding, setProgressBreeding] = useState<number>(0);

  return (
    <DataContext.Provider
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
    </DataContext.Provider>
  );
}
