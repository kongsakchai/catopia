"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {
  useState,
  useEffect,
  MouseEvent,
  ChangeEvent,
  FormEvent,
} from "react";

function Editprofile() {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<string>("/Pofile-test.svg");
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

  const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedImage(file ? URL.createObjectURL(file) : "/Pofile-test.svg");
  }

  const validateForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    const isDateValid = date.trim() !== "";
    const isRegisUsernameValid = username.length >= 4;
    const isRegisPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/.test(
      password
    );
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
      //
      router.push("/");
    } else {
      setErrorRegister("ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <div className="container flex justify-center">
      <div className="flex flex-col justify-center items-start gap-8 mt-20 w-[364px]">
        <button type="button" onClick={() => router.push("/main/profile")}>
          <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow-left" />
        </button>
        <div className="relative w-24 h-24">
          <Image
            src={selectedImage}
            width={88}
            height={88}
            alt="Your profile"
            className="rounded-full max-w-[88px] max-h-[88px] object-cover"
          />
          <label
            htmlFor="fileInput"
            className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer"
          >
            <Image src="/Camera.svg" width={24} height={24} alt="Camera" />
            <input 
            type="file" 
            id="fileInput" 
            onChange={handleFileInput}
            className="hidden" />
          </label>
        </div>
        <form onSubmit={validateForm} className="flex flex-col justify-center items-start gap-2">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail(false);
            }}
            type="text"
            placeholder={`อีเมล`}
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${
              errorEmail ? "border-error" : "border-textfield"
            } focus:outline-primary`}
          />
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setErrorDate(false);
            }}
            type={"text"}
            placeholder={`วัน เดือน ปี เกิด`}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className={`w-[364px] h-10 text-base text-black01 not-italic font-normal leading-6 pl-2 pr-2 border rounded ${
              errorDate ? "border-error" : "border-textfield"
            } focus:outline-primary`}
          />
          <input
            value={username}
            onChange={(e) => {
              setRegisUsername(e.target.value);
              setErrorRegisUsername(false);
            }}
            type="text"
            placeholder={`ชื่อผู้ใช้งาน`}
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${
              errorRegisUsername ? "border-error" : "border-textfield"
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
              placeholder={`รหัสผ่าน`}
              className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${
                errorRegisPassword ? "border-error" : "border-textfield"
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
              placeholder={`ยืนยันรหัสผ่าน`}
              className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${
                errorRegisConfirmPassword ? "border-error" : "border-textfield"
              } focus:outline-primary`}
            />
            <button
              className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
              onClick={(e) => toggleConfirmPasswordVisibility(e)}
            >
              <img
                src={
                  confirmPasswordVisible
                    ? "/EyeUnblocked.svg"
                    : "/EyeBlocked.svg"
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
            ยืนยัน
          </button>
          <span
            className="flex text-center items-center justify-center text-xs not-italic font-normal mt-2 mb-2 leading-5 text-error"
            style={{ width: "100%", textAlign: "center" }}
          >
            {errorRegister}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Editprofile;
