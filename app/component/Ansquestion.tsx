"use client";
import Genquestion from "@/app/component/Genquestion";
import Headerquestion from "@/app/component/Headerquestion";
import { useState } from "react";

export default function Ansquestion() {
  const [progress, setProgress] = useState<number>(0);

  return (
    <div className=" flex flex-col items-center">
      <Headerquestion progress={progress} />
      <div className="w-full mt-0 h-[0.001px] shrink-0 border border-line" />
      <Genquestion progress={progress} setProgress={setProgress} />
    </div>
  );
}
