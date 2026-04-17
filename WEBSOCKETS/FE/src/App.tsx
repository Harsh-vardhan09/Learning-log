import { useEffect, useRef, useState } from 'react';
import './App.css'

// create a useSocket hook we will create

const App = () => {
  const [socket,setSocket]=useState();
  const inputRef=useRef("");

  const sendMessage = () => {
    if(!socket) return ;
    const mes=inputRef.current.value;
    //@ts-ignore
    socket.send(mes)
  };
  
  useEffect(()=>{
    const ws=new WebSocket("ws://localhost:8080")
    setSocket(ws);
    ws.onmessage=(e)=>{
      alert(e.data)
    }

  },[]) 
  return (
    <div>
      <input type="text" placeholder="Message..."  ref={inputRef}/>
      <button onClick={sendMessage}>send</button>
    </div>
  );
};

export default App;
