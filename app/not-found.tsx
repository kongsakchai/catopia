import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>Not Found</h1>
      <p className="mb-10">Could not find requested resource</p>
      <Link href="/main/home/">
        <button className="flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6">
          Return Home
        </button>
      </Link>
    </div>
  );
}
//flex w-[364px] justify-center items-center gap-2.5 px-4 py-2 bg-primary text-white border rounded-lg border-solid text-base not-italic font-normal leading-6"
