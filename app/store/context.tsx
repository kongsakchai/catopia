'use client';

import { Dispatch, SetStateAction, createContext } from "react";

export const RegisContext = createContext<unknown>(null);

type ActiveContextType = {
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
  };

export const ActiveContext = createContext<ActiveContextType | undefined>(
    undefined
  );

  export const SuggestContext = createContext<unknown>(null);