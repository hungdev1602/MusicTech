/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section3 (props: { categoryId: string, songId: string }) {
  const { categoryId = "", songId = "" } = props;
  console.log(categoryId + " Section3")

  let result: any = await new Promise((resolve) => {
    const songsRef = ref(dbFirebase, "songs")
    const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(categoryId)) //lấy những bài nhạc chung category === id
    onValue(songsQuery, async (snapshot) => {
      const data: any = []
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        // console.log(value)
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
          link: `/song/${key}`
        })
      }
      resolve(data);
    })
  });

  result = result.filter((item: any) => item.id !== songId)
  console.log(result)

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

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Songs in the same category" />

        {/* List */}
        <SongList2 data={result}/>
      </div>
    </>
  )
}
