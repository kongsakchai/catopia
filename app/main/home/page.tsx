"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Homeheader from "@/app/component/Homeheader";
import Homeinterest from "@/app/component/Homeinterest";
import Homerecommand from "@/app/component/Homerecommand";
import Homerefer from "@/app/component/Homerefer";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSuggest();
  }, []);

  const getSuggest = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/recommend/cat/",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setData(response.data.data);
        return true;
      }
      return false;
    } catch (error) {
      console.log("Error : ", error);
      return false;
    }
  };

  console.log("data : ", data);
 
  return (
    <div className="flex flex-col items-start gap-6 mx-8 my-12 border border-solid border-red-500">
      <Homeheader />
      <Homerecommand />
      <Homeinterest />
      <Homerefer />
    </div>
  );
}
