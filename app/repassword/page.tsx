"use client";

import PreLoader from "../component/Loader/PreLoader";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Forgotpassword() {
  const router = useRouter();

  const [enablePreloader, setEnablePreloader] = useState(false);

  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorSentConfirm, setErrorSentConfirm] = useState("");

  const validateForm = async (e: any) => {
    e.preventDefault();

    setEnablePreloader(true);

    const isUsernameValid = username.length >= 4;
    const isUsernameExist = await sendUsernameForOTP();

    setEnablePreloader(false);

    setErrorUsername(!isUsernameValid);

    if (isUsernameValid && isUsernameExist) {
      router.push("/repassword/checkOTP");
    } else {
      setEnablePreloader(false);
      setErrorSentConfirm("ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  const sendUsernameForOTP = async () => {
    const data = { username };
    try {
      const res = await axios.post("/api/forget-password", data);

      if (res.status === 200) {
        if (res.data.success) {
          localStorage.setItem("keyotp", res.data.data.code);
          return true;
        }
        return false;
      }
    } catch (error) {
      //console.log("Error: ", error);
      return false;
    }
  };

  return (
    <div className="flex flex-col items-center mt-40  ">
      {enablePreloader && <PreLoader />}
      <div className="mb-8">
        <Image src="../Catlogo.svg" width={194} height={181} alt="Logo" priority={true} />
      </div>
      <form onSubmit={validateForm} className="flex flex-col items-start gap-4">
        <h1 className="text-2xl not-italic font-semibold leading-8 text-black01">ลืมรหัสผ่าน</h1>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrorUsername(false);
          }}
          type="text"
          placeholder="ชื่อผู้ใช้งาน"
          className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${
            errorUsername ? "border-error" : "border-textfield"
          } focus:outline-primary`}
          style={{
            color: errorUsername ? "#e50914" : "",
          }}
        />
        <button
          type="submit"
          className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
        >
          ส่งรหัสยืนยัน
        </button>
        <span
          className="flex text-center items-center justify-center text-xs not-italic font-normal  mb-2 leading-5 text-error"
          style={{ width: "100%", textAlign: "center" }}
        >
          {errorSentConfirm}
        </span>
      </form>
      <div className="flex items-center">
        <div className="flex-1 w-[320px] h-[0.001px] shrink-0 border border-line"></div>
        <span className="text-xs not-italic font-normal leading-5 text-textfield px-2">หรือ</span>
        <div className="flex-1 border border-line"></div>
      </div>
      <div className="flex mt-4">
        <span className="text-xs not-italic font-normal leading-5 text-textfield">มีบัญชีแล้วใช่ไหม?</span>
        <Link href="/" className="text-xs not-italic font-semibold leading-5 ml-1 text-primary">
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
}
