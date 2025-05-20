import logo from "@/assets/Lineout - Logo.svg"
import logoSmall from "@/assets/Lineout - Logo - small.svg"
import logoBlack from "@/assets/Lineout - Logo - Black.svg"
type logoProps = {
    size : "big" | "small"
    logoColor?: "black"
}

export default function Logo(props:logoProps){
    let imageSource
    if(props.logoColor){
        imageSource = logoBlack
    }else if(props.size === "big"){
        imageSource = logo
    }else{
        imageSource = logoSmall
    }
    return(
        <img src={imageSource} alt="lineout logo"/>
    )
}