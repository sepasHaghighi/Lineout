import { useNavigate } from 'react-router-dom';
export default function Button(
    props:{
        link?:string, 
        text:string, 
        disabled:boolean,
        onClick?: () => void;
    }) {
    function handleClick(){
        if (props.disabled){
            return
        } else if (props.link){
            navigate(props.link)
        } else if (props.onClick){
            props.onClick()
        }
    }
    const navigate = useNavigate()
    return (
        <button 
        onClick = {handleClick}
        className="w-[320px] h-[46px] border-2 border-[#7FC859] rounded-full hover:bg-[#E5F4DE] cursor-pointer active:bg-[#7FC859] disabled:border disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-gray-50 disabled:cursor-not-allowed"
        disabled={props.disabled}
        >{props.text}</button>
    )
}