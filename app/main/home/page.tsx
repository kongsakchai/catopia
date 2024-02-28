import Homeheader from "@/app/component/Homeheader";
import Homeinterest from "@/app/component/Homeinterest";
import Homerecommand from "@/app/component/Homerecommand";
import Homerefer from "@/app/component/Homerefer";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-6 mx-8 my-12 border border-solid border-red-500">
      <Homeheader/>
      <Homerecommand/>
      <Homeinterest/>
      <Homerefer/>
    </div>
  );
}
