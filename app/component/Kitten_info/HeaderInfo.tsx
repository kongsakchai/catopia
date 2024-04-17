"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function HeaderInfo({ params }: any) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/Pofile-test.svg"
          width={88}
          height={88}
          alt="Cat profile"
          style={{ borderRadius: "88px" }}
        />
        <div className="flex gap-1">
          <h1 className="text-black01 text-center text-2xl not-italic font-bold leading-10">
            {params}
          </h1>
          <button
            type="button"
            onClick={() => router.push(`/main/profile/edit_kitten_info/${params}`)}
          >
            <Image src="/Edit.svg" width={24} height={24} alt="Edit" />
          </button>
        </div>
        <span className="text-textfield text-center text-base not-italic font-normal leading-6">
          วันเกิด : 21 กันยายน 2566
        </span>
      </div>
      <div className="flex w-full ">
        <div className="flex flex-col justify-center items-center w-[91px] border-r-2">
          <p className="text-textfield text-center text-xs not-italic font-normal leading-5">
            นำหนัก (กก.)
          </p>
          <h3 className="text-black01 text-center text-base not-italic font-bold leading-6">
            3.2
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center w-[91px] border-r-2">
          <p className="text-textfield text-center text-xs not-italic font-normal leading-5">
            เพศ
          </p>
          <h3 className="text-black01 text-center text-base not-italic font-bold leading-6">
            หญิง
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
