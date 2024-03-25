import React from "react";

export default function Detailslearning({ currentCat }: any) {
  return (
    <div className="flex flex-col justify-center items-start max-w-[364px] overflow-auto border border-solid border-blue-500">
      <div className="flex justify-center gap-4 overflow-x-auto ">
        <button className="flex h-8 py-1 px-4 justify-center items-center rounded-2xl bg-primary">
          <span className="whitespace-nowrap text-white text-center text-base not-italic font-bold leading-6 border border-solid border-pink-500">
            ลักษณะ
          </span>
        </button>
        <button className="flex h-8 py-1 px-4 justify-center items-center rounded-2xl bg-line">
          <span className="whitespace-nowrap text-textfield text-center text-base not-italic font-bold leading-6 border border-solid border-pink-500">
            ภาพรวมของแมวบาหลี
          </span>
        </button>
        <button className="flex h-8 py-1 px-4 justify-center items-center rounded-2xl bg-line">
          <span className="whitespace-nowrap text-textfield text-center text-base not-italic font-bold leading-6 border border-solid border-pink-500">
            ลักษณะทางกายภาพ
          </span>
        </button>
        <button className="flex h-8 py-1 px-4 justify-center items-center rounded-2xl bg-line">
          <span className="whitespace-nowrap text-textfield text-center text-base not-italic font-bold leading-6 border border-solid border-pink-500">
            กรูมมิ่ง
          </span>
        </button>
        <button className="flex h-8  py-1 px-4 justify-center items-center rounded-2xl bg-line">
          <span className="whitespace-nowrap text-textfield text-center text-base not-italic font-bold leading-6 border border-solid border-pink-500">
            การเล่นกับเเมว
          </span>
        </button>
      </div>
    </div>
  );
}
