import { Dispatch, SetStateAction, createContext } from "react";

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
  
  export const BreedingContext = createContext<DataContextType | undefined>(
    undefined
  );