export default function FormInput(props: any) {
  const { 
    label = "",
    type = "text",
    name = "",
    id = "",
    placeholder = "",
    required = false
  } = props;
  return (
    <>
      <div className="mb-[15px]">
        {label && (
          <label 
            className="block mb-[5px]"
            htmlFor={id}
          >
            <span className="text-[14px] font-[600] text-white">{label}</span>
            <span className="text-[14px] font-[600] text-[#F21D2F] ml-[5px]">*</span>
          </label>
        )}
        <input 
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="h-[50px] w-full rounded-[6px] px-[16px] bg-white text-[14px] font-[600] outline-none"
          required={required}
        />
      </div>
    </>
  )
}