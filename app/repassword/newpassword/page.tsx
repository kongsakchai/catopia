"use client";
import { useState } from "react"
import Link from "next/link"

export default function Newpassword() {

    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const togglePasswordVisibility = (e) => {
        e.preventDefault()
        setPasswordVisible(!passwordVisible)
    }

    const toggleConfirmPasswordVisibility = (e) => {
        e.preventDefault()
        setConfirmPasswordVisible(!confirmPasswordVisible)
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-52">
            <div className="flex flex-col items-start gap-2">
                <h1 className="text-2xl not-italic font-semibold leading-8 text-black01 mb-2">รีเซ็ทรหัสผ่าน</h1>
                <div className="flex items-start relative ">
                    <input
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="รหัสผ่าน" className="items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded border-textfield focus:outline-primary" />
                    <button
                        className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
                        onClick={e => togglePasswordVisibility(e)}
                    >
                        <img
                            src={passwordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"}
                            alt="Password Visibility" />
                    </button>
                </div>
                <div className="flex items-start relative mb-2">
                    <input
                        value={confirmNewPassword}
                        onChange={e => setConfirmNewPassword(e.target.value)}
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        placeholder="รหัสผ่าน" className="items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded border-textfield focus:outline-primary" />
                    <button
                        className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
                        onClick={e => toggleConfirmPasswordVisibility(e)}
                    >
                        <img
                            src={confirmPasswordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"}
                            alt="Password Visibility" />
                    </button>
                </div>
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