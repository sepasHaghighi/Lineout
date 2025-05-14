import Logo from "../Components/Logo"
import Button from "../Components/Button"
export default function Auth() {
    return (
        <div className="flex flex-col justify-center items-center gap-60">
            <section className="pt-[30vh] flex flex-col justify-center items-center gap-2">
                <Logo size='big'/>
                <h1>lineout</h1>
            </section>
            <section className="flex flex-col gap-4">
                <Button text="Sign in" link="/signin"/>
                <Button text="Sign up" link="/signup"/>
            </section>
        </div>
    )
}