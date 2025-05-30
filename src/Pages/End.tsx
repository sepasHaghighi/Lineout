import Header from "../Components/Header"
export default function End() {
    return (
        <div className="flex flex-col items-center bg-[#7FC859] h-screen">
            <Header menu={false} back={false} logoColor="black" />
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <h1 className=" w-[340px] text-center">Thanks for using Lineout.</h1>
            </div>
        </div>
    )
}