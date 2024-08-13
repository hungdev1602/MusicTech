import BannerHome from "@/app/components/banner/BannerHome";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1() {
  // data example
  // const data: any = [
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu, Huỳnh Văn",
  //     listen: 24500
  //   },
  //   {
  //     image: "/demo/image-4.png",
  //     title: "Hoa Nở Bên Đường",
  //     singer: "Quang Đăng Trần, ACV",
  //     listen: 20500
  //   },
  //   {
  //     image: "/demo/image-5.png",
  //     title: "Hứa Đợi Nhưng Chẳng Tới",
  //     singer: "Lâm Tuấn, Vương Thiên Tuấn",
  //     listen: 18200
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
          image: value.image,
          title: value.title,
          audio: value.audio,
          listen: value.listen,
          singer: singersName
        })
      }
      resolve(data);
    })
  });

  result = result.slice(0, 3);

  return (
    <>
      <div className="flex items-start">
        <div className="w-[534px]">
          <BannerHome />
        </div>
        <div className="flex-1 ml-[20px]">
          <Title text="Most Listened Songs" />
          {/* Danh sách bài hát */}
          <SongList data={result} />
        </div>
      </div>
    </>
  )
}