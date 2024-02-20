import Link from "next/link"


export default function Completeregister() {
    return (
        <div>
            <h1>Completeregister</h1>
            <Link href="/register/completeregister">
                <button
                    type="submit"
                    className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
                    กลับไปหน้าเข้าสู่ระบบ
                </button>
            </Link>
        </div>
    )
}