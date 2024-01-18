"use client";

import { useState } from "react"

export default function Loginform() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="flex flex-col items-end gap-2;">
            <input type="text" placeholder="ชื่อผู้ใช้งาน" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <input type="text" placeholder="รหัสผ่าน" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <small className="block mb-4 text-primary text-right">ลืมรหัสผ่าน?</small>
        </form>
    )
}