'use client';

import React from 'react';

function PreLoader() {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-secondary flex items-center justify-center opacity-100 visible z-40 transition-opacity duration-[0.25s] ease-[ease]'>
            <div className='relative w-[142px] h-[40px] bg-transparent'>
                <span className='absolute w-4 h-4 top-3 left-4 bg-primary rounded-full translate-x-0 animate-dot'></span>
                <div className='translate-x-0 mt-3 ml-[31px]'>
                    <span className='block float-left w-4 h-4 ml-4 bg-primary rounded-full animate-bounce-delay'></span>
                    <span className='block float-left w-4 h-4 ml-4 bg-primary rounded-full animate-bounce-delay'></span>
                    <span className='block float-left w-4 h-4 ml-4 bg-primary rounded-full animate-bounce-delay'></span>
                </div>
            </div>
            <style jsx>{`
                @-webkit-keyframes dot {
                    0%, 100% {
                        -webkit-transform: translateX(0);
                        transform: translateX(0);
                    }
                    50% {
                        -webkit-transform: translateX(96px);
                        transform: translateX(96px);
                    }
                }

                @keyframes dot {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(96px);
                    }
                }

                @-webkit-keyframes bounce-delay {
                    0%, 100% {
                        -webkit-transform: translateX(0);
                        transform: translateX(0);
                    }
                    50% {
                        -webkit-transform: translateX(-31px);
                        transform: translateX(-31px);
                    }
                }

                @keyframes bounce-delay {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(-31px);
                    }
                }

                .animate-dot {
                    -webkit-animation: dot 2.5s infinite;
                    animation: dot 2.5s infinite;
                }
                .animate-bounce-delay {
                    -webkit-animation: bounce-delay 2.5s infinite;
                    animation: bounce-delay 2.5s infinite;
                }
            `}</style>
        </div>
    );
}

export default PreLoader;
