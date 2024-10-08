/* eslint-disable @next/next/no-img-element */
import PlayVolume from "./PlayVolume";
import PlayTime from "./PlayTime";
import PlayActions from "./PlayActions";
import PlayInfo from "./PlayInfo";
import PlayAudio from "./PlayAudio";

export default function Play() {
  return (
    <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[21px] z-[999] play-audio hidden">
        <PlayAudio />
        <div className="container mx-auto flex items-center">
          {/* Left */}
          <PlayInfo />
          {/* Mid */}
          <div className="flex-1 mx-[66px]">
            <PlayActions />
            <PlayTime />
          </div>
          {/* Right */}
          <PlayVolume />
        </div>
      </div>
    </>
  )
}