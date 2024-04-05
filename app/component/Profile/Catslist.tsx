'use client'

import Image from 'next/image'
import React, { useState } from 'react'

function Catslist() {

    const [haveKitten, setHaveKitten] = useState(true)

    const mockupKitten = [
        {
            id: 1,
            name: 'Kitten 1',
            img_url: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
        },
        {
            id: 2,
            name: 'Kitten 2',
            img_url: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
        },
        {
            id: 3,
            name: 'Kitten 3',
            img_url: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
        },
    ]

    return (
        <>
            {haveKitten && (
                <div className='container flex flex-col items-center justify-center gap-8 border border-solid border-green-800'>
                    <h1>test</h1>
                    <button className='flex justify-center items-center gap-[10px] px-4 py-2 rounded-lg border-[1.5px] border-solid border-primary'>
                        <Image src='/Plus.svg' width={24} height={24} alt='Add kitten' />
                        <p className='text-primary text-base not-italic font-normal leading-6'>เพิ่มแมว</p>
                    </button>
                </div>
            )}
            {!haveKitten && (
                <div className='container flex flex-col items-center justify-center gap-8 border border-solid border-green-800'>
                    <div className='container flex flex-col items-center justify-center gap-2'>
                        <Image src='/Nohavekitten.svg' width={364} height={231} alt='No have kitten' />
                        <h2 className='text-black01 text-center text-base not-italic font-bold leading-6'>คุณไม่เคยมีโปรไฟลแมว</h2>
                    </div>
                    <button className='flex justify-center items-center gap-[10px] px-4 py-2 rounded-lg border-[1.5px] border-solid border-primary'>
                        <Image src='/Plus.svg' width={24} height={24} alt='Add kitten' />
                        <p className='text-primary text-base not-italic font-normal leading-6'>เพิ่มแมว</p>
                    </button>
                </div>
            )}
        </>
    )
}

export default Catslist