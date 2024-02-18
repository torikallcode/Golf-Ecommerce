import { ButtonLogin } from "../Elements/Button/ButtonLogin"
import { FormSignUp } from "../Fragments/FormSignUp"
import { ReFor } from "../Fragments/ReFor"
import { TextSignin } from "../Fragments/TextSignin"
import { Link } from "react-router-dom"

export const SignUpLayout = () => {
  return (<>
    {/* Top */}
    <div className="w-full h-[45%] lg:h-full bg-primary-0">
      <div className="bg-cover w-full h-full flex justify-center items-center" style={{ backgroundImage: `url(./img/golf-balls-arrangement-still-life.jpg)` }}>
        <h1 className="text-3xl font-utama text-slate-100 font-semibold sm:text-4xl">The Golf.</h1>
      </div>
    </div>
    {/* Bottom */}
    <div className="w-full h-[55%] lg:h-full bg-white flex justify-center items-center">
      <main className="grid grid-cols-1 content-between w-full h-full lg:max-w-md lg:max-h-[36rem] xl:max-w-lg px-8 py-10">
        <TextSignin text="Sign Up" Ptext="Already have an account? " to={"/Login"} Ctext="Sign in" />
        <FormSignUp />
        <ReFor />
        <Link to={"/"}>
          <ButtonLogin text="Sign in" />
        </Link>
      </main>
    </div>
  </>
  )
}