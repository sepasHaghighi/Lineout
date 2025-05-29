import Header from "../Components/Header"
import locationImage from "@/assets/Location.jpg"
import Button from "../Components/Button"
import { useState } from "react"
import Popup from "../Components/Popup"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Navigation() {
    // Take the location from URL
    const {location} = useParams<{location:string}>()

    // Handle user not arriving on time
    const [showDelayPopup, setShowDelayPopup] = useState(false)
    function handleDelayPopup() {
        setShowDelayPopup(prevShowDelayPopup => !prevShowDelayPopup)
    }
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={false} />
            <section className="flex flex-col items-center gap-4 justify-center w-[375px] p-4">
                <h1>Direction</h1>
                <img src={locationImage} alt="" className="w-[100vw] rounded-xl" />
                <section className="h-[40vh] flex flex-col justify-end items-center gap-4">
                    <Button link={`/navigation/${location}/arrival`} text="I arrived" disabled={false} />
                    <Button onClick={()=>handleDelayPopup()} text="I need more time" disabled={false} />
                    <a href="/Lineout/searchBy">Cancel</a>
                </section>
            </section>
            {/* Show delay popup  when user taps on "I need more time".*/}
            {showDelayPopup && <Popup message="No worries!" description="We’ll let the next people in line receive the service until you arrive." buttonText="Alright" buttonAction={() => handleDelayPopup()} secondButton={true} secondaryButtonText="Cancel reservation" secondaryButtonAction={() => navigate('/searchBy')} />}
        </div>
    )
}