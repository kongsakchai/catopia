
import { SuggestContext } from '@/app/store/context'
import Image from 'next/image'
import React, { useContext } from 'react'

function Begin() {

    const { setQuestionState }: any = useContext(SuggestContext)

    return (
        <div className=' container mx-auto flex flex-col gap-2 justify-center items-center mt-40'>
            <Image
                src="/Catlogo.svg"
                width={194}
                height={181}
                alt="Logo"
                priority={true}
            />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center text-black01 text-2xl not-italic font-bold leading-10'>ระบบช่วยในการคาดคะเนพันธุ์แมว</h1>
                <h1 className='text-center text-black01 text-2xl not-italic font-bold leading-10'>ที่เหมาะสมกับคุณ</h1>
            </div>
            <p className='text-center text-textfield text-xs not-italic font-normal leading-5'>ข้อมูลที่แสดงผลเป็นเป็นเพียงการคาดคะเนจากข้อมูลเท่านั้น</p>
            <button
                onClick={() => setQuestionState("selectionPattern")}
                type="submit"
                className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
            >
                เริ่มทำการทดสอบ
            </button>
        </div>
    )
}

export default Begin