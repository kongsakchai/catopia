import Image from "next/image";

export default function Homerefer() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full ">
      <button
        type="button"
        onClick={() => {
          window.location.reload();
        }}
        className="flex w-[158px] px-4 py-2 justify-center items-center gap-[10px] rounded-lg border-[1.5px] border-solid border-primary"
      >
        <Image src="/Refresh-btn.svg" width={24} height={24} alt="Refresh" />
        <h1 className=" text-nowrap text-primary text-base not-italic font-normal leading-6">
          ดูพันธุ์แมวอื่นๆ
        </h1>
      </button>
    </div>
  );
}
