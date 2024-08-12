import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";

export default function RegisterPage() {
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng Ký Tài Khoản" className="text-center" />
        <form className="">
          <FormInput
            label="Full Name"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Ví dụ: Le Van A"
            required={true}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            id="password"
            required={true}
          />
          <FormButton text="Đăng Nhập" />
        </form>
      </div>
    </>
  )
}