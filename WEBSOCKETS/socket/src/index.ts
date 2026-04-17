import {WebSocketServer} from 'ws'

const wss=new WebSocketServer({port:8080})

//event handler
wss.on('connection',function(socket){
    console.log("hello");
    socket.on('message',(e)=>{
        // console.log(e.toString());
        // console.log(e.toString()==="ping");
        
        //here the ping was coming with extraline from postman so thats why giving false
        if(e.toString()==='ping'){
            socket.send("pong")
        }
    })
})
