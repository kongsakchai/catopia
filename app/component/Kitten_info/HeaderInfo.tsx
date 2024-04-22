"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { format } from "date-fns";
import { th } from "date-fns/locale";

function formatDateThai(date: string) {
  const newDate = new Date(date)
  return format(newDate, "dd MMMM yyyy", { locale: th })
}

function HeaderInfo({ params }: any) {
  // console.log("params: ", params);

  const router = useRouter();

  const [kittenInfo, setKittenInfo] = useState<any>({})
  const [treatmentInfo, setTreatmentInfo] = useState<any>([])
  const [convertDate, setConvertDate] = useState<string>("")

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    try {
      const [responseInfo, responseTreatment] = await Promise.all([
        axios.get(process.env.NEXT_PUBLIC_API_URL + `/cat/${params}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }),
        axios.get(process.env.NEXT_PUBLIC_API_URL + `/treatment/${params}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
      ])

      setKittenInfo(responseInfo.data.data)
      setTreatmentInfo(responseTreatment.data.data)
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  console.log("kittenInfo: ", kittenInfo);
  console.log("treatmentInfo: ", treatmentInfo);

  useEffect(() => {
    if (kittenInfo.date) {
      setConvertDate(formatDateThai(kittenInfo.date))
    }
  }, [kittenInfo.date])

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={process.env.NEXT_PUBLIC_API_IMAGES + kittenInfo.profile}
          onError={() => "/Pofile-test.svg"}
          width={88}
          height={88}
          alt="Cat profile"
          style={{ borderRadius: "88px" }}
        />
        <div className="flex gap-1">
          <h1 className="text-black01 text-center text-2xl not-italic font-bold leading-10">
            {kittenInfo.name}
          </h1>
          <button
            type="button"
            onClick={() => router.push(`/main/profile/edit_kitten_info/${params}`)}
          >
            <Image src="/Edit.svg" width={24} height={24} alt="Edit" />
          </button>
        </div>
        <span className="text-textfield text-center text-base not-italic font-normal leading-6">
          วันเกิด : {convertDate}
        </span>
      </div>
      <div className="flex w-full ">
        <div className="flex flex-col justify-center items-center w-[91px] border-r-2">
          <p className="text-textfield text-center text-xs not-italic font-normal leading-5">
            นำหนัก (กก.)
          </p>
          <h3 className="text-black01 text-center text-base not-italic font-bold leading-6">
            {kittenInfo.weight}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center w-[91px] border-r-2">
          <p className="text-textfield text-center text-xs not-italic font-normal leading-5">
            เพศ
          </p>
          <h3 className="text-black01 text-center text-base not-italic font-bold leading-6">
            {kittenInfo.gender === "female" ? "หญิง" : "ชาย"}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center w-[91px] border-r-2">
          <p className="text-textfield text-center text-xs not-italic font-normal leading-5">
            อายุ (ปี)
          </p>
          <h3 className="text-black01 text-center text-base not-italic font-bold leading-6">
            2
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center w-[91px]">
          <p className="text-textfield text-center text-xs not-italic font-normal leading-5">
            พันธุ์แมว
          </p>
          <h3 className="text-black01 text-center text-base not-italic font-bold leading-6">
            สก็อตทิช
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;
