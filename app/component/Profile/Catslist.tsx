"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface YourprofileProps {
  userData: {
    username: string,
    email: string,
    id: number,
    gender: string,
    date: string,
    createdAt: string,
  };
}

function Catslist({ userData }: YourprofileProps) {
  const { username, email } = userData;

  const [haveKitten, setHaveKitten] = useState(true);

  const mockupKitten = [
    {
      id: 1,
      name: "Kitten 1",
      img_url:
        "https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg",
      last_update: "24 มกราคม 2567",
    },
    {
      id: 2,
      name: "Kitten 2",
      img_url:
        "https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg",
      last_update: "20 มกราคม 2567",
    },
    {
      id: 3,
      name: "Kitten 3",
      img_url:
        "https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg",
      last_update: "22 มกราคม 2567",
    },
  ];

  return (
    <>
      {haveKitten && (
        <div className="container flex flex-col items-center justify-center gap-8">
          <div className="container flex flex-col">
            {mockupKitten.map((kitten) => (
              <div
                key={kitten.id}
                className="flex p-4 justify-between items-start"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={kitten.img_url}
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
                      อัพเดทล่าสุด : {kitten.last_update}
                    </h3>
                  </div>
                </div>
                <Link href={`/main/profile/kitten_info/${kitten.name}`}>
                  <Image
                    src="/aboutcat-btn.svg"
                    width={24}
                    height={24}
                    alt="About cats"
                  ></Image>
                </Link>
              </div>
            ))}
          </div>
          <button className="flex justify-center items-center gap-[10px] px-4 py-2 rounded-lg border-[1.5px] border-solid border-primary">
            <Image src="/Plus.svg" width={24} height={24} alt="Add kitten" />
            <p className="text-primary text-base not-italic font-normal leading-6">
              เพิ่มแมว
            </p>
          </button>
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
