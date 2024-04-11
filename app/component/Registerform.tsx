"use client"

import { useRouter } from "next/navigation";
import React, { MouseEvent, ChangeEvent, useState, FormEvent, useEffect } from "react";
import "react-datetime/css/react-datetime.css";

export default function Registerform() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  // const [showCalendar, setShowCalendar] = useState(false);
  const [username, setRegisUsername] = useState("");
  const [password, setRegisPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorRegisUsername, setErrorRegisUsername] = useState(false);
  const [errorRegisPassword, setErrorRegisPassword] = useState(false);
  const [errorRegisConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorGender, setErrorGender] = useState(false);
  const [errorRegister, setErrorRegister] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    console.log(date);
    
  },[date])

  const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const validateForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isDateValid = date.trim() !== "";
    const isRegisUsernameValid = username.length >= 4;
    const isRegisPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/.test(password);
    const isRegisPasswordMatch = confirmPassword === password;
    const isConfirmPasswordNotEmpty = confirmPassword.trim() !== "";
    const isGenderSelected = !!gender;

    setErrorEmail(!isEmailValid);
    setErrorDate(!isDateValid);
    setErrorRegisUsername(!isRegisUsernameValid);
    setErrorRegisPassword(!isRegisPasswordValid);
    setErrorConfirmPassword(
      !isConfirmPasswordNotEmpty || !isRegisPasswordMatch
    ); //if confirmPassword is empty or if it doesn't match regisPassword
    setErrorGender(!isGenderSelected);

    if (
      isEmailValid &&
      isDateValid &&
      isRegisUsernameValid &&
      isRegisPasswordValid &&
      isRegisPasswordMatch &&
      isConfirmPasswordNotEmpty &&
      isGenderSelected
    ) {
      const res = await fetchRegisterDB();
      //
      if(res){
        router.push("/");
      }
    } else {
      setErrorRegister("ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  async function fetchRegisterDB() {
    const data = {
      email,
      date,
      username,
      password,
      confirmPassword,
      gender,
    }
    try {
      const response = await fetch("https://catopia-backend-7sgneqnvla-as.a.run.app/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.message === "success") {
          // router.push("/");
          return true;
        }
        return false;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return (
    <form
      onSubmit={validateForm}
      className="flex flex-col justify-center items-start gap-2"
    >
      <h1 className="text-2xl not-italic font-semibold leading-8 text-black01 text-left mb-4">
        ลงทะเบียน
      </h1>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrorEmail(false);
        }}
        type="text"
        placeholder="อีเมล"
        className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorEmail ? "border-error" : "border-textfield"
          } focus:outline-primary`}
      />
      <input
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          setErrorDate(false);
        }}
        type={"text"}
        placeholder="วัน เดือน ปี เกิด"
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        className={`w-[364px] h-10 text-base text-black01 not-italic font-normal leading-6 pl-2 pr-2 border rounded ${errorDate ? "border-error" : "border-textfield"
          } focus:outline-primary`}
      />
      <input
        value={username}
        onChange={(e) => {
          setRegisUsername(e.target.value);
          setErrorRegisUsername(false);
        }}
        type="text"
        placeholder="ชื่อผู้ใช้งาน"
        className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisUsername ? "border-error" : "border-textfield"
          } focus:outline-primary`}
      />
      <div className="flex items-start relative">
        <input
          value={password}
          onChange={(e) => {
            setRegisPassword(e.target.value);
            setErrorRegisPassword(false);
          }}
          type={passwordVisible ? "text" : "password"}
          placeholder="รหัสผ่าน"
          className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisPassword ? "border-error" : "border-textfield"
            } focus:outline-primary`}
        />
        <button
          className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
          onClick={(e) => togglePasswordVisibility(e)}
        >
          <img
            src={passwordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"}
            alt="Password Visibility"
          />
        </button>
      </div>
      <div className="flex items-start relative">
        <input
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setErrorConfirmPassword(false);
          }}
          type={confirmPasswordVisible ? "text" : "password"}
          placeholder="ยืนยันรหัสผ่าน"
          className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisConfirmPassword ? "border-error" : "border-textfield"
            } focus:outline-primary`}
        />
        <button
          className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
          onClick={(e) => toggleConfirmPasswordVisibility(e)}
        >
          <img
            src={
              confirmPasswordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"
            }
            alt="Password Visibility"
          />
        </button>
      </div>
      <div className="text-left mt-2 mb-4">
        <span className={`${errorGender ? "text-error" : "text-black01"}`}>
          เพศ
        </span>
        <div className="flex items-center">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              handleGender(e);
              setErrorGender(false);
            }}
            className="ml-2 mr-2 mt-2"
          />
          <span className="rounded-full h-6 w-6 flex items-center justify-center  text-black01 mt-2">
            ชาย
          </span>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              handleGender(e);
              setErrorGender(false);
            }}
            className="ml-6 mr-2 mt-2"
          />
          <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">
            หญิง
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
      >
        ลงทะเบียน
      </button>
      <span
        className="flex text-center items-center justify-center text-xs not-italic font-normal mt-2 mb-2 leading-5 text-error"
        style={{ width: "100%", textAlign: "center" }}
      >
        {errorRegister}
      </span>
    </form>
  );
}