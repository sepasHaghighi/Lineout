import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useState,useEffect } from 'react'

export default function Review() {
    const starList = []
    for (let i=0 ; i<5 ; i++){
        starList.push(<AiOutlineStar size={32} className="text-gray-400 hover:text-amber-200 cursor-pointer" onClick={()=>handleRate(i)}/>)
    }
    const[rateList,setRateList]=useState<React.ReactElement[]>(starList)
    function handleRate(index:number){
        const newRateList = []
        for (let i=0 ; i<5 ; i++){
            if(i<=index){
                newRateList.push(<AiFillStar key={i} size={32} className="text-amber-300 hover:text-amber-200 cursor-pointer" onClick={()=>handleRate(i)}/>)
            }else{
                newRateList.push(<AiOutlineStar key={i} size={32} className="text-gray-400 hover:text-amber-200 cursor-pointer" onClick={()=>handleRate(i)}/>)
            }
        }
        setRateList(newRateList)
    }
    
    return (
        <div className="flex flex-row gap-2 justify-center items-center pt-4">
            {rateList}
        </div>
    )
}