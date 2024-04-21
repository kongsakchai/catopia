"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface YourprofileProps {
  userData: {
    username: string,
    email: string,
    id: number,
    gender: string,
    date: string,
    createdAt: string,
    profile: string,
  };
}

function Yourprofile({ userData }: YourprofileProps) {
  console.log("userData: ", userData.profile);
  const router = useRouter();

  const { username, email } = userData;
  const [selectedImage, setSelectedImage] =
    useState<string>("/Pofile-test.svg");

  useEffect(() => {
    showImage();
  }, []);

  const showImage = () => {
    setSelectedImage(process.env.NEXT_PUBLIC_API_IMAGES + userData.profile);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={selectedImage}
        onError={() => setSelectedImage("/Pofile-test.svg")}
        width={88}
        height={88}
        alt="Your profile"
        style={{ borderRadius: "88px" }}
      />
      <div className="flex gap-1">
        <h1 className="text-black01 text-center text-2xl not-italic font-bold leading-10">
          {username}
        </h1>
        <button type="button" onClick={() => router.push("/main/profile/edit_profile")}>
          <Image src="/Edit.svg" width={24} height={24} alt="Edit" />
        </button>
      </div>
      <h3 className=" text-textfield text-center text-base not-italic font-normal leading-6">
        {email}
      </h3>
    </div>
  );
}

export default Yourprofile;
