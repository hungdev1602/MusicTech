import { FaBackwardStep, FaPlay, FaForwardStep } from "react-icons/fa6";

export default function PlayActions() {
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-[16px] text-white">
          <FaBackwardStep />
        </button>
        <button className="text-[16px] text-white w-[32px] h-[32px] bg-primary rounded-full inline-flex items-center justify-center mx-[42px]">
          <FaPlay />
        </button>
        <button className="text-[16px] text-white">
          <FaForwardStep />
        </button>
      </div>
    </>
  )
}