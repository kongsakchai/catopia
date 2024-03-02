"use client";

import { useState } from "react";
import Headerbreeding from "./Headerbreeding";
import Genbreeding from "./Genbreeding";

export default function Selectbreeding() {

  const [progressBreeding, setProgressBreeding] = useState<number>(0);

  return (
    <div className="flex flex-col items-center">
      <Headerbreeding progressBreeding={progressBreeding} />
      <div className="w-full mt-0 h-[0.001px] shrink-0 border border-line" />
      <Genbreeding progressBreeding={progressBreeding} setProgressBreeding={setProgressBreeding}/>
    </div>
  );
}
