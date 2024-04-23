"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function DetailTreatment({ params }: any) {
  const router = useRouter();

  return (
    <div className="container mx-auto flex flex-col items-start gap-6 mt-12 pl-8 pr-8">
      <button type="button" onClick={() => router.push(`/main/profile/`)}>
        <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow-left" />
      </button>
      <h1 className="text-center text-black01 text-2xl not-italic font-bold leading-10">
        ประวัติการรักษา
      </h1>
      <div className="container mx-auto flex flex-col items-start gap-4">
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">
            ประเภทการรักษา
          </p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            ฉีดวัคซีนป้องกันโรคระบาด
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">
            วันที่ทำการรักษา
          </p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            24 กันยายน 2567
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">
            สัตวแพทย์ / เลขที่ใบอนุญาต
          </p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            นายศักดิ์ชัย เปาอินทร์
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">
            สถานที่รักษา
          </p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            โรงพยาบาลกรุงเทพ
          </span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-center text-textfield text-xs not-italic font-normal leading-5">
            รายละเอียดเพิ่มเติม
          </p>
          <span className="text-center text-black01 text-base not-italic font-normal leading-6">
            เป็นการฉีดยากันโรคระบาด ที่ไม่แพง เพราะไม่ใช่สองบาท
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => router.push(`/main/profile/`)}
        className="flex w-full px-6 py-2 justify-center items-center rounded-lg border-[1.5px] border-solid border-primary"
      >
        <p className="text-center text-primary text-base not-italic font-normal leading-6">
          แก้ไขข้อมูล
        </p>
      </button>
    </div>
  );
}

export default DetailTreatment;
