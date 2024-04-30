import { SuggestContext } from '@/app/main/suggest/page'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectYourKitten() {

    const { setQuestionState }: any = useContext(SuggestContext)

    return (
        <div className=' container mx-auto flex flex-col items-start gap-4 pl-8 pr-8 mt-12 border border-solid border-red-800'>
            <button onClick={() => setQuestionState("selectionPattern")}>
                <Image
                    src="/ArrowLeft.svg"
                    width={24}
                    height={24}
                    alt="ArrowLeft"
                />
            </button>
            <div className='w-full border'>
                <span className='  text-black01 text-2xl not-italic font-bold leading-10'>เลือกแมวที่คุณต้องการให้</span>
                <span className='  text-primary text-2xl not-italic font-bold leading-10'>คาดคะเนพันธุ์แมว</span>
            </div>
        </div>
    )
}

export default SelectYourKitten