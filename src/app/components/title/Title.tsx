export default function Title(props: { text: String, className?: String}) {
  const { text = "", className = "" } = props;
  return (
    <>
      <div className={"text-[24px] font-[700] text-[#EFEEE0] mb-[20px] " + className}>
        {text}
      </div>
    </>
  )
}