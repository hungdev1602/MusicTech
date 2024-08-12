import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import { notFound } from "next/navigation";

export default async function SingersDetailPage({ params }: { params: { id: string }}) {
  const result: any = await new Promise((resolve) => {
    const singerRef = ref(dbFirebase, `singers/${params.id}`);
    onValue(singerRef, async (snapshot) => {
      const data: any = snapshot.val()
      resolve(data);
    })
  });

  if(!result){
    notFound();
  }

  console.log(result)
  return (
    <>
      {/* CardInfo */}
      <CardInfo 
        image={result.image}
        title={result.title}
        description={result.description}
      />

      {/* Section2: Danh sach bai hat */}
      <Section2 singerId={params.id} />
    </>
  )
}