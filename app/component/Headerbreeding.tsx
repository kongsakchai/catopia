'use client';

import { useContext } from "react";
import { DataContext } from "../main/breeding/page";

export default function Headerbreeding() {

    const {progressBreeding}:any = useContext(DataContext);
    return (
        <div className="flex justify-center container mx-auto mt-12 mb-10">
            <div className="progress w-[364px] bg-line h-2 rounded-full">
                <div
                    className="progress-bar bg-primary h-2 rounded-full"
                    role="progressbar"
                    aria-valuenow={progressBreeding}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                        width: `${progressBreeding}%`,
                        transition: "width 0.5s ease-in-out",
                    }}
                >
                    <span className="sr-only">{progressBreeding}</span>
                </div>
            </div>
        </div>
    )
}