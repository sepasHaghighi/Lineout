import Header from "../Components/Header";
import PlaceSelector from "../Components/PlaceSelector";
import { useParams } from "react-router-dom";
import { places } from "../data"

export default function Places() {
    const { category } = useParams<{ category: keyof typeof places }>();
    // function to render icon based on selected category
    function renderIcon() {
        switch (category) {
            case "restaurants":
                return (<span className="material-symbols-rounded large">
                    room_service
                </span>)
            case 'stores':
                return (<span className="material-symbols-rounded large">
                    store
                </span>)
            case 'healthcares':
                return (<span className="material-symbols-rounded large">
                    medical_services
                </span>)
        }
    }

    // create the list of places
    let list = null
    if (category) {
        list = places[category].map(place => <PlaceSelector link={`/places/${category}/${place.name}`} key={place.name} title={place.name} distance={place.distance} rating={place.rate} />)
    }
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={true} />
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-between items-center gap-4 h-screen pt-30">
                    <section className="flex flex-col gap-4 items-center">
                        {renderIcon()}
                        <h1>{category ? category.charAt(0).toUpperCase() + category.slice(1) : null}</h1>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        {list}
                    </section>
                </div>
            </div>
        </div>
    )
}