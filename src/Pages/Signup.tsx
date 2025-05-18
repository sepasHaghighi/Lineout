import Logo from "../Components/Logo"
import TextField from "../Components/TextField"
import Button from "../Components/Button"
import Facebook from "@/assets/Facebook.svg"
import Google from "@/assets/Google.svg"
import X from "@/assets/X.svg"
import { useState } from "react"
import Header from "../Components/Header"

export default function Signup() {
    // Watch the username field
    const[username, setUsername] = useState('')
    function getUsername(event:React.ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }

    // Watch first password field
    const[firstPass, setFirstPass] = useState('')
    function getFirstPass(event:React.ChangeEvent<HTMLInputElement>){
        setFirstPass(event.target.value)
    }

    // Watch second password field
    const[secondPass, setSecondPass] = useState('')
    function getSecondPass(event:React.ChangeEvent<HTMLInputElement>){
        setSecondPass(event.target.value)
    }

    // Situations where the sign up button should be deactive
    const buttonDeactiveStatus = (username==''||firstPass==''||secondPass==''||firstPass!=secondPass) ? true : false

    return (
        <div className="flex flex-col items-center">
            <Header menu={false}/>
            <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1>Sign up</h1>
                    <TextField type="text" placeholder="Username" value="" onChange={getUsername}/>
                    <TextField type="password" placeholder="Password" value="" onChange={getFirstPass}/>
                    <TextField type="password" placeholder="Repeat password" value="" onChange={getSecondPass}/>
                </div>
                <div className="flex flex-col gap-4">
                    <Button link='/searchBy' text="Sign me up!" disabled={buttonDeactiveStatus} />
                    <section className="flex flex-row gap-4 justify-center items-center">
                        <a href="#"><img src={Facebook} alt="" /></a>
                        <a href="#"><img src={Google} alt="" /></a>
                        <a href="#"><img src={X} alt="" /></a>
                    </section>
                </div>

            </div>
        </div>
    )
}