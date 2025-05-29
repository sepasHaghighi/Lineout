import Logo from "./Logo";
import { useAuthStore } from "../lib/useAuthStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


type HeaderProps = {
    menu: boolean
    back: boolean
    logoColor?: "black"
}
export default function Header(props: HeaderProps) {
    // Retrive the current user
    const user = useAuthStore(state => state.user)
    // Handle sign out 
    function handleSignout() {
        useAuthStore.getState().setUser(null)
    }
    // State to control display of menu
    const [showMenu, setShowMenu] = useState(false)
    // Handle navigation to homepage on click of logo
    const navigate = useNavigate()

    return (
        <nav className={`w-full sticky top-0 ${props.logoColor === "black" ? "bg-[#7FC859]" : "bg-white"} flex flex-row justify-center items-center p-6`}>
            <a href="" className={`flex flex-row items-center ${!props.back ? 'invisible' : ''}`} onClick={(e) => {
                e.preventDefault();
                window.history.back();
            }}>
                <span className="material-symbols-rounded ">
                    arrow_back
                </span>
            </a>
            <section className="w-full flex justify-center cursor-pointer" onClick={() => navigate('/searchBy')}>
                <Logo size="small" logoColor={props.logoColor}/>
            </section>
            {user && <span className='material-symbols-rounded focus:bg-gray-400 cursor-pointer' onClick={()=>setShowMenu(!showMenu)}> account_circle </span>}
            {showMenu && <section className="fixed top-20 right-4 flex flex-col border border-[#7FC859] bg-white rounded-2xl items-end p-4">
                <p>{user?.email}</p>
                <a href="/Lineout/" onClick={()=>handleSignout()}>Sign out</a>
            </section>}
        </nav>
    )
}