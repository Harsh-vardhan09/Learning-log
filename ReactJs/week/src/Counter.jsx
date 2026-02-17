import { useEffect, useState } from "react"


export default function Counter() {

    const [count,setCount]=useState(0);

    let increaseCount=(currentValue)=>{
        setCount(currentValue=>currentValue+1);
    }



    useEffect(function(){
        setInterval(increaseCount,1000);
    },[])
    
    return(
        <div>
            {count}
        </div>
    )
}