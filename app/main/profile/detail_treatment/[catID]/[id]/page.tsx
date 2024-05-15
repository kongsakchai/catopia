"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { th } from "date-fns/locale";

function formatDateThai(date: string) {
  if (!date) return "";
  const newDate = new Date(date);
  return format(newDate, "dd MMMM yyyy", { locale: th });
}

function DetailTreatment({ params }: any) {
  //console.log("params: ", params);

  const router = useRouter();

  const [treatmentInfo, setTreatmentInfo] = useState<any>([]);

  useEffect(() => {
    getTreatment();
  }, []);

  const getTreatment = async () => {
    try {
      const response = await axios.get(`/api/treatment/${params.catID}/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.data !== null) {
        setTreatmentInfo(response.data.data);
      }
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

  console.log("treatmentInfo: ", treatmentInfo);

  return (
    <div className="container mx-auto flex flex-col items-start gap-6 mt-12 pl-8 pr-8">
      <button type="button" onClick={() => router.push(`/main/profile/kitten_info/${params.catID}`)}>
        <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow-left" />
      </button>
      <h1 className="text-center text-black01 text-2xl not-italic font-bold leading-10">ประวัติการรักษา</h1>
      <div className="container mx-auto flex flex-col items-start gap-4">
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">ประเภทการรักษา</p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            {treatmentInfo.name}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">วันที่ทำการรักษา</p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            {formatDateThai(treatmentInfo.date)}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">
            สัตวแพทย์ / เลขที่ใบอนุญาต
          </p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            {treatmentInfo.vet}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">สถานที่รักษา</p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            {treatmentInfo.location}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">รายละเอียดเพิ่มเติม</p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            {treatmentInfo.detail}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => router.push(`/main/profile/edit_treatment/${params.catID}/${params.id}`)}
        className="flex w-full px-6 py-2 justify-center items-center rounded-lg border-[1.5px] border-solid border-primary"
      >
        <p className="text-center text-primary text-base not-italic font-normal leading-6">แก้ไขข้อมูล</p>
      </button>
    </div>
  );
}

export default DetailTreatment;
