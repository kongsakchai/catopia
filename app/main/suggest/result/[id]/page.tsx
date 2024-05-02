import React from "react";

function ResultSuggest({ params }: any) {
  return (
    <div
      className="flex flex-col h-[793px] w-full"
      style={{
        backgroundImage: "url(/Mainbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center buttom",
        height: "full",
        zIndex: 0,
      }}
    >
      <div className="inline-flex flex-col items-center mt-14">
        <h1 className="text-center text-2xl text-black01 not-italic font-semibold leading-8">
          ลักษณะพันธุ์แมว
        </h1>
        <h3 className="text-center text-base text-primary not-italic font-semibold leading-6">
          ที่เหมาะสมกับคุณ
        </h3>
      </div>
      <div
        className=" flex items-center justify-center h-[605px] w-full mt-6 border border-solid border-red-800"
        style={{
          backgroundImage: "url(/ResultSuggestbg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "full",
        }}
      ></div>
    </div>
  );
}

export default ResultSuggest;
