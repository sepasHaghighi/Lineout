import Header from "../Components/Header";
import Button from "../Components/Button";

export default function Fun() {
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={true} />
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-between items-center gap-4 h-screen pt-30">
                    <section className="flex flex-col gap-4 items-center">
                        <span className="material-symbols-rounded large">
                            family_star
                        </span>
                        <section className="flex flex-col items-center">
                            <h1>Let's have some fun!</h1>
                            <h2>What are you up to?</h2>
                        </section>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        <Button link='/book/redirect' text="Book" disabled={false} />
                        <Button link='/music/redirect' text="Music" disabled={false} />
                        <Button link='/game/redirect' text="Game" disabled={false} />
                    </section>
                </div>
            </div>
        </div>
    )
}