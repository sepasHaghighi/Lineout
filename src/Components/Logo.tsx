import logo from "@/assets/Lineout - Logo.svg"
import logoSmall from "@/assets/Lineout - Logo - small.svg"
type logoProps = {
    size : "big" | "small"
}
export default function Logo(props:logoProps){
    return(
        <img src={props.size==='big' ? logo : logoSmall} alt="lineout logo"/>
    )
}