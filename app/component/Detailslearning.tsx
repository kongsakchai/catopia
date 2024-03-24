import React from 'react'

export default function Detailslearning({ currentCat }: any) {
  return (
    <div className='flex flex-col justify-center items-start w-[364px] h-full border border-solid border-blue-500'>
      <div className='inline-flex items-start gap-4'>
        <button className='flex h-8 py-1 px-4 justify-center items-center rounded-2xl bg-primary'>
          <span className='text-white text-center text-base not-italic font-bold leading-6'>ลักษณะ</span>
        </button>
        <button className='flex h-8 py-1 px-4 justify-center items-center rounded-2xl bg-line'>
          <span className='text-textfield text-center text-base not-italic font-bold leading-6'>ภาพรวม</span>
        </button>
      </div>
    </div>
  )
}