"use client";

import Catslist from "@/app/component/Profile/Catslist";
import Yourprofile from "@/app/component/Profile/Yourprofile";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface UserData {
  username: string;
  email: string;
  id: number;
  gender: string;
  date: string;
  createdAt: string;
  profile: string;
}

export default function Profile() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [kittensData, setKittensData] = useState<any[]>([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const [responseUser, responseKittens] = await Promise.all([
        axios.get("/api/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }),
        axios.get("/api/cat", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }),
      ]);

      setUserData(responseUser.data.data);
      setKittensData(responseKittens.data);
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  // //console.log("userData: ", userData);

  return (
    <div
      className="flex flex-col items-center w-screen h-screen "
      style={{
        backgroundImage: "url('/Moon.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "cover",
        zIndex: 0,
      }}
    >
      <button type="button" onClick={logout} className="flex justify-end w-[364px] right-0 mt-12">
        <p className="text-error text-base not-italic font-normal leading-6">Logout</p>
      </button>
      <div className="flex flex-col w-[364px] justify-center items-center gap-8 mt-2">
        <Yourprofile userData={userData} />
        <Catslist kittensData={kittensData} />
      </div>
    </div>
  );
}
