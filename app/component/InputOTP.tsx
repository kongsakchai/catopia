"use client";

import { useState } from "react"
import Link from "next/link"

export default function InputOTP() {

    const [firstOTP, setFirstOTP] = useState('')
    const [secondtOTP, setSecondOTP] = useState('')
    const [thirdOTP, setThirdOTP] = useState('')
    const [fourthOTP, setFourthOTP] = useState('')

    return (
        <div className="flex flex-col justify-center">
            <div className="flex mb-4">
                <span className="text-xs not-italic font-normal leading-5 text-textfield">ไม่ได้รับรหัส OTP</span>
                <Link href="/" className="text-xs not-italic font-semibold leading-5 ml-1 text-primary">ส่งใหม่อีกครั้ง</Link>
            </div>
            <div className="flex items-start gap-4">
                <input
                    value={firstOTP}
                    onChange={e => setFirstOTP(e.target.value)}
                    type="text"
                    placeholder="1"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
                <input
                    value={secondtOTP}
                    onChange={e => setSecondOTP(e.target.value)}
                    type="text"
                    placeholder="2"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
                <input
                    value={thirdOTP}
                    onChange={e => setThirdOTP(e.target.value)}
                    type="text"
                    placeholder="3"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
                <input
                    value={fourthOTP}
                    onChange={e => setFourthOTP(e.target.value)}
                    type="text"
                    placeholder="4"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
            </div>
        </div>
    )
}