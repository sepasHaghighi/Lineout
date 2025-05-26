import Header from "../Components/Header"
import locationImage from "@/assets/Location.jpg"
import Button from "../Components/Button"

export default function Navigation() {
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={false} />
            <section className="flex flex-col items-center gap-4 justify-center w-[375px] p-4">
                <img src={locationImage} alt="" className="w-[100vw] rounded-xl" />
                <section className="h-[50vh] flex flex-col justify-end items-center gap-4">
                    <Button link={`#`} text="I arrived" disabled={false} />
                    <Button link={`#`} text="I need more time" disabled={false} />
                    <a href="/searchBy">Cancel</a>
                </section>
            </section>
        </div>
    )
}