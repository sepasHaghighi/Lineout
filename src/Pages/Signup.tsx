import Logo from "../Components/Logo"
import TextField from "../Components/TextField"
import Button from "../Components/Button"
import Facebook from "@/assets/Facebook.svg"
import Google from "@/assets/Google.svg"
import X from "@/assets/X.svg"

export default function Signup() {
    return (
        <div className="flex flex-col items-center">
            <nav className="w-full flex flex-row justify-center items-center p-8 pr-10 pt-4">
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                }}>
                    <span className="material-symbols-rounded w-6 h-6">
                        arrow_back
                    </span>
                </a>
                <section className="w-full flex justify-center">
                    <Logo size="small" />
                </section>
            </nav>
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1>Sign up</h1>
                    <TextField type="text" placeholder="Username" value="" />
                    <TextField type="password" placeholder="Password" value="" />
                    <TextField type="password" placeholder="Repeat password" value="" />
                </div>
                <div className="flex flex-col gap-4">
                    <Button link='#' text="Sign me up!" />
                    <section className="flex flex-row gap-4 justify-center items-center">
                        <a href="#"><img src={Facebook} alt="" /></a>
                        <a href="#"><img src={Google} alt="" /></a>
                        <a href="#"><img src={X} alt="" /></a>
                    </section>
                </div>

            </div>
        </div>
    )
}