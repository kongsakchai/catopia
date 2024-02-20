import Genquestion from "@/app/component/Genquestion"
import Headerquestion from "@/app/component/Headerquestion"

export default function Ansquestion() {

    // let countProgressBar:number = 0;

    return(
        <div className="flex flex-col items-center">
            <Headerquestion/>
            <div className="w-full mt-0 h-[0.001px] shrink-0 border border-line" />
            <Genquestion />
        </div>
    )
}