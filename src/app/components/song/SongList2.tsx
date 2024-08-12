import SongItem2 from "./SongItem2";

export default function SongList2(props: any) {
  const { data } = props;
  return (
    <>
      <div className="mt-[20px] grid grid-cols-1 gap-[10px]">
      {/* Item */}
      {data.map((item: any, index: number) => (
        <SongItem2 
          key={index}
          image={item.image}
          title={item.title}
          singers={item.singers}
          time={item.time}
          link={item.link}
        />
      ))}
    </div>
    </>
  )
}