"use client";
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image";

export default function Newpassword() {
    const router = useRouter()

    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [errorNewPassword, setErrorNewPassword] = useState(false)
    const [errorConfirmNewPassword, setErrorConfirmNewPassword] = useState(false)
    const [errorPassword, setErrorPassword] = useState('')

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

    const validateForm = (e) => {
        e.preventDefault()

        const isNewPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/.test(newPassword)
        const isNewPasswordValidMatch = confirmNewPassword === newPassword
        const isConfirmNewPasswordNotEmpty = confirmNewPassword.trim() !== ''

        setErrorNewPassword(!isNewPasswordValid)
        setErrorConfirmNewPassword(!isConfirmNewPasswordNotEmpty || !isNewPasswordValidMatch)

        if (isNewPasswordValid && isNewPasswordValidMatch && isConfirmNewPasswordNotEmpty) {
            router.push('/')
        } else {
            setErrorPassword('ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-52">
            <Image src="../Catlogo.svg" width={194} height={181} alt="Logo" priority={true} />
            <form onSubmit={validateForm} className="flex flex-col items-start gap-2">
                <h1 className="text-2xl not-italic font-semibold leading-8 text-black01 mb-2">รีเซ็ทรหัสผ่าน</h1>
                <div className="flex items-start relative ">
                    <input
                        value={newPassword}
                        onChange={e => {
                            setNewPassword(e.target.value)
                            setErrorNewPassword(false)
                        }}
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="รหัสผ่าน"
                        className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorNewPassword ? 'border-error' : 'border-textfield'} focus:outline-primary`} />
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
                        onChange={e => {
                            setConfirmNewPassword(e.target.value)
                            setErrorConfirmNewPassword(false)
                        }}
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        placeholder="ยืนยันรหัสผ่าน"
                        className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorConfirmNewPassword ? 'border-error' : 'border-textfield'} focus:outline-primary`} />
                    <button
                        className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
                        onClick={e => toggleConfirmPasswordVisibility(e)}
                    >
                        <img
                            src={confirmPasswordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"}
                            alt="Password Visibility" />
                    </button>
                </div>
                {/* <Link href="/repassword/checkOTP"> */}
                <button className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
                    ส่งรหัสยืนยัน
                </button>
                {/* </Link> */}
            </form>
            <div className="text-center">
                <div className="flex items-center justify-center w-full mt-2 mb-4">
                    <span className="text-xs not-italic font-normal leading-5 text-error">{errorPassword}</span>
                </div>
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