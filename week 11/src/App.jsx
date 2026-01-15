import {useFetch} from './Hooks/UseFetch';
import './App.css'
import { useEffect, useRef, useState } from 'react';


const useDebounce=(originalFn)=>{
  const currentClock=useRef();
  
  const fn =()=>{
    clearTimeout(currentClock.current);
    currentClock.current=setTimeout(originalFn,200);
  }
    
  return fn;
}

function App() {
  function sendDataToBackend(){
    fetch("api.amazon.com/search/");
  }

  const debounced=useDebounce(sendDataToBackend);

  // const [currentPost,setCurrentPost]=useState(1);
  // const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost)
  // if(loading){
  //   return <div>
  //     loading.....
  //   </div>
  // }






  return (
      <>
      <input type="text" onChange={debounced} />
      </>







    // <div>
    //   <button onClick={()=>setCurrentPost(1)}>1</button>
    //     <button onClick={()=>setCurrentPost(2)}>2</button>
    //       <button onClick={()=>setCurrentPost(3)}>3</button>
    //   {JSON.stringify(finalData)}
    // </div>
  )
}

export default App
