

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <input type="text" className="mb-2 p-2 border rounded w-4/5 h-8" />
        <input type="text" className="mb-2 p-2 border rounded w-4/5 h-8" />
        <small className="block mb-4 text-primary text-right mr-10">ลืมรหัสผ่าน?</small>
      </div>
      <button type="submit" className="flex mt-4 bg-primary text-white p-2 rounded-md w-4/5 h-8 items-center justify-center">
        <span>เข้าสู่ระบบ</span>
      </button>
      <div className="text-center mt-4">
        <span>หรือ</span>
        <div className="flex mt-2">
          <span>ยังไม่มีบัญชีใช่ไหม?</span>
          <p className="ml-2 text-primary">ลงทะเบียน</p>
        </div>
      </div>
    </div>

  )
}
