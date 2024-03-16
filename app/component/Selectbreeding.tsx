"use client";

import { useState } from "react";
import Headerbreeding from "./Headerbreeding";
import Genbreeding from "./Genbreeding";

export default function Selectbreeding() {
  return (
    <div className="flex flex-col items-center">
      <Headerbreeding />
      <div className="w-full mt-0 h-[0.001px] shrink-0 border border-line" />
      <Genbreeding />
    </div>
  );
}
