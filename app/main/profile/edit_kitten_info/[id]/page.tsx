"use client";

import PreLoader from "@/app/component/Loader/PreLoader";
import learningcats from "@/app/file/learningcats.json";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

function EditKittenInfo({ params }: any) {
  // //console.log("params: ", params);

  const router = useRouter();

  const [enablePreloader, setEnablePreloader] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string>("/Pofile-test.svg");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [date, setDate] = useState("");
  const [username, setRegisUsername] = useState("");
  const [weight, setWeight] = useState<number>();
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [aggressive, setAggressive] = useState<number>(0);
  const [shyness, setShyness] = useState<number>(0);
  const [openness, setOpenness] = useState<number>(0);

  const [errorDate, setErrorDate] = useState(false);
  const [errorRegisUsername, setErrorRegisUsername] = useState(false);
  const [errorWeight, setErrorWeight] = useState(false);
  const [errorBreed, setErrorBreed] = useState(false);
  const [errorGender, setErrorGender] = useState(false);
  const [errorRegister, setErrorRegister] = useState("");

  const [newListCats, setNewListCats] = useState<any[]>([]);
  const [activeSearch, setActiveSearch] = useState<any[]>([]);

  useEffect(() => {
    if (learningcats.length > 0) {
      listCatBreed();
    }
  }, [learningcats]);

  function listCatBreed() {
    setNewListCats(learningcats.map((cat: any) => cat.name));
  }

  function handleSearch(e: any) {
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(newListCats.filter((words: any) => words.includes(e.target.value)).slice(0, 5));
  }

  const selectSearch = (cat: string) => {
    setBreed(cat);
    setActiveSearch([]);
  };

  useEffect(() => {
    getKittenInfo();
  }, []);

  const getKittenInfo = async () => {
    try {
      const response = await axios.get(`/api/cat/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      //console.log("response: ", response.data.data);

      setRegisUsername(response.data.data.name);
      setDate(response.data.data.date);
      setWeight(response.data.data.weight);
      // setBreed(response.data.data.breed);
      setGender(response.data.data.gender);
      setSelectedImage(process.env.NEXT_PUBLIC_API_IMAGES + response.data.data.profile);
      setBreed(response.data.data.breeding);
      setAggressive(response.data.data.aggression);
      setShyness(response.data.data.shyness);
      setOpenness(response.data.data.extraversion);
    } catch (error) {
      //console.log("Error: ", error);
    }
  };

  const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);
    setSelectedImage(file ? URL.createObjectURL(file) : "/Pofile-test.svg");
  };

  const validateForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEnablePreloader(true);

    const isDateValid = date.trim() !== "";
    const isRegisUsernameValid = username.length >= 4;
    const isWeight = weight !== 0;
    const isBreed = breed.trim() !== "";
    const isGenderSelected = !!gender;
    const resultFile = await postFile();
    const resultPost = await putKitten(resultFile);

    setEnablePreloader(false);

    setErrorDate(!isDateValid);
    setErrorRegisUsername(!isRegisUsernameValid);
    setErrorWeight(!isWeight);
    setErrorBreed(!isBreed);
    setErrorGender(!isGenderSelected);

    if (isDateValid && isRegisUsernameValid && isWeight && isBreed && isGenderSelected && resultPost) {
      //
      router.push("/main/profile");
    } else {
      setEnablePreloader(false);
      setErrorRegister("ข้อมูลไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  const postFile = async () => {
    if (file === undefined) return selectedImage.replace(process.env.NEXT_PUBLIC_API_IMAGES || "", "");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("/api/file/upload", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        const result = response.data;
        if (result.success) {
          return response.data.data.file_name;
        }
        return "";
      }
      throw new Error("Something went wrong");
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const putKitten = async (profile: string) => {
    const data = {
      profile,
      name: username,
      date,
      weight,
      breeding: breed,
      gender,
      aggression: aggressive,
      shyness,
      extraversion: openness,
    };
    try {
      const response = await axios.put(`/api/cat/${params.id}`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        const result = response.data;

        if (result.success) {
          return true;
        }
        return false;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const [inputType, setInputType] = useState("text"); // State to manage input type

  const handleTouchStart = () => {
    setInputType("date");
  };

  return (
    <div className="container flex justify-center">
      {enablePreloader && <PreLoader />}
      <div className="flex flex-col justify-center items-start gap-8 mt-20 w-[364px]">
        <button type="button" onClick={() => router.push(`/main/profile/kitten_info/${params.id}`)}>
          <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow-left" />
        </button>
        <div className="relative w-24 h-24">
          <Image
            src={selectedImage}
            width={88}
            height={88}
            alt="Your profile"
            className="rounded-full w-[88px] h-[88px] object-cover overflow-hidden"
          />
          <label htmlFor="fileInput" className="absolute bottom-0 right-0 p-1 bg-white rounded-full cursor-pointer">
            <Image src="/Camera.svg" width={24} height={24} alt="Camera" />
            <input type="file" id="fileInput" onChange={handleFileInput} className="hidden" />
          </label>
        </div>
        <form onSubmit={validateForm} className="flex flex-col justify-center items-start gap-2">
          <input
            value={username}
            onChange={(e) => {
              setRegisUsername(e.target.value);
              setErrorRegisUsername(false);
            }}
            type="text"
            placeholder={`ชื่อ`}
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorRegisUsername ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setErrorDate(false);
            }}
            type={inputType}
            placeholder="วัน เดือน ปี เกิด"
            onTouchStart={handleTouchStart}
            className={`w-[364px] h-10 text-base text-black01 not-italic font-normal leading-6 pl-2 pr-2 border rounded ${errorDate ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <input
            value={weight}
            onChange={(e) => {
              // const value = parseFloat(e.target.value);
              setWeight(e.target.valueAsNumber);
              setErrorWeight(false);
            }}
            type="number"
            placeholder={`น้ำหนัก (กก.)`}
            className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorWeight ? "border-error" : "border-textfield"
              } focus:outline-primary`}
          />
          <div className="flex items-start relative w-full">
            <input
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
                handleSearch(e);
                setErrorBreed(false);
              }}
              type="text"
              placeholder={`พันธุ์แมว`}
              className={`flex w-[364px] h-10 flex-col items-start text-base not-italic font-normal leading-6 pl-2 border rounded ${errorBreed ? "border-error" : "border-textfield"
                } focus:outline-primary`}
            />
            {activeSearch.length > 0 && (
              <div className="flex flex-col gap-4 z-20 absolute top-12 p-4 bg-white text-black01 border-b-2 border-l-2 border-r-2 w-full rounded left-1/2 -translate-x-1/2 ">
                {activeSearch.map((cat: string, index: number) => (
                  <button
                    type="button"
                    value={cat}
                    key={index}
                    onClick={() => selectSearch(cat)}
                    className="flex items-center gap-2"
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="text-left mt-2 mb-4">
            <span className={`${errorGender ? "text-error" : "text-black01"}`}>เพศ</span>
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => {
                  handleGender(e);
                  setErrorGender(false);
                }}
                className="ml-2 mr-2 mt-2"
              />
              <span className="rounded-full h-6 w-6 flex items-center justify-center  text-black01 mt-2">ชาย</span>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => {
                  handleGender(e);
                  setErrorGender(false);
                }}
                className="ml-6 mr-2 mt-2"
              />
              <span className="rounded-full h-6 w-6 flex items-center justify-center text-black01 mt-2">หญิง</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-start gap-2">
                <span className=" text-black01 text-base not-italic font-normal leading-6">ความก้าวร้าว</span>
                <span className=" text-primary text-base not-italic font-bold leading-6">(0-10)</span>
              </div>
              <div className="relative flex">
                <div className="absolute flex flex-row items-center justify-between z-10 top-0 left-0 h-2 rounded-xl bg-line w-full">
                  {[...Array(10)].map((_, index) => (
                    <Image key={index} src={"/dot.svg"} width={4} height={4} alt="markers" />
                  ))}
                </div>
                <div
                  className="absolute z-10 top-0 left-0 h-2 rounded-xl bg-primary"
                  style={{
                    width: `calc(${aggressive * 10}% ${aggressive === 10 ? "- 3px" : aggressive === 1 ? "+ 3px" : ""})`,
                  }}
                />
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={aggressive}
                  onChange={(e) => setAggressive(e.target.valueAsNumber)}
                  list="tickmarks"
                  className="absolute h-2 rounded-xl z-10 appearance-none outline-none bg-transparent w-full"
                  style={{
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-start gap-2">
                <span className=" text-black01 text-base not-italic font-normal leading-6">ความเขินอาย</span>
                <span className=" text-primary text-base not-italic font-bold leading-6">(0-10)</span>
              </div>
              <div className="relative">
                <div className="absolute flex flex-row items-center justify-between z-10 top-0 left-0 h-2 rounded-xl bg-line w-full">
                  {[...Array(10)].map((_, index) => (
                    <Image key={index} src={"/dot.svg"} width={4} height={4} alt="markers" />
                  ))}
                </div>
                <div
                  className="absolute z-10 top-0 left-0 h-2 rounded-xl bg-primary"
                  style={{
                    width: `calc(${shyness * 10}% ${shyness === 10 ? "- 3px" : shyness === 1 ? "+ 3px" : ""})`,
                  }}
                />
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={shyness}
                  onChange={(e) => setShyness(e.target.valueAsNumber)}
                  list="tickmarks"
                  className="absolute h-2 rounded-xl z-10 appearance-none outline-none bg-transparent w-full"
                  style={{
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-start gap-2">
                <span className=" text-black01 text-base not-italic font-normal leading-6">ความสนใจต่อสิ่งภายนอก</span>
                <span className=" text-primary text-base not-italic font-bold leading-6">(0-10)</span>
              </div>
              <div className="relative">
                <div className="absolute flex flex-row items-center justify-between z-10 top-0 left-0 h-2 rounded-xl bg-line w-full">
                  {[...Array(10)].map((_, index) => (
                    <Image key={index} src={"/dot.svg"} width={4} height={4} alt="markers" />
                  ))}
                </div>
                <div
                  className="absolute z-10 top-0 left-0 h-2 rounded-xl bg-primary"
                  style={{
                    width: `calc(${openness * 10}% ${openness === 10 ? "- 3px" : openness === 1 ? "+ 3px" : ""})`,
                  }}
                />
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={openness}
                  onChange={(e) => setOpenness(e.target.valueAsNumber)}
                  list="tickmarks"
                  className="absolute h-2 rounded-xl z-10 appearance-none outline-none bg-transparent w-full"
                  style={{
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 mt-6 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
          >
            ยืนยัน
          </button>
          <span
            className="flex text-center items-center justify-center text-xs not-italic font-normal mt-2 mb-2 leading-5 text-error"
            style={{ width: "100%", textAlign: "center" }}
          >
            {errorRegister}
          </span>
        </form>
      </div>
    </div>
  );
}

export default EditKittenInfo;
