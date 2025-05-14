import visibleIcon from "@/assets/eye.svg"
import invisibleIcon from "@/assets/eye-off.svg"
import { useState } from "react"

type textFieldType ={
    type:'text' | 'password'
    placeholder : string,
    value : string
}

export default function TextField(props:textFieldType){
    const [passVisibility , setPassVisibility] = useState(false)
    function changePassVisibility(){
        setPassVisibility(passVisibility=>!passVisibility)
    }

    return(
        <>
        {
        props.type === "text" ? 
        <div tabIndex={0} className="w-[320px] h-[48px] border border-[#AEAEB2] bg-white rounded-lg p-2 flex justify-between items-center focus:border focus:border-[#7FC859]">
        <input type="text" placeholder={props.placeholder}  defaultValue={props.value} className="focus:outline-none focus:border-none" />
        </div>
        :
        <div tabIndex={0} className="w-[320px] h-[48px] border border-[#AEAEB2] bg-white rounded-lg p-2 flex justify-between items-center focus:border-[#7FC859]">
        <input type={passVisibility? 'text':'password'} placeholder={props.placeholder}  defaultValue={props.value} className="focus:outline-none focus:border-none" />
        <a onClick={()=>changePassVisibility()}>{!passVisibility ? <img src={visibleIcon} alt="" /> : <img src={invisibleIcon} alt="" /> }</a>
        </div>
        }
        </>  
    )
}