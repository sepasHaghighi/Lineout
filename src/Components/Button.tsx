import { useNavigate } from 'react-router-dom';
export default function Button(props:{link:string, text:string, disabled:boolean}) {
    const navigate = useNavigate()
    return (
        <button 
        onClick={()=>navigate(props.link)} 
        className="w-[320px] h-[46px] border-2 border-[#7FC859] rounded-full hover:bg-[#E5F4DE] cursor-pointer active:bg-[#7FC859] disabled:border disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-gray-50 disabled:cursor-not-allowed"
        disabled={props.disabled}
        >{props.text}</button>
    )
}