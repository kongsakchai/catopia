"use client";

import { useState } from "react"


export default function Loginform() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <form className="flex flex-col items-end gap-2;">
            <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="ชื่อผู้ใช้งาน"
                className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <div className="flex items-start mb-2 relative">
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="รหัสผ่าน"
                    className="items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded border-textfield focus:outline-primary"
                />
                <button
                    className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
                    onClick={togglePasswordVisibility}
                >
                    <img src="/Eyeblocked.svg" alt="Password Visibility" />
                </button>
            </div>
            <small className="block mb-4 text-primary text-right">ลืมรหัสผ่าน?</small>
        </form>
    )
}