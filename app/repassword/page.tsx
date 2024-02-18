"use client";

import { useState } from "react"
import Link from "next/link"
import Image from "next/image";

export default function Forgotpassword() {

    const [username, setUsername] = useState('')

    return (
        <div className="flex flex-col items-center gap-4 mt-52">
            <Image src="Catlogo.svg" width={194} height={181} alt="Logo" priority={true} />
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-2xl not-italic font-semibold leading-8 text-black01">ลืมรหัสผ่าน</h1>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder="ชื่อผู้ใช้งาน"
                    className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded border-textfield focus:outline-primary" />
                <Link href="/repassword/checkOTP">
                    <div className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
                        ส่งรหัสยืนยัน
                    </div>
                </Link>
            </div>
            <div className="text-center">
                <div className="flex items-center">
                    <div className="flex-1 w-[320px] h-[0.001px] shrink-0 border border-line"></div>
                    <span className="text-xs not-italic font-normal leading-5 text-textfield px-2">หรือ</span>
                    <div className="flex-1 border border-line"></div>
                </div>
            </div>
            <div className="flex">
                <span className="text-xs not-italic font-normal leading-5 text-textfield">มีบัญชีแล้วใช่ไหม?</span>
                <Link href="/" className="text-xs not-italic font-semibold leading-5 ml-1 text-primary">เข้าสู่ระบบ</Link>
            </div>
        </div>
    )
}