/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";

export default function Section1 () {
  const data: any = [
    {
      image: "/demo/image-7.png",
      title: "Sơn Tùng",
      singers: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32"
    },
    {
      image: "/demo/image-7.png",
      title: "Sơn Tùng",
      singers: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32"
    },
    {
      image: "/demo/image-7.png",
      title: "Sơn Tùng",
      singers: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32"
    },
    {
      image: "/demo/image-7.png",
      title: "Sơn Tùng",
      singers: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32"
    },
  ]

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài hát yêu thích" />

        {/* List */}
        <SongList2 data={data}/>
      </div>
    </>
  )
}
