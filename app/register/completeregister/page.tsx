import Image from "next/image";
import Link from "next/link";
//mt-60
export default function Completeregister() {
  return (
    <div
      className="flex flex-col items-center h-screen gap-[30px]"
      style={{
        backgroundImage: "url(/Question-BG.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center buttom",
        height: "full",
        zIndex: 0,
      }}
    >
      <div className="animate-bounce mt-60">
        <Image
          src={"/success.svg"}
          height={123}
          width={123}
          alt="register success"
        />
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <h1 className="text-2xl text-black01 not-italic font-bold leading-10">
          ตอบคำถามครั้งแรกเสร็จสิ้น
        </h1>
        <p className="text-center text-base text-textfield not-italic font-normal leading-6">
          ขอบคุณสำหรับการตอบคำถามครั้งนี้
        </p>
        <Link href="/main/home">
          <button
            type="submit"
            className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
          >
            เริ่มต้นใช้งาน
          </button>
        </Link>
      </div>
    </div>
  );
}
