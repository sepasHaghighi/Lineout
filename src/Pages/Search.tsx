import Header from "../Components/Header"
import Button from "../Components/Button"
import TextField from "../Components/TextField"
import { useState } from "react"

export default function Search() {
    // Check what's written in the search field
    const[searchInput, setSearchInput] = useState('')
    function searchHandle(event:React.ChangeEvent<HTMLInputElement>){
        setSearchInput(event.target.value)
    }
    return (
        <div className="flex flex-col items-center">
            <Header menu={true} back={true} />
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-start items-center gap-20 h-screen pt-30">
                    <section className="flex flex-col gap-4 items-center">
                        <span className="material-symbols-rounded large">
                            search
                        </span>
                        <section className="flex flex-col items-center">
                            <h1 className="text-center">What are you looking for?</h1>
                        </section>
                    </section>
                    <section className="flex flex-col gap-4 items-center justify-start">
                        <TextField 
                            type="text" 
                            placeholder="Name of service" 
                            value=""
                            onChange={searchHandle}
                            />
                        <Button link={`/searchResult/${searchInput}`} text="Search" disabled={false} />
                    </section>
                </div>
            </div>
        </div>
    )
}