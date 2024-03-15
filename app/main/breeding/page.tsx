"use client";

import Titlebreeding from "@/app/component/Titlebreeding";
import Selectbreeding from "@/app/component/Selectbreeding";
import Resultbreeding from "@/app/component/Resultbreeding";

import { useState, createContext } from "react";

export const DataContext = createContext();

export default function Breeding() {
  const [breedingState, setBreedingState] = useState<string>("titlebreeding");
  const [allSelectedParent, setAllSelectedParent] = useState([]);

  return (
    <DataContext.Provider
      value={{
        breedingState,
        setBreedingState,
        allSelectedParent,
        setAllSelectedParent,
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
