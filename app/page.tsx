'use client'

import PreLoader from "./component/Loader/PreLoader"

import Link from "next/link"
import Loginform from "./component/Loginform"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Home() {
  const router = useRouter()

  const [enablePreloader, setEnablePreloader] = useState(false);

  useEffect(() => {
    verifyToken()
  }, [])

  const verifyToken = async () => {
    try {
      const res = await axios.get("/api/auth/verify", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      console.log("res", res.data);

      if (res.data) {
        router.push("/main/home")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Image src="Catlogo.svg" width={194} height={181} alt="Logo" priority={true} />
      {enablePreloader && <PreLoader />}
      <Loginform setEnablePreloader={setEnablePreloader} />
      <div className="text-center">
        <div className="flex items-center">
          <div className="flex-1 w-[320px] h-[0.001px] shrink-0 border border-line"></div>
          <span className="font-noto_sans_thai text-xs not-italic font-normal leading-5 text-textfield px-2">หรือ</span>
          <div className="flex-1 border border-line"></div>
        </div>
      </div>
      <div className="flex mt-4">
        <span className="font-noto_sans_thai text-xs not-italic font-normal leading-5 text-textfield">ยังไม่มีบัญชีใช่ไหม?</span>
        <Link href="/register" className="font-noto_sans_thai text-xs not-italic font-semibold leading-5 ml-1 text-primary">ลงทะเบียน</Link>
      </div>
    </div>
  )
}


