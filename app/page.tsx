import Link from "next/link"
import Loginform from "./component/Loginform"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Loginform />
      <Link href="/">
        <div className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
          เข้าสู่ระบบ
        </div>
      </Link>
      <div className="text-center mt-4">
        <span className="text-xs not-italic font-normal leading-5 text-textfield">หรือ</span>
        <div className="flex mt-4">
          <span className="text-xs not-italic font-normal leading-5 text-textfield">ยังไม่มีบัญชีใช่ไหม?</span>
          <Link href="/register" className="text-xs not-italic font-semibold leading-5 ml-1 text-primary">ลงทะเบียน</Link>
        </div>
      </div>
    </div>
  )
}


