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
            Nhạc EDM
          </div>
          <div className="text-[14px] text-white font-[500]">
            Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
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