"use client";

import { useState, useRef } from "react"
import { useRouter } from 'next/navigation';
import Link from "next/link"

export default function InputOTP() {
    const router = useRouter()

    const [firstOTP, setFirstOTP] = useState('')
    const [secondtOTP, setSecondOTP] = useState('')
    const [thirdOTP, setThirdOTP] = useState('')
    const [fourthOTP, setFourthOTP] = useState('')
    const [errorFirstOTP, setErrorFirstOTP] = useState(false)
    const [errorSecondOTP, setErrorSecondOTP] = useState(false)
    const [errorThirdOTP, setErrorThirdOTP] = useState(false)
    const [errorFourthOTP, setErrorFourthOTP] = useState(false)
    const [errorOTP, setErrorOTP] = useState('')
    const secondInputRef = useRef(null)
    const thirdInputRef = useRef(null)
    const fourthInputRef = useRef(null)

    const validateForm = (e) => {
        e.preventDefault()

        const isFirstOTPValid = firstOTP.length === 1
        const isSecondOTPValid = secondtOTP.length === 1
        const isThirdOTPValid = thirdOTP.length === 1
        const isFourthOTPValid = fourthOTP.length === 1
        setErrorFirstOTP(!isFirstOTPValid)
        setErrorSecondOTP(!isSecondOTPValid)
        setErrorThirdOTP(!isThirdOTPValid)
        setErrorFourthOTP(!isFourthOTPValid)

        if (isFirstOTPValid && isSecondOTPValid && isThirdOTPValid && isFourthOTPValid) {
            router.push('/repassword/newpassword')
        } else {
            setErrorOTP('ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')
        }
    }

    return (
        <form onSubmit={validateForm} className="flex flex-col justify-center">
            <div className="flex mb-4">
                <span className="text-xs not-italic font-normal leading-5 text-textfield">ไม่ได้รับรหัส OTP</span>
                <Link href="/" className="text-xs not-italic font-semibold leading-5 ml-1 text-primary">ส่งใหม่อีกครั้ง</Link>
            </div>
            <div className="flex items-start gap-4">
                <input
                    value={firstOTP}
                    onChange={e => {
                        setErrorFirstOTP(false)
                        const firstInputOTP = e.target.value
                        if (firstInputOTP === '' || /^\d$/.test(firstInputOTP)) {
                            setFirstOTP(firstInputOTP)
                            if (firstInputOTP !== '') {
                                secondInputRef.current.focus()
                            }
                        }
                    }}
                    type="text"
                    className={`text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid ${errorFirstOTP ? 'border-error' : 'border-textfield'} focus:outline-primary`}
                    style={{
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '56px',
                        color: errorFirstOTP ? '#e50914' : '#2E2E2E'
                    }}
                />
                <input
                    ref={secondInputRef}
                    value={secondtOTP}
                    onChange={e => {
                        setErrorSecondOTP(false)
                        const secondInputOTP = e.target.value
                        if (secondInputOTP === '' || /^\d$/.test(secondInputOTP)) {
                            setSecondOTP(secondInputOTP)
                            if (secondInputOTP !== '') {
                                thirdInputRef.current.focus()
                            }
                        }
                    }}
                    type="text"
                    className={`text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid ${errorSecondOTP ? 'border-error' : 'border-textfield'} focus:outline-primary`}
                    style={{
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '56px',
                        color: errorSecondOTP ? '#e50914' : '#2E2E2E',
                    }}
                />
                <input
                    ref={thirdInputRef}
                    value={thirdOTP}
                    onChange={e => {
                        setErrorThirdOTP(false)
                        const thirdInputOTP = e.target.value
                        if (thirdInputOTP === '' || /^\d$/.test(thirdInputOTP)) {
                            setThirdOTP(thirdInputOTP)
                            if (thirdInputOTP !== '') {
                                fourthInputRef.current.focus()
                            }
                        }
                    }}
                    type="text"
                    className={`text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid ${errorThirdOTP ? 'border-error' : 'border-textfield'} focus:outline-primary`}
                    style={{
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '56px',
                        color: errorThirdOTP ? '#e50914' : '#2E2E2E',
                    }}
                />
                <input
                    ref={fourthInputRef}
                    value={fourthOTP}
                    onChange={e => {
                        setErrorFourthOTP(false)
                        const fourthInputOTP = e.target.value
                        if (fourthInputOTP === '' || /^\d$/.test(fourthInputOTP)) {
                            setFourthOTP(fourthInputOTP)
                        }
                    }}
                    type="text"
                    className={`text-center w-[79px] h-[70px] shrink-0 border rounded-lg border-solid ${errorFourthOTP ? 'border-error' : 'border-textfield'} focus:outline-primary`}
                    style={{
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '56px',
                        color: errorFourthOTP ? '#e50914' : '#2E2E2E',
                    }}
                />
            </div>
            <button className="flex w-[364px] justify-center items-center gap-2.5 mt-4 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
                รีเซ็ทรหัสผ่าน
            </button>
            <span className="flex text-center items-center justify-center text-xs not-italic font-normal mt-4  leading-5 text-error" style={{ width: '100%', textAlign: 'center' }}>{errorOTP}</span>
        </form>
    )
}