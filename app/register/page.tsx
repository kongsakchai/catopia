import Link from "next/link"
import Registerform from "../component/Registerform"


export default function Register() {
    return (
        <div className="flex flex-col justify-center items-center mt-40">
            <Registerform />
            <button type="submit" className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid">
                <span className="text-base not-italic font-normal leading-6">ลงทะเบียน</span>
            </button>
            <div className="text-center mt-4">
                <span className="text-xs not-italic font-normal leading-5 text-textfield">หรือ</span>
                <div className="flex mt-4">
                    <span className="text-xs not-italic font-normal leading-5 text-textfield">มีบัญชีแล้วใช่ไหม?</span>
                    <Link href="/" className="text-xs not-italic font-semibold leading-5 ml-1 text-primary">เข้าสู่ระบบ</Link>
                </div>
            </div>
        </div>
    )
}