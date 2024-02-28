import Image from "next/image"

export default function Homeheader() {
    return (
        <div className="flex flex-col justify-center items-start gap-2 w-full border border-solid border-blue-500">
            <div className="flex w-full justify-between items-center">
                <h1 className="shrink-0 text-2xl text-primary not-italic font-semibold leading-8">เลือกแมวที่คุณต้องการ</h1>
                <button className="flex justify-center items-center shrink-0">
                    <Image src="/Notificationr.svg" width={24} height={24} alt="Notification-btn" />
                </button>
            </div>
            <span className="text-base text-textfield not-italic font-normal leading-6">3 พฤศจิกายน 2566</span>
            <div className="flex items-start relative w-full border rounded border-textfield">
                <button className="absolute left-0 top-0 h-full mx-3 border-[none] rounded border-textfield focus:outline-primary flex items-center">
                    <Image src="/Search.svg" width={18} height={18} alt="Search-btn" />
                </button>
                <input
                    type="text"
                    placeholder="ค้นหา"
                    className={`flex w-full h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 ml-8 focus:outline-none border-[none]`}
                />
            </div>
        </div>
    )
}