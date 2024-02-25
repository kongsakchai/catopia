"use client";

import Selectbreeding from "@/app/component/Selectbreeding";
import Titlebreeding from "@/app/component/Titlebreeding";
import { useState, createContext } from "react";

export const DataContext = createContext();

export default function Breeding() {

    const [breedingState, setBreedingState] = useState("titlebreeding");

  return (
    <DataContext.Provider value={{breedingState,setBreedingState}}>
      <div>
        {breedingState === "titlebreeding" && <Titlebreeding />}
        {breedingState === "selectbreeding" && <Selectbreeding />}
      </div>
    </DataContext.Provider>
  );
}
