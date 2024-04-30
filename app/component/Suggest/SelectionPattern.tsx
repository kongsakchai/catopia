import { SuggestContext } from '@/app/main/suggest/page'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectionPattern() {

    const { setQuestionState }: any = useContext(SuggestContext)

    return (
        <div className='container flex flex-col items-start gap-4 pl-8 pr-8 mt-12'>
            <button onClick={() => setQuestionState("begin")}>
                <Image
                    src="/ArrowLeft.svg"
                    width={24}
                    height={24}
                    alt="ArrowLeft"
                />
            </button>
            <h1 className='text-black01 text-2xl not-italic font-bold leading-10'>เลือกรูปแบบการดสอบ</h1>
            <h3 className='text-textfield text-xs not-italic font-normal leading-5'>ข้อมูลที่แสดงผลเป็นเป็นเพียงการคาดคะเนจากข้อมูลเท่านั้น</h3>
            <button
                type='button'
                onClick={() => setQuestionState("selectYourKitten")}
                className='flex w-full p-4 items-start justify-between rounded-lg border-[2px] border-solid border-black01'>
                <p className='text-center text-black01 text-base not-italic font-normal leading-6'>รูปแบบที่ 1 (อ้างอิงจากข้อมูลของแมวผู้ใช้)</p>
                <Image
                    src="/ArrowRight.svg"
                    width={24}
                    height={24}
                    alt="ArrowRight"
                />
            </button>
            <button
                type='button'
                onClick={() => setQuestionState("ansQuesForProple")}
                className='flex w-full p-4 items-start justify-between rounded-lg border-[2px] border-solid border-black01'>
                <p className='text-center text-black01 text-base not-italic font-normal leading-6'>รูปแบบที่ 2 (อ้างอิงจากข้อมูลของผู้ใช้)</p>
                <Image
                    src="/ArrowRight.svg"
                    width={24}
                    height={24}
                    alt="ArrowRight"
                />
            </button>
        </div>
    )
}

export default SelectionPattern