
import Image from "next/image"
import Link from "next/link"


export default function Nav() {
    return (
        <div className=" flex w-full h-[104px] items-center justify-center shrink-0 border border-solid border-[red]">
            <div className="flex w-[364px] justify-between gap-14 border border-solid border-[red]">
                <Link href="/main">
                    <div className="flex flex-col items-center justify-center">
                        <Image src={"/Home.svg"} width={28} height={28} alt="Home page" />
                        <span className="text-xs not-italic font-normal leading-5 text-center mt-1 text-textfield hover:text-primary">หน้าหลัก</span>
                    </div>
                </Link>
                <Link href="/main/breeding">
                    <div className="flex flex-col items-center justify-center">
                        <Image src={"/Breeding.svg"} width={28} height={28} alt="Breeding page" />
                        <span className="text-xs not-italic font-normal leading-5 text-center mt-1 text-textfield">ผสมพันธุ์</span>
                    </div>
                </Link>
                <Link href="/main/suggest">
                    <div className="flex flex-col items-center justify-center">
                        <Image src={"/Suggest.svg"} width={28} height={28} alt="Suggest page" />
                        <span className="text-xs not-italic font-normal leading-5 text-center mt-1 text-textfield">แนะนำ</span>
                    </div>
                </Link>
                <Link href="/main/profile">
                    <div className="flex flex-col items-center justify-center">
                        <Image src={"/Profile.svg"} width={28} height={28} alt="Profile page" />
                        <span className="text-xs not-italic font-normal leading-5 text-center mt-1 text-textfield">ประวัติ</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}