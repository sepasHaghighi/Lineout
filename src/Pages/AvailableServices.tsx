import Header from "../Components/Header"
import Button from "../Components/Button"
export default function Availableservices() {
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} />
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-between items-center gap-4 h-screen pt-30">
                    <section className="flex flex-col gap-4 items-center">
                    <span className="material-symbols-rounded large">
                        category
                    </span>
                    <section className="flex flex-col items-center">
                    <h1>Available Services</h1>
                    <h2>What are you looking for?</h2>
                    </section>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        <Button link='/places/restaurants' text="Restaurant" disabled={false} />
                        <Button link='/places/stores' text="Store" disabled={false} />
                        <Button link='/places/healthcares' text="Healthcare" disabled={false} />
                    </section>
                </div>
            </div>
        </div>
    )
}