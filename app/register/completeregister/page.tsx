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
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <h1 className="text-2xl text-black01 not-italic font-bold leading-10">
          ลงทะเบียนเสร็จสิ้น
        </h1>
        <p className="text-center text-base text-textfield not-italic font-normal leading-6">
          ขอบคุณสำหรับการลงทะเบียนในครั้งนี้
        </p>
        <Link href="/main/home">
          <button
            type="submit"
            className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
          >
            กลับไปหน้าเข้าสู่ระบบ
          </button>
        </Link>
      </div>
    </div>
  );
}
