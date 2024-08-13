"use client"

export default function PlayTime() {
  const handleChange = (event: any) => {
    const boxPlayTimeTotal = event.target;

    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio?.querySelector(".inner-audio");

    elementAudio.currentTime = parseFloat(boxPlayTimeTotal.value);
  }

  return (
    <>
      <div className="mt-[11px] relative box-play-time">
        <div className="h-1 w-[0] bg-primary rounded-[50px] absolute top-[13px] left-0 inner-current"></div>
        <input 
          type="range" 
          min={0}
          max={0}
          defaultValue={0}
          className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
          onChange={handleChange}
        />
      </div>
    </>
  )
}