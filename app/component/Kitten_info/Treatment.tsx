'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Treatment() {

  const [haveTreatment, setHaveTreatment] = useState(true)

  const mockupTreatment = [
    {
      id: 1,
      name: "Treatment 1",
      last_update: "24 มกราคม 2567",
    },
    {
      id: 2,
      name: "Treatment 2",
      last_update: "20 มกราคม 2567",
    },
    {
      id: 3,
      name: "Treatment 3",
      last_update: "22 มกราคม 2567",
    },
    {
      id: 4,
      name: "Treatment 4",
      last_update: "26 มกราคม 2567",
    },
    {
      id: 5,
      name: "Treatment 5",
      last_update: "29 มกราคม 2567",
    },
  ]

  return (
    <>
      {!haveTreatment && (
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>
            <Image
              src="/Nohavekitten.svg"
              width={364}
              height={231}
              alt="No have kitten"
            />
            <h2 className="text-black01 text-center text-base not-italic font-bold leading-6">
              แมวคุณไม่เคยมีประวัติการรักษา
            </h2>
            <Link href="/main/profile">
              <button
                type='button'
                className='flex w-[362px] py-2 px-4 mt-8 justify-center items-center gap-[10px] rounded-lg border-[1.5px] border-solid border-primary'>
                <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
                <p className='text-primary text-center text-base not-italic font-normal leading-6'>เพิ่มการรักษา</p>
              </button>
            </Link>
          </div>
        </div>
      )}
      {haveTreatment && (
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <Link href="/main/profile">
              <button
                type='button'
                className='flex w-[362px] py-2 px-4 justify-center items-center gap-[10px] rounded-lg border-[1.5px] border-solid border-primary'>
                <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
                <p className='text-primary text-center text-base not-italic font-normal leading-6'>เพิ่มการรักษา</p>
              </button>
            </Link>
            <div className='flex flex-col max-h-80 overflow-auto'>
              {mockupTreatment.map((treatment) => (
                <div key={treatment.id} className='flex w-[364px] p-4 justify-between items-start'>
                  <div className='flex flex-col items-start'>
                    <span className='text-black01 text-center text-base not-italic font-normal leading-6'>{treatment.name}</span>
                    <p className='text-textfield text-center text-xs not-italic font-normal leading-5'>วันที่รักษา : {treatment.last_update}</p>
                  </div>
                  <Link href={`/main/profile`}>
                    <Image
                      src="/aboutcat-btn.svg"
                      width={24}
                      height={24}
                      alt="About treatment"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Treatment