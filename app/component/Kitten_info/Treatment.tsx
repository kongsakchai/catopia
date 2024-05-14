"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { th } from "date-fns/locale";

function formatDateThai(date: string) {
  const newDate = new Date(date);
  return format(newDate, "dd MMMM yyyy", { locale: th });
}

function Treatment({ params }: any) {
  const router = useRouter();

  const [haveTreatment, setHaveTreatment] = useState(false);
  const [treatmentInfo, setTreatmentInfo] = useState<any>([]);

  useEffect(() => {
    getTreatment();
  }, []);

  const getTreatment = async () => {
    try {
      const response = await axios.get(`/api/treatment/${params}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.data.length > 0) {
        setHaveTreatment(true);
        setTreatmentInfo(response.data.data);
      }
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

  //console.log("treatmentInfo: ", treatmentInfo);

  return (
    <>
      {!haveTreatment && (
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <Image src="/Nohavekitten.svg" width={364} height={231} alt="No have kitten" />
            <h2 className="text-black01 text-center text-base not-italic font-bold leading-6">
              แมวคุณไม่เคยมีประวัติการรักษา
            </h2>
            <button
              type="button"
              onClick={() => router.push(`/main/profile/add_treatment/${params}`)}
              className="flex w-[362px] py-2 px-4 mt-8 justify-center items-center gap-[10px] rounded-lg border-[1.5px] border-solid border-primary"
            >
              <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
              <p className="text-primary text-center text-base not-italic font-normal leading-6">เพิ่มการรักษา</p>
            </button>
          </div>
        </div>
      )}
      {haveTreatment && (
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center gap-4">
            <Link href={`/main/profile/add_treatment/${params}`}>
              <button
                type="button"
                className="flex w-[362px] py-2 px-4 justify-center items-center gap-[10px] rounded-lg border-[1.5px] border-solid border-primary"
              >
                <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
                <p className="text-primary text-center text-base not-italic font-normal leading-6">เพิ่มการรักษา</p>
              </button>
            </Link>
            <div className="flex flex-col max-h-80 overflow-auto">
              {treatmentInfo.map((treatment: any, index: any) => (
                <div key={index} className="flex w-[364px] p-4 justify-between items-start">
                  <div className="flex flex-col items-start">
                    <span className="text-black01 text-center text-base not-italic font-normal leading-6">
                      {treatment.name}
                    </span>
                    <p className="text-textfield text-center text-xs not-italic font-normal leading-5">
                      วันที่รักษา : {formatDateThai(treatment.date)}
                    </p>
                  </div>
                  <Link href={`/main/profile/detail_treatment/${treatment.catID}/${treatment.id}`}>
                    <Image src="/aboutcat-btn.svg" width={24} height={24} alt="About treatment" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Treatment;
