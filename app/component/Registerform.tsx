"use client";
import Link from "next/link";
import { useState } from "react"

export default function Registerform() {

    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [regisUsername, setRegisUsername] = useState('')
    const [regisPassword, setRegisPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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
        <form className="flex flex-col items-start gap-4;">
            <h1 className="text-2xl not-italic font-semibold leading-8 text-black01 text-left mb-4">ลงทะเบียน</h1>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text" placeholder="อีเมล" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <input
                value={date}
                onChange={e => setDate(e.target.value)}
                type="text" placeholder="วัน เดือน ปี เกิด" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <input
                value={regisUsername}
                onChange={e => setRegisUsername(e.target.value)}
                type="text" placeholder="ชื่อผู้ใช้งาน" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <div className="flex items-start relative mb-2">
                <input
                    value={regisPassword}
                    onChange={e => setRegisPassword(e.target.value)}
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
            <div className="flex items-start relative">
                <input
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="ยืนยันรหัสผ่าน" className="items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded border-textfield focus:outline-primary" />
                <button
                    className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
                    onClick={e => toggleConfirmPasswordVisibility(e)}
                >
                    <img
                        src={confirmPasswordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"}
                        alt="Password Visibility" />
                </button>
            </div>
            <div className="text-left mt-2 mb-4">
                <span className=" text-black01">เพศ</span>
                <div className="flex items-center">
                    <input type="radio" id="male" name="gender" className="ml-2 mr-2 mt-2" />
                    <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">ชาย</span>
                    <input type="radio" id="female" name="gender" className="ml-6 mr-2 mt-2" />
                    <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">หญิง</span>
                </div>
            </div>
            <Link href="/register/getquestion">
                <button type="submit" className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
                    ลงทะเบียน
                </button>
            </Link>
        </form>
    )
}