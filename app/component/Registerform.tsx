export default function Registerform() {
    return (
        <form className="flex flex-col items-start gap-4;">
            <h1 className="text-2xl not-italic font-semibold leading-8 text-black01 text-left mb-4">ลงทะเบียน</h1>
            <input type="text" placeholder="อีเมล" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <input type="text" placeholder="วัน เดือน ปี เกิด" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <input type="text" placeholder="ชื่อผู้ใช้งาน" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <input type="text" placeholder="รหัสผ่าน" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <input type="text" placeholder="ยืนยันรหัสผ่าน" className="flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 mb-2 pl-2 border rounded border-textfield focus:outline-primary" />
            <div className="text-left mb-4">
                <span className=" text-black01">เพศ</span>
                <div className="flex items-center">
                    <input type="radio" id="male" name="gender" className="ml-2 mr-2 mt-2" />
                    <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">ชาย</span>
                    <input type="radio" id="female" name="gender" className="ml-6 mr-2 mt-2" />
                    <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">หญิง</span>
                </div>
            </div>
        </form>
    )
}