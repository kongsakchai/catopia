import Link from "next/link";
import Registerform from "../component/Registerform";
import PreLoader from "../component/Loader/PreLoader";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <PreLoader />
      <Registerform />
      <div className="text-center">
        <div className="flex items-center">
          <div className="flex-1 w-[320px] h-[0.001px] shrink-0 border border-line"></div>
          <span className="text-xs not-italic font-normal leading-5 text-textfield px-2">
            หรือ
          </span>
          <div className="flex-1 border border-line"></div>
        </div>
      </div>
      <div className="flex mt-4">
        <span className="text-xs not-italic font-normal leading-5 text-textfield">
          มีบัญชีแล้วใช่ไหม?
        </span>
        <Link
          href="/"
          className="text-xs not-italic font-semibold leading-5 ml-1 text-primary"
        >
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
}
