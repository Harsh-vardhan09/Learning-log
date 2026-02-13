import { useState } from 'react'


const ChildComponent = () => {
  console.log("Child rendered!"); 
  return <div>I am stable!</div>;
};

function Parent({children}){
    const [count,setCount]=useState(0);
  return (
    <>
    <button onClick={()=>setCount((c)=>c+1)}>count {count}</button>  
    {children}
    </>
  )
}

export {Parent,ChildComponent}