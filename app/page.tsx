

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <input type="text" className="mb-2 p-2 border rounded w-4/5 h-8" />
        <input type="text" className="mb-2 p-2 border rounded w-4/5 h-8" />
        <small className="block mb-4 self-end">ลืมรหัสผ่าน?</small>
      </div>
      <button type="submit" className="mt-4 bg-primary text-white p-2 rounded w-4/5 h-8">
        <span className="">เข้าสู่ระบบ</span>
      </button>
      <div className="text-center mt-4">
        <span>หรือ</span>
        <div className="flex mt-2">
          <span>ยังไม่มีบัญชีใช่ไหม?</span>
          <p className="ml-2 text-blue-500">ลงทะเบียน</p>
        </div>
      </div>
    </div>

  )
}
