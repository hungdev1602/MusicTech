/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function CardItem(props: {
  image: string,
  title: string,
  description: string,
  link: string
}) {
  const {
    image = "",
    title = "",
    description = "",
    link = ""
  } = props;
  return (
    <>
      <div className="">
        <Link href={link}>
          <div className="w-[180px] aspect-square rounded-[15px] truncate mb-[10px]">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-[14px] font-[700] text-white line-clamp-1 mb-[10px]">
            {title}
          </div>
          <div className="text-[12px] font-[400] text-[#FFFFFF80] line-clamp-1">
            {description}
          </div>
        </Link>
      </div>
    </>
  )
}