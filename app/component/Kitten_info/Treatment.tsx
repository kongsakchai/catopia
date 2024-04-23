'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, use } from 'react'

function Treatment({ params }: any) {
  const router = useRouter()

  const [haveTreatment, setHaveTreatment] = useState(true)
  const [treatmentInfo, setTreatmentInfo] = useState<any>([])

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

  useEffect(() => {
    getTreatment()
  }, [])

  const getTreatment = async () => {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/treatment/${params}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })

      // if (response.data.data !== null) {
      //   setHaveTreatment(true)
      //   setTreatmentInfo(response.data.data)
      // }
    } catch (error) {
      console.log("Error: ", error);
      
    }
  }
  
  // console.log("treatmentInfo: ", treatmentInfo);
  

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
              <button
                type='button'
                onClick={()=> router.push(`/main/profile/add_treatment/${params}`)}
                className='flex w-[362px] py-2 px-4 mt-8 justify-center items-center gap-[10px] rounded-lg border-[1.5px] border-solid border-primary'>
                <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
                <p className='text-primary text-center text-base not-italic font-normal leading-6'>เพิ่มการรักษา</p>
              </button>
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
                  <Link href={`/main/profile/detail_treatment/${treatment.id}`}>
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