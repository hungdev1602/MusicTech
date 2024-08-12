/* eslint-disable @next/next/no-img-element */
export default function PlayInfo() {
  return (
    <>
      <div className="flex items-center w-[218px]">
        <div className="w-[49px] aspect-square rounded-[14px] truncate">
          <img 
            src="" 
            alt="" 
            className="w-full h-full object-cover inner-image"
          />
        </div>
        <div className="ml-[12px]">
          <div className="text-[15px] font-[700] text-white mb-[2px] inner-title line-clamp-1"></div>
          <div className="text-[12px] font-[700] text-[#FFFFFF70] inner-singer line-clamp-1"></div>
        </div>
      </div>
    </>
  )
}