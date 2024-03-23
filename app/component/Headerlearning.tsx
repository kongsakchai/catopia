"use client";

import React, { useContext } from "react";
import { CatsContext } from "../main/home/learning/[slug]/page";

export default function Headerlearning() {
  const { currentCat }: any = useContext(CatsContext);

  return <div>Cat: {currentCat?.name}</div>;
}
