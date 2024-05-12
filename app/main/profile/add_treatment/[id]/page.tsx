"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function AddTreatment({ params }: any) {
  // //console.log("AddTreatment : ", params.id);

  const router = useRouter();

  const [kittenInfo, setKittenInfo] = useState<any>({});

  const [medicalRecord, setMedicalRecord] = useState<number>(1);
  const [date, setDate] = useState("");
  const [veterinarian, setVeterinarian] = useState("");
  const [hospital, setHospital] = useState("");
  const [detail, setDetail] = useState("");

  // const [errorMedicalRecord, setErrorMedicalRecord] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorVeterinarian, setErrorVeterinarian] = useState(false);
  const [errorHospital, setErrorHospital] = useState(false);
  const [errorDetail, setErrorDetail] = useState(false);
  const [errorSave, setErrorSave] = useState("");

  useEffect(() => {
    getKittenInfo();
  }, []);

  const getKittenInfo = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + `/cat/${params.id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.status === 200) {
        if (res.data.success) {
          setKittenInfo(res.data.data);
        }
      }
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

  const postTreatment = async () => {
    const data = {
      treatmentTypeID: medicalRecord,
      date: date,
      vet: veterinarian,
      location: hospital,
      detail: detail,
    };
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + `/treatment/${params.id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 201) {
        const reslt = res.data;
        if (reslt.success) {
          return true;
        }
        return false;
      }
    } catch (error) {
      //console.log("Error: ", error);
      return false;
    }
  };

  //console.log("kittenInfo: ", kittenInfo);

  const validateForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const isMedicalRecordValid = medicalRecord !== undefined;
    const isDateValid = date.trim() !== "";
    const isVeterinarianValid = veterinarian.trim() !== "";
    const isHospitalValid = hospital.trim() !== "";
    const isDetailValid = detail.trim() !== "";
    const resultPostTreatment = await postTreatment();

    // setErrorMedicalRecord(!isMedicalRecordValid);
    setErrorDate(!isDateValid);
    setErrorVeterinarian(!isVeterinarianValid);
    setErrorHospital(!isHospitalValid);
    setErrorDetail(!isDetailValid);

    if (
      // isMedicalRecordValid &&
      isDateValid &&
      isVeterinarianValid &&
      isHospitalValid &&
      isDetailValid &&
      resultPostTreatment
    ) {
      router.push(`/main/profile/kitten_info/${params.id}`);
    } else {
      setErrorSave("ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <div className="container flex justify-center">
      <div className="flex flex-col justify-center items-start gap-8 mt-20 w-[364px]">
        <button
          type="button"
          onClick={() => router.push(`/main/profile/kitten_info/${params.id}`)}
        >
          <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow-left" />
        </button>
        <div className="flex flex-col gap-4">
          <Image
            src={process.env.NEXT_PUBLIC_API_IMAGES + kittenInfo.profile}
            onError={() => "/Pofile-test.svg"}
            width={88}
            height={88}
            alt="Your profile"
            className="rounded-full max-w-[88px] max-h-[88px] object-cover"
          />
          <h1 className=" text-black01 text-center apply text-2xl not-italic font-bold leading-10 mt-4">
            ก๋วยจั๊บ
          </h1>
        </div>
        <form
          onSubmit={validateForm}
          className="flex flex-col justify-center items-start gap-2"
        >
          <select
            value={medicalRecord}
            onChange={(e) => {
              setMedicalRecord(parseInt(e.target.value));
              // setErrorMedicalRecord(false);
            }}
            className={`flex w-[364px] h-10 flex-col items-start text-center text-base not-italic font-normal leading-6 pl-1 pt-1.5 border rounded border-textfield focus:outline-primary`}
          >
            <option
              className=" text-black01 text-base not-italic font-normal leading-6"
              value={1}
            >
              การฉีดวัคซีน
            </option>
            <option
              className=" text-black01 text-base not-italic font-normal leading-6"
              value={2}
            >
              การตรวจสุขภาพ
            </option>
            <option
              className=" text-black01 text-base not-italic font-normal leading-6"
              value={3}
            >
              อุบัติเหตุ
            </option>
            <option
              className=" text-black01 text-base not-italic font-normal leading-6"
              value={4}
            >
              อาการเจ็บป่วย
            </option>
          </select>

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
            className={`w-[364px] h-10 text-base text-black01 not-italic font-normal leading-6 pl-2 pr-2 border rounded ${errorDate ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <input
            value={veterinarian}
            onChange={(e) => {
              setVeterinarian(e.target.value);
              setErrorVeterinarian(false);
            }}
            type="text"
            placeholder={`สัตวแพทย์ / เลขที่ใบอนุญาต`}
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorVeterinarian ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <input
            value={hospital}
            onChange={(e) => {
              setHospital(e.target.value);
              setErrorHospital(false);
            }}
            type="text"
            placeholder={`สถานที่รักษา`}
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorHospital ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <input
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
              setErrorDetail(false);
            }}
            type="text"
            placeholder={`รายละเอียดเพิ่มเติม`}
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorDetail ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <button
            type="submit"
            className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 mt-3 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
          >
            ยืนยัน
          </button>
          <span
            className="flex text-center items-center justify-center text-xs not-italic font-normal mt-2 mb-2 leading-5 text-error"
            style={{ width: "100%", textAlign: "center" }}
          >
            {errorSave}
          </span>
        </form>
      </div>
    </div>
  );
}

export default AddTreatment;
