"use client";

import { useState, useRef } from "react"
import Link from "next/link"

export default function InputOTP() {

    const [firstOTP, setFirstOTP] = useState('')
    const [secondtOTP, setSecondOTP] = useState('')
    const [thirdOTP, setThirdOTP] = useState('')
    const [fourthOTP, setFourthOTP] = useState('')
    const secondInputRef = useRef(null);
    const thirdInputRef = useRef(null)
    const fourthInputRef = useRef(null)

    return (
        <div className="flex flex-col justify-center">
            <div className="flex mb-4">
                <span className="text-xs not-italic font-normal leading-5 text-textfield">ไม่ได้รับรหัส OTP</span>
                <Link href="/" className="text-xs not-italic font-semibold leading-5 ml-1 text-primary">ส่งใหม่อีกครั้ง</Link>
            </div>
            <div className="flex items-start gap-4">
                <input
                    value={firstOTP}
                    onChange={e => {
                        const firstInputOTP = e.target.value
                        if (firstInputOTP === '' || /^\d$/.test(firstInputOTP)) {
                            setFirstOTP(firstInputOTP)
                            if (firstInputOTP !== '') {
                                secondInputRef.current.focus()
                            }
                        }

                    }}
                    type="text"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
                <input
                    ref={secondInputRef}
                    value={secondtOTP}
                    onChange={e => {
                        const secondInputOTP = e.target.value
                        if (secondInputOTP === '' || /^\d$/.test(secondInputOTP)) {
                            setSecondOTP(secondInputOTP)
                            if(secondInputOTP !== ''){
                                thirdInputRef.current.focus()
                            }
                        }
                    }}
                    type="text"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
                <input
                    ref={thirdInputRef}
                    value={thirdOTP}
                    onChange={e => {
                        const thirdInputOTP = e.target.value
                        if (thirdInputOTP === '' || /^\d$/.test(thirdInputOTP)) {
                            setThirdOTP(thirdInputOTP)
                            if(thirdInputOTP !== ''){
                                fourthInputRef.current.focus()
                            }
                        }
                    }}
                    type="text"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
                <input
                    ref={fourthInputRef}
                    value={fourthOTP}
                    onChange={e => {
                        const fourthInputOTP = e.target.value
                        if (fourthInputOTP === '' || /^\d$/.test(fourthInputOTP)) {
                            setFourthOTP(fourthInputOTP)
                        }
                    }}
                    type="text"
                    className="text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid border-textfield focus:outline-primary"
                />
            </div>
        </div>
    )
}