"use client";

import { useContext, useEffect } from "react";
import { DataContext } from "../main/breeding/page";
import DataKitten from "@/public/DataKitten.json";
import Catparent from "@/public/Catparent.json";
import { get } from "http";

export default function Resultbreeding() {
  const { allSelectedParent, setAllSelectedParent } = useContext(DataContext);

  useEffect(() => {
    getKitten();
  }, []);

  function getKitten() {
    const getFather_id = Catparent.filter(
      (cat) =>
        cat.sex === "M" &&
        cat.type_color === allSelectedParent[0] &&
        cat.color === allSelectedParent[1]
    );
    const getMother_id = Catparent.filter(
      (cat) =>
        cat.sex === "F" &&
        cat.type_color === allSelectedParent[2] &&
        cat.color === allSelectedParent[3]
    );

    console.log("father_id :", getFather_id[0].id);
    console.log("mother_id :", getMother_id[0].id);

    const getKitten = DataKitten.filter(
      (kitten) =>
        kitten.father_id === getFather_id[0].id &&
        kitten.mother_id === getMother_id[0].id
    );
    console.log(getKitten.length === 0 ? "No kitten" : getKitten);

    const getKittenMale = getKitten.filter((kitten)=> kitten.sex === "M").map((kitten) => kitten.color);
    const getKittenFemale = getKitten.filter((kitten)=> kitten.sex === "F").map((kitten) => kitten.color);
    console.log(getKittenMale.length === 0 ? "No kitten" : `getKittenMale: ${getKittenMale}`);
    console.log(getKittenFemale.length === 0 ? "No kitten" : `getKittenFemale: ${getKittenFemale}`);
  }

  return (
    <>
      <h1>{allSelectedParent[0]}</h1>
      <h1>{allSelectedParent[1]}</h1>
      <h1>{allSelectedParent[2]}</h1>
      <h1>{allSelectedParent[3]}</h1>
    </>
  );
}
