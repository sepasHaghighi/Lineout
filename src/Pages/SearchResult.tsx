import { useParams } from "react-router-dom"
import Header from "../Components/Header"
import searchFunction from "../Utils/SearchFunction"
import { places } from "../data"
import PlaceSelector from "../Components/PlaceSelector"


export default function SearchResult() {
    // Check URL for searched term
    const { searchTerm } = useParams()

    // Search for searchTerm among the data
    const searchResultList: React.ReactElement[] = [];

    if(searchTerm){
        const searchResult = searchFunction(places,searchTerm)
        searchResult.forEach((entry) => {
            const category = Object.keys(entry)[0]; // get the actual key
            const place = entry[category]; // this is a Place
            searchResultList.push(
              <PlaceSelector
                key={`${category}-${place.name}`}
                title={place.name}
                distance={place.distance}
                rating={place.rate}
                link={`/places/${category}/${place.name}`}
              />
            );
          });
            
    }

    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={true} />
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-between items-center gap-4 h-screen pt-30">
                    <section className="flex flex-col gap-4 items-center">
                        <span className="material-symbols-rounded large">
                            location_searching
                        </span>
                        <section className="flex flex-col items-center">
                            <h1>Search results for</h1>
                            <h2>{searchTerm}</h2>
                        </section>
                    </section>
                    <section className="flex flex-col gap-4 items-center">
                        {searchResultList}
                    </section>
                </div>
            </div>
        </div>
    )
}