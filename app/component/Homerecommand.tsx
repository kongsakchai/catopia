import Image from "next/image"

export default function Homerecommand() {
    return (
        <div className="flex flex-col items-start gap-4 w-full border border-solid border-blue-500">
            <h1 className=" text-black01 text-base font-bold not-italic leading-6">แนะนำ</h1>
            <div className=" flex flex-col gap-2 w-full">
                <Image src="/suggest-home-bg.svg" width={364} height={131} alt="suggest-home" className=" rounded-lg"/>
                <h3 className=" text-black01 text-xs not-italic font-normal leading-5">ระแบบแนะนำแมวที่เหมาะสมกับคุณ</h3>
            </div>
        </div>
    )
}