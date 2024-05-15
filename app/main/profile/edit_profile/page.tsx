"use client";

import PreLoader from "@/app/component/Loader/PreLoader";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from "react";

function EditProfile() {
  const router = useRouter();

  const [enablePreloader, setEnablePreloader] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string>("/Pofile-test.svg");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
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
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get("/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      // setUserInfo(response.data.data);
      setEmail(response.data.data.email);
      setDate(response.data.data.date);
      setRegisUsername(response.data.data.username);
      setGender(response.data.data.gender);
      setSelectedImage(process.env.NEXT_PUBLIC_API_IMAGES + response.data.data.profile);
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

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

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);
    setSelectedImage(file ? URL.createObjectURL(file) : "/Pofile-test.svg");
  };

  const validateForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEnablePreloader(true);

    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isDateValid = date.trim() !== "";
    const isRegisUsernameValid = username.length >= 4;
    const isRegisPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/.test(password) || password === "";

    const isRegisPasswordMatch = confirmPassword === password;
    const isGenderSelected = !!gender;

    setErrorEmail(!isEmailValid);
    setErrorDate(!isDateValid);
    setErrorRegisUsername(!isRegisUsernameValid);

    setErrorRegisPassword(!isRegisPasswordValid);

    setErrorConfirmPassword(!isRegisPasswordMatch);
    setErrorGender(!isGenderSelected);

    if (
      isEmailValid &&
      isDateValid &&
      isRegisUsernameValid &&
      isRegisPasswordValid &&
      isRegisPasswordMatch &&
      // isConfirmPasswordNotEmpty &&
      isGenderSelected
    ) {
      const profile = await postFile();
      // //console.log("postFile: ", profile);

      const resultPostUserInfo = await postUserInfo(profile);

      // //console.log("resultPostUserInfo: ", resultPostUserInfo);

      setEnablePreloader(false);

      if (resultPostUserInfo) {
        router.push("/main/profile");
      }
    } else {
      // //console.log({isDateValid, isRegisUsernameValid, isRegisPasswordValid, isRegisPasswordMatch, isGenderSelected});
      setEnablePreloader(false);
      setErrorRegister("ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  const postFile = async () => {
    if (file === undefined) return selectedImage.replace(process.env.NEXT_PUBLIC_API_IMAGES || "", "");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("/api/file/upload", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        const result = response.data;
        if (result.success) {
          return response.data.data.file_name;
        }
        return "";
      }
      throw new Error("Something went wrong");
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const postUserInfo = async (profile: string) => {
    const data = {
      profile,
      email,
      date,
      username,
      password,
      confirmPassword,
      gender,
    };
    // //console.log(profile);

    try {
      const response = await axios.put("/api/user", data, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });

      if (response.status === 200) {
        const result = response.data;

        if (result.success) {
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
  };

  const [inputType, setInputType] = useState("text"); // State to manage input type

  const handleTouchStart = () => {
    setInputType("date");
  };
  return (
    <div className="container flex justify-center">
      {enablePreloader && <PreLoader />}
      <div className="flex flex-col justify-center items-start gap-8 mt-20 w-[364px]">
        <button type="button" onClick={() => router.push("/main/profile")}>
          <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow-left" />
        </button>
        <div className="relative w-24 h-24">
          <Image
            src={selectedImage}
            onError={() => setSelectedImage("/Pofile-test.svg")}
            width={88}
            height={88}
            alt="Your profile"
            className="rounded-full w-[88px] h-[88px] object-cover overflow-hidden"
          />
          <label htmlFor="fileInput" className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer">
            <Image src="/Camera.svg" width={24} height={24} alt="Camera" />
            <input type="file" id="fileInput" onChange={handleFileInput} className="hidden" />
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
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorEmail ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setErrorDate(false);
            }}
            type={inputType}
            placeholder="วัน เดือน ปี เกิด"
            onTouchStart={handleTouchStart}
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
            placeholder={`ชื่อผู้ใช้งาน`}
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
              placeholder={`รหัสผ่าน`}
              className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisPassword ? "border-error" : "border-textfield"
                } focus:outline-primary`}
            />
            <button
              className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
              onClick={(e) => togglePasswordVisibility(e)}
            >
              <img src={passwordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"} alt="Password Visibility" />
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
              className={`items-start pr-10 py-0 flex w-[364px] h-10 text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisConfirmPassword ? "border-error" : "border-textfield"
                } focus:outline-primary`}
            />
            <button
              className="absolute right-0 top-0 h-full px-2 border-[none] rounded border-textfield focus:outline-primary flex items-center"
              onClick={(e) => toggleConfirmPasswordVisibility(e)}
            >
              <img src={confirmPasswordVisible ? "/EyeUnblocked.svg" : "/EyeBlocked.svg"} alt="Password Visibility" />
            </button>
          </div>
          <div className="text-left mt-2 mb-4">
            <span className={`${errorGender ? "text-error" : "text-black01"}`}>เพศ</span>
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
              <span className="rounded-full h-6 w-6 flex items-center justify-center  text-black01 mt-2">ชาย</span>
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
              <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">หญิง</span>
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

export default EditProfile;
