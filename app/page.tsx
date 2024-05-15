'use client'
import Link from "next/link"
import Loginform from "./component/Loginform"
import Image from "next/image"
import { useState } from "react"
import PreLoader from "./component/Loader/PreLoader"

export default function Home() {

  const [enablePreloader, setEnablePreloader] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Image src="Catlogo.svg" width={194} height={181} alt="Logo" priority={true} />
      {enablePreloader && <PreLoader />}
      <Loginform setEnablePreloader={setEnablePreloader}/>
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


