'use client';

import React, { useState } from 'react'
import GenQuesSugest from './GenQuesSugest';
import HeaderQuesSuggest from './HeaderQuesSuggest';

function AnsQuesForProple() {

    const [progress, setProgress] = useState<number>(0);

    return (
        <div className='flex flex-col items-center'>
            <HeaderQuesSuggest progress={progress} />
            <div className='w-full mt-0 h-[0.001px] shrink-0 border border-line' />
            <GenQuesSugest progress={progress} setProgress={setProgress} />
        </div>
    )
}

export default AnsQuesForProple