import Catslist from "@/app/component/Profile/Catslist";
import Yourprofile from "@/app/component/Profile/Yourprofile";
import Link from "next/link";

export default function Profile() {
    return (
        <div
            className="flex flex-col items-center w-screen h-screen"
            style={{
                backgroundImage: "url('/Moon.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "cover",
                zIndex: 0,
            }}
        >
            <div className="flex justify-end w-[364px] right-0 mt-12">
                <Link href="/">
                    <p className="text-error text-base not-italic font-normal leading-6">Logout</p>
                </Link>
            </div>
            <div className="flex flex-col w-[364px] justify-center items-center gap-8 mt-2">
                <Yourprofile />
                <Catslist />
            </div>
        </div>
    )
}