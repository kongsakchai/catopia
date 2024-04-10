'use client'

import Catslist from "@/app/component/Profile/Catslist";
import Yourprofile from "@/app/component/Profile/Yourprofile";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

interface UserData {
    // id: number,
    name: string,
    email: string,
    // img_url: string,
    // last_update: string,
    // kittens: {
    //     id: number,
    //     name: string,
    //     img_url: string,
    //     last_update: string,
    // }[]
}

export default function Profile() {

    const [userData, setUserData] = useState<UserData>({} as UserData)

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try{
            const response = await axios.get("http://localhost:3000/api/user/1")
            setUserData(response.data)
        }catch(error){
            console.log("Error: ", error);
        }
    }

    return (
        <div
            className="flex flex-col items-center w-screen h-screen"
            style={{
                backgroundImage: "url('/Moon.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "cover",
                zIndex: 0,
            }}
        >
            <div className="flex justify-end w-[364px] right-0 mt-12">
                <Link href="/">
                    <p className="text-error text-base not-italic font-normal leading-6">Logout</p>
                </Link>
            </div>
            <div className="flex flex-col w-[364px] justify-center items-center gap-8 mt-2">
                <Yourprofile userData={userData} />
                <Catslist userData={userData} />
            </div>
        </div>
    )
}