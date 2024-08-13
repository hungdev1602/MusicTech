import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1() {
  // const data: any = [
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  //   {
  //     image: "/demo/image-6.png",
  //     title: "Nhạc trẻ",
  //     description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
  //     link: ""
  //   },
  // ]
  let result: any = await new Promise((resolve) => {
    const categoriesRef = ref(dbFirebase, "categories")
    onValue(categoriesRef, async (snapshot) => {
      const data: any = []
      for (const key in snapshot.val()) {
        const value = snapshot.val()[key];
        data.push({
          id: key,
          image: value.image,
          title: value.title,
          description: value.description,
          link: `/categories/${key}`
        })
      }
      resolve(data);
    })
  });


  return (
    <>
      <div className="mt-[30px]">
        <Title text="Song Categories" />
        <CardList data={result}/>
      </div>
    </>
  )
}