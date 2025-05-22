import Header from "../Components/Header"
import Button from "../Components/Button"
export default function SearchBy(){
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={false}/>
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1>Let's get you in  line!</h1>
                    <h2>Search by</h2>
                    <Button link='/availableServices' text="Service" disabled={false} />
                    <Button link='/search' text="Name" disabled={false} />
                </div>
            </div>
        </div>
    )
}