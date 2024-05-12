"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { th } from "date-fns/locale";

function formatDateThai(date: string) {
  const newDate = new Date(date);
  return format(newDate, "dd MMMM yyyy", { locale: th });
}

function Catslist({ kittensData }: any) {
  //console.log("kittensData: ", kittensData);

  const [haveKitten, setHaveKitten] = useState(false);

  useEffect(() => {
    checkHaveKitten();
  }, [kittensData]);

  function checkHaveKitten() {
    if (kittensData.data === null) {
      return setHaveKitten(false);
    }
    return setHaveKitten(true);
  }

  return (
    <>
      {haveKitten && (
        <div className="container flex flex-col items-center justify-center gap-8">
          <div className="container flex flex-col">
            {kittensData.data?.map((kitten: any) => (
              <div
                key={kitten.id}
                className="flex p-4 justify-between items-start"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={process.env.NEXT_PUBLIC_API_IMAGES + kitten?.profile}
                    onError={() => "/Pofile-test.svg"}
                    width={50}
                    height={50}
                    alt="Your kitten img"
                    style={{
                      border: "1px solid var(--Primary, #3FA8D0)",
                      borderRadius: "88px",
                    }}
                  />
                  <div className="flex flex-col items-start">
                    <h2 className="text-black01 text-base not-italic font-normal leading-6">
                      {kitten.name}
                    </h2>
                    <h3 className="text-textfield text-xs not-italic font-normal leading-5">
                      อัพเดทล่าสุด : {formatDateThai(kitten.last_update)}
                    </h3>
                  </div>
                </div>
                <Link href={`/main/profile/kitten_info/${kitten.id}`}>
                  <Image
                    src="/aboutcat-btn.svg"
                    width={24}
                    height={24}
                    alt="About cats"
                  />
                </Link>
              </div>
            ))}
          </div>
          <Link href="/main/profile/add_kitten">
            <button className="flex justify-center items-center gap-[10px] px-4 py-2 rounded-lg border-[1.5px] border-solid border-primary">
              <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
              <p className="text-primary text-base not-italic font-normal leading-6">
                เพิ่มแมว
              </p>
            </button>
          </Link>
        </div>
      )}
      {!haveKitten && (
        <div className="container flex flex-col items-center justify-center gap-8">
          <div className="container flex flex-col items-center justify-center gap-2">
            <Image
              src="/Nohavekitten.svg"
              width={364}
              height={231}
              alt="No have kitten"
            />
            <h2 className="text-black01 text-center text-base not-italic font-bold leading-6">
              คุณไม่เคยมีโปรไฟลแมว
            </h2>
          </div>
          <Link href="/main/profile/add_kitten">
            <button className="flex justify-center items-center gap-[10px] px-4 py-2 rounded-lg border-[1.5px] border-solid border-primary">
              <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
              <p className="text-primary text-base not-italic font-normal leading-6">
                เพิ่มแมว
              </p>
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Catslist;
