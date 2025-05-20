import Header from "../Components/Header"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Redirect(){
    const {funCategory} = useParams()
    // Decide which link to redirect to based on user's selection
    function selectLink (){
        switch(funCategory){
            case 'book' :
                return "https://www.goodreads.com/"
            case 'music' :
                return "https://open.spotify.com/"
            case 'game' :
                return 'https://poki.com/'
        }
    }
    const link = selectLink()
    // Redirect to selected link in a second
    useEffect(() => {
        const timer = setTimeout(() => {
          window.location.href = `${link}`;
        }, 1000); // 5000ms = 5 seconds
    
        return () => clearTimeout(timer); // Cleanup
      }, []);
    
      return (
        <div className="flex flex-col items-center bg-[#7FC859] h-screen">
            <Header menu={false} back={false} logoColor="black"/>
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-between items-center gap-4 h-screen pt-30">
                    <section className="flex flex-col gap-4 items-center">
                    <section className="flex flex-col w-[375px] items-center">
                    <h1 className="text-center">You'll be redirected to your selected app in a second.</h1>
                    </section>
                    </section>
                </div>
            </div>
        </div>
    )
}