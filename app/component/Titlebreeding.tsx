import Image from "next/image";
import { DataContext } from "../main/breeding/page";
import { useContext } from "react";

export default function Titlebreeding() {

  const { setBreedingState } = useContext(DataContext);

  const handleBreedingState = (state) => {
    setBreedingState(state);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-40 h-[345px]">
      <Image
        src="/Catlogo.svg"
        width={194}
        height={181}
        alt="Logo"
        priority={true}
      />
      <h1 className="w-[364px] text-center text-2xl not-italic font-bold leading-10 text-black01">
        ระบบช่วยในการคาดคะเนสีของ ลูกแมวผ่านพ่อและแม่พันธุ์
      </h1>
      <p className="text-xs not-italic font-normal leading-5 text-textfield">
        ข้อมูลที่แสดงผลเป็นเป็นเพียงการคาดคะเนจากข้อมูลเท่านั้น
      </p>
      <button
      onClick={() => handleBreedingState("selectbreeding")}
        type="submit"
        className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
      >
        เริ่มทำการทดสอบ
      </button>
    </div>
  );
}
