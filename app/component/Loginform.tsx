"use client";

import { useState } from "react"
import Link from "next/link";

export default function Loginform() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorLigon, setErrorLogin] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(false)
    const togglePasswordVisibility = (e) => {
        e.preventDefault()
        setPasswordVisible(!passwordVisible)
    }

    const validateForm = (e) => {
        e.preventDefault();

        const isUsernameValid = username.length > 8;
        const isPasswordValid = password.length > 8;

        setErrorUsername(!isUsernameValid);
        setErrorPassword(!isPasswordValid);

        setErrorLogin(isUsernameValid && isPasswordValid ? '' : 'ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
    };

    return (
        <form onSubmit={validateForm} className="flex flex-col items-end gap-2">
            <input
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                    setErrorUsername(false);
                }}
                type="text"
                placeholder="ชื่อผู้ใช้งาน"
                className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorUsername ? 'border-error' : 'border-textfield'
                    } focus:outline-primary`}
                style={{
                    color: errorUsername ? '#e50914' : '',
                }} />
            <div className="flex items-start relative">
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="รหัสผ่าน"
                    className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorPassword ? 'border-error' : 'border-textfield'}
                     focus:outline-primary`}
                    style={{
                        color: errorPassword ? '#e50914' : '',
                    }} />
                <button
                    className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
                    onClick={e => togglePasswordVisibility(e)}
                >
                    <img
                        src={passwordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"}
                        alt="Password Visibility" />
                </button>
            </div>
            <Link href="/repassword" className="text-xs not-italic font-semibold leading-5 mb-2 text-primary text-right">ลืมรหัสผ่าน?</Link>
            <Link href="/">
            <button type="submit" className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
                เข้าสู่ระบบ
            </button>
            </Link>
            <div className="flex items-center justify-center w-full mt-2 mb-4">
                <span className="text-xs not-italic font-normal leading-5 text-error">{errorLigon}</span>
            </div>
        </form>
    )
}