/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaPlay, FaRegHeart } from "react-icons/fa";

export default function SongItem2(props: any) {
  const { 
    image = "",
    title = "",
    singers = "",
    time = "",
    link = ""
  } = props;
  return (
    <>
      <div className="bg-[#212121] rounded-[15px] px-[18px] py-[10px] flex items-center justify-between">
        {/* Left */}
        <div className="w-[40%] flex items-center">
          <button className="text-white text-[24px] mr-[12px]">
            <FaPlay />
          </button>
          <div className="w-[42px] aspect-square rounded-[8px] mr-[12px] truncate">
            <Link href={link}>
              <img 
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="text-[14px] font-[700] text-white">
            <Link href={link}>
              {title}
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="w-[30%] text-center">
          <div className="text-[14px] font-[400] text-white">
            {singers}
          </div>
        </div>

        {/* Right */}
        <div className="w-[30%] flex items-center justify-end">
          <div className="text-[14px] font-[400] text-white mr-[18px]">
            {time}
          </div>
          <button className="text-[20px] text-white">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
  )
}