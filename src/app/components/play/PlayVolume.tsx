import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume() {
  return (
    <>
      <div className="w-[184px] flex items-end">
        <button className="text-[16px] text-white">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="h-1 w-[50%] bg-primary rounded-[50px] absolute top-[13px] left-0"></div>
          <input 
            type="range" 
            min={0}
            max={100}
            defaultValue={50}
            className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm"
          />
        </div>
      </div>
    </>
  )
}