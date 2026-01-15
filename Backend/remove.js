const eventEmitter=require('event');
const myEmitter= new eventEmitter();

function showMessage(){
    console.log("this will run once removed");
    
}

myEmitter.on('onceEvent',showMessage);

myEmitter.emit(onceEvent);

myEmitter.removeListner('onceEvent',showMessage);

myEmitter.emit('onceEvent');

