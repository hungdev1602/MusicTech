import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";

export default function LoginPage() {
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Account Login" className="text-center" />
        <form className="">
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Example: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            id="password"
            required={true}
          />
          <FormButton text="Log In" />
        </form>
      </div>
    </>
  )
}