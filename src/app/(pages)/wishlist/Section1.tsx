"use client"

/* eslint-disable @next/next/no-img-element */
import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 () {
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
  const [data, setData] = useState([]);

  useEffect(() => {
    onAuthStateChanged(authFirebase, async (user) => {
      if(user){
        const userId = user.uid;

        let result: any = await new Promise((resolve) => {
          const songsRef = ref(dbFirebase, "songs")
          onValue(songsRef, async (snapshot) => {
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
              if(value.wishlist && value.wishlist[userId]){
                data.push({
                  id: key,
                  audio: value.audio,
                  image: value.image,
                  listen: value.listen,
                  title: value.title,
                  singers: singersName,
                  link: `/song/${key}`,
                  wishlist: value.wishlist
                })
              }
            }
            resolve(data);
          })
        });
        setData(result)
      }
    })
  }, [])


  return (
    <>
      <div className="mt-[30px]">
        <Title text="Favorite song" />

        {/* List */}
        <SongList2 data={data}/>
      </div>
    </>
  )
}
