"use client";

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Registerform() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [regisUsername, setRegisUsername] = useState('')
    const [regisPassword, setRegisPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [gender, setGender] = useState()

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorDate, setErrorDate] = useState(false)
    const [errorRegisUsername, setErrorRegisUsername] = useState(false)
    const [errorRegisPassword, setErrorRegisPassword] = useState(false)
    const [errorRegisConfirmPassword, setErrorConfirmPassword] = useState(false)
    const [errorGender, setErrorGender] = useState(false)
    const [errorRegister, setErrorRegister] = useState('')

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

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const validateForm = (e) => {
        e.preventDefault()

        const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        const isDateValid = /^\d{2}\/\d{2}\/\d{4}$/.test(date)
        const isRegisUsernameValid = regisUsername.length >= 4;
        const isRegisPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/.test(regisPassword)
        const isRegisPasswordMatch = confirmPassword === regisPassword
        const isConfirmPasswordNotEmpty = confirmPassword.trim() !== ''
        const isGenderSelected = !!gender

        setErrorEmail(!isEmailValid)
        setErrorDate(!isDateValid)
        setErrorRegisUsername(!isRegisUsernameValid)
        setErrorRegisPassword(!isRegisPasswordValid)
        setErrorConfirmPassword(!isConfirmPasswordNotEmpty || !isRegisPasswordMatch)//if confirmPassword is empty or if it doesn't match regisPassword
        setErrorGender(!isGenderSelected)

        if (isEmailValid && isDateValid && isRegisUsernameValid && isRegisPasswordValid && isRegisPasswordMatch && isConfirmPasswordNotEmpty && isGenderSelected) {
            router.push('/')
        } else {
            setErrorRegister('ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')
        }
    }

    return (
        <form onSubmit={validateForm} className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-2xl not-italic font-semibold leading-8 text-black01 text-left mb-4">ลงทะเบียน</h1>
            <input
                value={email}
                onChange={e => {
                    setEmail(e.target.value)
                    setErrorEmail(false)
                }}
                type="text" placeholder="อีเมล"
                className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorEmail ? 'border-error' : 'border-textfield'} focus:outline-primary`} />
            <input
                value={date}
                onChange={e => {
                    setDate(e.target.value)
                    setErrorDate(false)
                }}
                type="text" placeholder="วัน เดือน ปี เกิด(DD/MM/YYYY)"
                className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorDate ? 'border-error' : 'border-textfield'} focus:outline-primary`} />
            <input
                value={regisUsername}
                onChange={e => {
                    setRegisUsername(e.target.value)
                    setErrorRegisUsername(false)
                }}
                type="text" placeholder="ชื่อผู้ใช้งาน"
                className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisUsername ? 'border-error' : 'border-textfield'} focus:outline-primary`} />
            <div className="flex items-start relative">
                <input
                    value={regisPassword}
                    onChange={e => {
                        setRegisPassword(e.target.value)
                        setErrorRegisPassword(false)
                    }}
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="รหัสผ่าน"
                    className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisPassword ? 'border-error' : 'border-textfield'} focus:outline-primary`} />
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
                    onChange={e => {
                        setConfirmPassword(e.target.value)
                        setErrorConfirmPassword(false)
                    }}
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="ยืนยันรหัสผ่าน"
                    className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisConfirmPassword ? 'border-error' : 'border-textfield'} focus:outline-primary`} />
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
                <span className={`${errorGender ? 'text-error' : 'text-black01'}`}>เพศ</span>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={e => {
                            handleGender(e)
                            setErrorGender(false)
                        }}
                        className="ml-2 mr-2 mt-2" />
                    <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">ชาย</span>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={e => {
                            handleGender(e)
                            setErrorGender(false)
                        }}
                        className="ml-6 mr-2 mt-2" />
                    <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">หญิง</span>
                </div>
            </div>
            <button type="submit" className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
                ลงทะเบียน
            </button>
            <span className="flex text-center items-center justify-center text-xs not-italic font-normal mt-2 mb-2 leading-5 text-error" style={{ width: '100%', textAlign: 'center' }}>{errorRegister}</span>
        </form>
    )
}