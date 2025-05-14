import Logo from "../Components/Logo"

export default function Splash(){
    return(
        <div className="w-[100vw] flex flex-col justify-center items-center pt-[410px]">
            <section className="pb-[100px]"><Logo/></section>
            <h1>lineout</h1>
            <p className="moto">No need to stay in lines anymore!</p>
        </div>
    )
}