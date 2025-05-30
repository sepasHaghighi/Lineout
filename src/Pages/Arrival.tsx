import Header from "../Components/Header"
import Button from "../Components/Button"
import Review from "../Components/Review"
export default function Arrival() {
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={true} />
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-between items-center gap-4 h-screen pt-30">
                    <section className="flex flex-col gap-4 items-center">
                        <section className="flex flex-col items-center">
                            <h1>Enjoy!</h1>
                            <h2 className="w-[340px] text-center">Please submit a review for the service
                                when you’re done.</h2>
                            {/*Review component takes care of rating.*/}
                            <Review />
                        </section>
                        <textarea name="" id="" placeholder="Write a review" className=" w-[340px] h-[200px] border border-gray-200 rounded-2xl p-4"></textarea>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        <Button link='/end' text="Submit" disabled={false} />
                    </section>
                </div>
            </div>
        </div>
    )
}