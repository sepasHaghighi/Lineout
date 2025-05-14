import { useNavigate } from 'react-router-dom';
export default function Button(props:{link:string, text:string}) {
    const navigate = useNavigate()
    return (
        <button onClick={()=>navigate(props.link)} className="w-[320px] h-[46px] border-2 border-[#7FC859] rounded-full hover:bg-[#E5F4DE] cursor-pointer active:bg-[#7FC859]">{props.text}</button>
    )
}