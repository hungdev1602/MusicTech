/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaPlay, FaHeart } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";

export default function SongItem(props: any) {
  const { 
    id = "",
    image = "", 
    title = "", 
    singer = "", 
    listen = "",
    audio = "",
  } = props;
  return (
    <>
      <div 
        className="p-[10px] bg-[#212121] rounded-[15px] flex items-center" 
        song-id={id}
      >
        {/* img */}
        <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* title */}
        <div className="flex-1">
          <div className="mb-[2px]">
            <Link href="" className="text-[16px] font-[600] text-white">
              {title}
            </Link>
          </div>
          <div className="text-[12px] font-[400] text-[#FFFFFF80] mb-[5px]">
            {singer}
          </div>
          <div className="text-[12px] font-[400] text-white">
            {listen.toLocaleString('vi-VN')} views
          </div>
        </div>
        {/* Icon */}
        <div className="">
          <ButtonPlay {...props} className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-white mr-[10px]"/>
          <button className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  )
}