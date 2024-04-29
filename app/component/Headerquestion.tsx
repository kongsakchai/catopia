"use client";

export default function ProgressBar({progress}: any) {
  return (
    <div className="flex justify-center container mx-auto mt-12 mb-10">
      <div className="progress w-[364px] bg-line h-2 rounded-full">
        <div
          className="progress-bar bg-primary h-2 rounded-full"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            width: `${progress}%`,
            transition: "width 0.5s ease-in-out",
          }}
        >
          <span className="sr-only">{progress}</span>
        </div>
      </div>
    </div>
  );
}
