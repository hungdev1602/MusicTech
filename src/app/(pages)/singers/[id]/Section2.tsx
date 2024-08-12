/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section2 (props: { singerId: string }) {
  const { singerId } = props;

  // const data: any = [
  //   {
  //     image: "/demo/image-7.png",
  //     title: "Sơn Tùng",
  //     singers: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32"
  //   },
  //   {
  //     image: "/demo/image-7.png",
  //     title: "Sơn Tùng",
  //     singers: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32"
  //   },
  //   {
  //     image: "/demo/image-7.png",
  //     title: "Sơn Tùng",
  //     singers: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32"
  //   },
  //   {
  //     image: "/demo/image-7.png",
  //     title: "Sơn Tùng",
  //     singers: "Hồ Quang Hiếu, Huỳnh Văn",
  //     time: "4:32"
  //   },
  // ]

  let result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, "songs")
    onValue(songsRef, async (snapshot) => {
      const data: any = []
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        let singersName = ``;
        for(const singerId of value.singerId){
          let res = await new Promise((resolve) => {
            const singersRef = ref(dbFirebase, "singers");
            let temp = ``
            onValue(singersRef, async (snapshot) => {
              temp += snapshot.val()[singerId].title + ", ";
              resolve(temp)
            })
          })
          singersName += res
        }
        singersName = singersName.substring(0, singersName.length - 2);
        data.push({
          id: key,
          audio: value.audio,
          image: value.image,
          listen: value.listen,
          title: value.title,
          singers: singersName,
          link: `/song/${key}`,
          singerId: value.singerId
        })
      }
      resolve(data);
    })
  });

  result = result.filter((item: any) => item.singerId.includes(singerId))

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát" />

        {/* List */}
        <SongList2 data={result}/>
      </div>
    </>
  )
}
