"use client"

import { FaPlay } from "react-icons/fa6";
export default function ButtonPlay(props: any) {
  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    // Phát nhạc
    const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
    const elementSource = elementPlayAudio?.querySelector(".inner-source");
    elementSource.src = props.audio;
    elementAudio.load();
    elementAudio.play();

    // Hiển thị khối play ở dưới khi phát nhạc
    if(elementPlayAudio.classList.contains("hidden")) {
      elementPlayAudio.classList.remove("hidden");
    }

    // Hiển thị thông tin bài hát vào thanh Play

    // 1) Hiển thị ảnh
    const elementImage = elementPlayAudio?.querySelector(".inner-image");
    elementImage.src = props.image;
    elementImage.alt = props.title;
    // 2) Hiển thị tiêu đề
    const elementTitle = elementPlayAudio?.querySelector(".inner-title");
    elementTitle.innerHTML = props.title;
    // 3) Hiển thị ca sĩ
    const elementSinger = elementPlayAudio?.querySelector(".inner-singer");
    elementSinger.innerHTML = props.singer;
  }

  return (
    <>
      <button 
        onClick={handlePlay}
        className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-white mr-[10px]"
      >
        <FaPlay />
      </button>
    </>
  )
}