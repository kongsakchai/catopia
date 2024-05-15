"use client";

import PreLoader from "@/app/component/Loader/PreLoader";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function EditTreatment({ params }: any) {
  //   //console.log("EditTreatment_catID : ", params.catID);
  //   //console.log("EditTreatment_id : ", params.id);

  const router = useRouter();

  const [enablePreloader, setEnablePreloader] = useState(false);

  const [kittenInfo, setKittenInfo] = useState<any>({});

  const [medicalRecord, setMedicalRecord] = useState<number>(1);
  const [date, setDate] = useState("");
  const [veterinarian, setVeterinarian] = useState("");
  const [hospital, setHospital] = useState("");
  const [detail, setDetail] = useState("");
  const [appointment, setAppointment] = useState("");
  const [appointmentDetail, setAppointmentDetail] = useState("");

  // const [errorMedicalRecord, setErrorMedicalRecord] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorVeterinarian, setErrorVeterinarian] = useState(false);
  const [errorHospital, setErrorHospital] = useState(false);
  const [errorDetail, setErrorDetail] = useState(false);
  const [errorSave, setErrorSave] = useState("");

  //   const [treatmentInfo, setTreatmentInfo] = useState<any>([]);

  useEffect(() => {
    getKittenInfo();
    getTreatment();
  }, []);

  const getKittenInfo = async () => {
    try {
      const res = await axios.get(`/api/cat/${params.catID}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
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
      appointmentDate: appointment,
      appointment: appointmentDetail
    };
    try {
      const res = await axios.put(`/api/treatment/${params.catID}/${params.id}`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (res.status === 200) {
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

  const getTreatment = async () => {
    try {
      const response = await axios.get(`/api/treatment/${params.catID}/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.data !== null) {
        // setTreatmentInfo(response.data.data)
        setMedicalRecord(response.data.data.treatmentTypeID);
        setDate(response.data.data.date);
        setVeterinarian(response.data.data.vet);
        setHospital(response.data.data.location);
        setDetail(response.data.data.detail);
        setAppointment(response.data.data.appointmentDate);
        setAppointmentDetail(response.data.data.appointment);
      }
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

  //   //console.log("kittenInfo: ", kittenInfo);
  //   //console.log("treatmentInfo: ", treatmentInfo);

  const validateForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEnablePreloader(true);

    // const isMedicalRecordValid = medicalRecord !== undefined;
    const isDateValid = date.trim() !== "";
    const isVeterinarianValid = veterinarian.trim() !== "";
    const isHospitalValid = hospital.trim() !== "";
    const isDetailValid = detail.trim() !== "";
    const resultPostTreatment = await postTreatment();
    console.log("resultPostTreatment: ", resultPostTreatment);
    

    setEnablePreloader(false);

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
      router.push(`/main/profile/kitten_info/${params.catID}`);
    } else {
      setEnablePreloader(false);
      setErrorSave("ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  const [inputTypeForDate, setInputTypeForDate] = useState("text"); // State to manage input type
  const [inputTypeForAppointment, setInputTypeForAppointment] = useState("text"); // State to manage input type

  const handleTouchStartDate = () => setInputTypeForDate("date");
  const handleBlurDate = () => setInputTypeForDate('text');

  const handleTouchStartApointment = () => setInputTypeForAppointment("datetime-local");
  const handleBlurAppointment = () => setInputTypeForAppointment("text");

  return (
    <div className="container flex justify-center">
      {enablePreloader && <PreLoader />}
      <div className="flex flex-col justify-center items-start gap-8 mt-20 w-[364px]">
        <button type="button" onClick={() => router.push(`/main/profile/kitten_info/${params.catID}`)}>
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
          <h1 className=" text-black01 text-center apply text-2xl not-italic font-bold leading-10 mt-4">ก๋วยจั๊บ</h1>
        </div>
        <form onSubmit={validateForm} className="flex flex-col justify-center items-start gap-2">
          <select
            value={medicalRecord}
            onChange={(e) => {
              setMedicalRecord(parseInt(e.target.value));
              // setErrorMedicalRecord(false);
            }}
            className={`flex w-[364px] h-10 flex-col items-start text-center text-base not-italic font-normal leading-6 pl-1 pt-1.5 border rounded border-textfield focus:outline-primary`}
          >
            <option className=" text-black01 text-base not-italic font-normal leading-6" value={1}>
              การฉีดวัคซีน
            </option>
            <option className=" text-black01 text-base not-italic font-normal leading-6" value={2}>
              การตรวจสุขภาพ
            </option>
            <option className=" text-black01 text-base not-italic font-normal leading-6" value={3}>
              อุบัติเหตุ
            </option>
            <option className=" text-black01 text-base not-italic font-normal leading-6" value={4}>
              อาการเจ็บป่วย
            </option>
          </select>
          <div className="relative">
            <input
              id="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setErrorDate(false);
              }}
              type={inputTypeForDate}
              onTouchStart={handleTouchStartDate}
              onBlur={handleBlurDate}
              className={`w-[364px] h-10 text-base text-black01 not-italic font-normal leading-6 pl-2 pr-2 border rounded ${errorDate ? "border-error" : "border-textfield"
                } focus:outline-primary`}
            />
            {date.trim() === "" && inputTypeForDate === "text" && (
              <label
                htmlFor="date"
                className={`absolute pointer-events-none left-2 top-2 text-base not-italic font-normal leading-6 text-textfield`}
              >
                วันที่ทำการรักษา
                <span className="text-error text-base not-italic font-normal leading-6">*</span>
              </label>
            )}
          </div>
          <div className="relative">
            <input
              id="veterinarian"
              value={veterinarian}
              onChange={(e) => {
                setVeterinarian(e.target.value);
                setErrorVeterinarian(false);
              }}
              type="text"
              className={`w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorVeterinarian ? "border-error" : "border-textfield"
                } focus:outline-primary`}
            />
            {veterinarian.trim() === "" && (
              <label
                htmlFor="veterinarian"
                className={`absolute pointer-events-none left-2 top-2 text-base not-italic font-normal leading-6 text-textfield`}
              >
                สัตวแพทย์ / เลขที่ใบอนุญาต
                <span className="text-error text-base not-italic font-normal leading-6">*</span>
              </label>
            )}
          </div>
          <div className=" relative">
            <input
              id="hospital"
              value={hospital}
              onChange={(e) => {
                setHospital(e.target.value);
                setErrorHospital(false);
              }}
              type="text"
              className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorHospital ? "border-error" : "border-textfield"
                } focus:outline-primary`}
            />
            {hospital.trim() === "" && (
              <label
                htmlFor="hospital"
                className={`absolute pointer-events-none left-2 top-2 text-base not-italic font-normal leading-6 text-textfield`}
              >
                สถานที่รักษา
                <span className="text-error text-base not-italic font-normal leading-6">*</span>
              </label>
            )}
          </div>
          <div className=" relative">
            <input
              id="detail"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
                setErrorDetail(false);
              }}
              type="text"
              className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorDetail ? "border-error" : "border-textfield"
                } focus:outline-primary`}
            />
            {detail.trim() === "" && (
              <label htmlFor="detail" className={`absolute pointer-events-none left-2 top-2 text-base not-italic font-normal leading-6 text-textfield`}>
                รายละเอียดเพิ่มเติม
                <span className="text-error text-base not-italic font-normal leading-6">*</span>
              </label>
            )}
          </div>
          <div className="relative">
            <input
              value={appointment}
              onChange={(e) => setAppointment(e.target.value)}
              type={inputTypeForAppointment}
              onTouchStart={handleTouchStartApointment}
              onBlur={handleBlurAppointment}
              className={`w-[364px] h-10 text-base text-black01 not-italic font-normal leading-6 pl-2 pr-2 border rounded border-textfield focus:outline-primary`}
            />
            {appointment.trim() === "" && inputTypeForAppointment === "text" && (
              <label
                htmlFor="appointment"
                className={`absolute pointer-events-none left-2 top-2 text-base not-italic font-normal leading-6 text-textfield`}
              >
                เวลานัดหมาย
              </label>
            )}
          </div>
          <input
            value={appointmentDetail}
            onChange={(e) => setAppointmentDetail(e.target.value)}
            type="text"
            placeholder="รายละเอียดการนัดหมาย"
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded border-textfield focus:outline-primary`}
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

export default EditTreatment;
