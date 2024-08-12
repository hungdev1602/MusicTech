/* eslint-disable @next/next/no-img-element */
export default function CardInfo(props : {
  image: string,
  title: string,
  description: string
}) {
  const { 
    image = "", 
    title = "", 
    description = ""
  } = props;
  return (
    <>
      <div className="flex items-center">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 ml-[20px]">
          <h1 className="text-[35px] font-[700] text-primary mb-[10px]">{title}</h1>
          <div className="text-[14px] font-[400] text-[#EFEEE0]">
            {description}
          </div>
        </div>
      </div>
    </>
  )
}