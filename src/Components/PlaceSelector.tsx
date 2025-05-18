import { useNavigate } from "react-router-dom"

type PlaceselectorType = {
    title: string
    distance: number
    rating: number
    link: string
}

export default function PlaceSelector(props: PlaceselectorType) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(props.link)} className="flex flex-row items-center justify-between h-[64px] w-[360px] px-6 border-2 border-[#7FC859] rounded-full hover:bg-[#E5F4DE] cursor-pointer active:bg-[#7FC859]">
            <section className="flex flex-col justify-around">
            <h3 className="text-2xl">{props.title}</h3>
            <section className="flex flex-row items-center">
                <h4 className="text-md text-gray-500">Distance: </h4>
                <h4 className="text-md text-gray-500">{props.distance} km</h4>
            </section>
            </section>
            <section className="flex flex-row items-center">
                <h4 className="text-md text-gray-500">{props.rating}/5</h4>
                <span className="material-symbols-rounded text-gray-400">
                    star
                </span>
            </section>
        </div>
    )
}