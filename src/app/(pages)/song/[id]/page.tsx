import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

export default async function SongDetailPage({ params }: { params: { id: string } }) {

  const result: any = await new Promise((resolve) => {
    const songRef = ref(dbFirebase, `songs/${params.id}`);
    onValue(songRef, async (snapshot) => {
      const data: any = snapshot.val()
      resolve(data);
    })
  });

  // result = null
  if(!result){
    notFound()
  }

  let singersName = ``;
  for(const singerId of result.singerId){
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

  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={result.image}
        title={result.title}
        description={singersName}
      />

      {/* Section2: Lyrics */}
      <Section2 lyric={result.lyric} />

      {/* Section3:  */}
      <Section3 categoryId={result.categoryId} songId={params.id}/>
    </>
  )
}