import { useState, useEffect } from 'react';

export default function ProgressBar() {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        setProgress(prevProgress => prevProgress + 10);
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <div className="progress w-full bg-gray-200 h-8 rounded-full">
                <div
                    className="progress-bar bg-blue-500 h-8 rounded-full"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${progress}%` }}
                >
                    <span className="sr-only">{progress}% Complete</span>
                </div>
            </div>
        </div>
    );
}
