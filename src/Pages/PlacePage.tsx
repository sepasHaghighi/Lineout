import { useParams } from "react-router-dom"
import { places } from "../data"
import Header from "../Components/Header";
import Button from "../Components/Button";
import restaurantImage from "../assets/Restaurant.jpg"

export default function PlacePage() {
    function slugify(str: string) {
        return str.toLowerCase().replace(/[\s']/g, '');
    }
    const { category, place } = useParams<{ category: string, place: string }>();
    // Find selected place from the places array
    if (!category || !place) { return null }
    const selectedCategory = places[category]
    const selectedPlace = selectedCategory.find(item => slugify(item.name) === slugify(place))

    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={true} />
            <section className="flex flex-col items-center gap-4 justify-center w-[375px] p-4">
                <img src={restaurantImage} alt="" className="w-[100vw] rounded-xl" />
                <section className="flex flex-row justify-between w-full items-center">
                    <h1>{place}</h1>
                    <section className="flex flex-row items-center">
                        <h4 className="text-md text-gray-500">{selectedPlace?.rate}/5</h4>
                        <span className="material-symbols-rounded text-gray-400">
                            star
                        </span>
                    </section>
                </section>
                <h4 className="text-gray-500">{selectedPlace?.description}</h4>
                <section className="flex flex-col w-full">
                    <h2 className="w-full">People in line: {20}</h2>
                    <h2 className="w-full">Estimated travel time: {10} m</h2>
                </section>
                <section className="h-[20vh] flex flex-col justify-center">
                <Button link={`/places/${category}/${place}/reservation`} text="Reserve my spot" disabled={false} />
                </section>
            </section>
        </div>
    )
}