import { useParams } from "react-router-dom"
import Header from "../Components/Header"
import restaurantImage from "@/assets/Restaurant.jpg"
import { places } from "../data"
import Button from "../Components/Button"
import { useState } from "react"
import Popup from "../Components/Popup"

export default function Reservation() {
    // Show popup when user hits awesome button
    const [showPopup, setShowPopup] = useState(false)
    function handleAwesome(){
        setShowPopup(prevShowPopup => !prevShowPopup)
    }

    // Check the category and place that the user has selected
    const { category, place } = useParams<{ category: keyof typeof places, place: string }>()
    if (!category || !place) { return null }
    function slugify(str: string) {
        return str.toLowerCase().replace(/[\s']/g, '');
    }
    const selectedCategory = places[category]
    const selectedPlace = selectedCategory.find(item => slugify(item.name) === slugify(place))
    
    // Return UI
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={false} />
            <h1 className="congrats pt-4">Congratulation! <br /> You're spot has been reserved.</h1>
            {/* Middle section: Info about the reservation */}
            <section className="flex flex-col justify-between items-center pt-14">
                {/* Restaurant info */}
                <section className="flex flex-row gap-2 justify-start w-full items-start">
                    <img src={restaurantImage} alt="restaurant image" className="w-[100px] h-[100px] object-cover rounded-xl" />
                    {/* Text */}
                    <section>
                        <h2 className="text-gray-500">{selectedPlace?.name}</h2>
                        <h4 className="text-gray-500">{selectedPlace?.type}</h4>
                    </section>
                </section>
                {/* Reservation info */}
                <section className="pt-4">
                    <h3 className="text-xl text-gray-400">Your turn number: <span className="text-gray-500">{24}</span></h3>
                    <h3 className="text-xl text-gray-400">Estimated waiting time: <span className="text-gray-500">{45} minutes</span></h3>
                    <h3 className="text-xl text-gray-400">Estimated travel time: <span className="text-gray-500">{15} minutes</span></h3>
                </section>
            </section>
            {/* Bottom section: Options */}
            <section className="flex flex-col gap-4 items-center h-[40vh] justify-end">
                <Button text="Awesome!" onClick={() => handleAwesome()} disabled={false} />
                <Button text="I have free time" link="/fun" disabled={false} />
                <a href="" onClick={(e) => {
                e.preventDefault();
                window.history.back();
            }}>Cancel</a>
            </section>
            {showPopup && <Popup message="You can close the app!" description="We'll notify you when to hit the road." buttonText="Ok" buttonAction={()=>handleAwesome()}/>}
        </div>
    )
}