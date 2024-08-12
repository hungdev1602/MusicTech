export default function FormButton(props: { text: string }) {
  const { text } = props;
  return (
    <>
      <button
        type="submit"
        className="h-[50px] w-full bg-primary text-white rounded-[6px] text-[16px] font-[700]"
      >
        {text}
      </button>
    </>
  )
}