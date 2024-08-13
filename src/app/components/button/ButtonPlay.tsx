"use client"

import { FaPlay } from "react-icons/fa6";
export default function ButtonPlay(props: any) {
  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");

    // Chèn song-id để biết đang phát bài nào
    elementPlayAudio.setAttribute("song-id", props.id);

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

    // Thêm class play cho cái box-button-play
    const boxButtonPlay = document.querySelector(".box-button-play");
    boxButtonPlay?.classList.add("play");

    // Lấy ra tổng thời gian bài hát
    const boxPlayTime: any = document.querySelector(".box-play-time");
    const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total");
    const boxPlayTimeCurrent = boxPlayTime?.querySelector(".inner-current");
    
    
    elementAudio.onloadedmetadata = () => {
      const totalTime = elementAudio.duration;
      boxPlayTimeTotal.max = totalTime;

      // Lấy ra thời gian hiện tại
      elementAudio.ontimeupdate = () => {
        const currentTime = elementAudio.currentTime;
        boxPlayTimeTotal.value = currentTime;

        const percent = currentTime * 100 / totalTime;
        boxPlayTimeCurrent.style.width = `${percent}%`;
      }
    }
  }

  return (
    <>
      <button 
        onClick={handlePlay}
        className={props.className + " inner-button-play"}
      >
        <FaPlay />
      </button>
    </>
  )
}