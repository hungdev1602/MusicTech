/* eslint-disable @next/next/no-img-element */
export default function BannerHome() {
  return (
    <>
      <div 
        className="w-full flex items-center rounded-[15px] bg-cover"
        style={{ backgroundImage: "url('/demo/background-1.png')" }}
      >
        <div className="flex-1 mr-[34px] ml-[30px]">
          <div className="text-[32px] text-white font-[700] mb-[6px]">
            EDM Music
          </div>
          <div className="text-[14px] text-white font-[500]">
            Top 100 European and American Electronic/Dance Music is a list of the 100 hottest songs currently in the Top 100 European and American Electronic/Dance Music genre.
          </div>
        </div>
        <div className="w-[215px] mr-[22px] mt-[48px]">
          <img 
            src="/demo/image-2.png" 
            alt="" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  )
}