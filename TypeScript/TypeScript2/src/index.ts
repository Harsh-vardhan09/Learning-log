// interface User{
//     id:string,
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }


// const user:User=User.find({})//database call
//we can do it by creating a new prop where we can call it as an prop
//this will cause if we make a change in the User we need to change in the updated/new prop as well

//so we use pick

// type UpdateProps=Pick<User,'name'|'age'|'email'>

// function UpdateUser(updateProps:UpdateProps){
//     //hit the database to update the user
// }

// Partials

// type UpdateProps=Pick<User,'name'|'age'|'email'>
// type UpdatePropsOptional=Partial<UpdateProps>;

// function UpdateUser(updateProps:UpdatePropsOptional){
//     //hit the database to update the user
// }
//  UpdateUser({name:"aarsh"});

//read only

// const user={
//     name:"harsh",
//     age:32
// }

// user.name='adsfsd';

//we can do this even though the user is const
//because we are not changing its refernce of the user
//not for the value in the object or array.

// type ReadObj={
//     name:string,
//     age:number
// }
// const obj:ReadObj={
//     name:"harsh",
//     age:32,
// }

// const obj2:Readonly<ReadObj>={
//     name:"harsh",
//     age:32,
// }

//obj.age=12;//here ts is complaining since this is readonly now


//records and map

type User={
    id:string,
    username:string
}
type Users={
    [key:string]:User
}


const user={
    "ras@qd1":{
        id:"1",
        username:'harsh'
    },
    "ras@qd2":{
        id:'2',
        username:"aarsh"
    }

}

//records and maps

// type UsersRecord=Record<string,{name:string,age:number}>

type UsersMap={
    name:string,
    age:number
}

const UserMap=new Map<string,UsersMap>();

UserMap.set("ras@qd1",{
        name:'aarsh',
        age:21
    })
UserMap.set("ras@qd2",{
        name:"harsh",
        age:32
    })

const newUser=UserMap.get("ras@qd2")
console.log(newUser);



// exclude
//it lets you exclude a bunch of literals

type EventType='click'|'scroll'|'mousemove'
type ExcludeEvent=Exclude<EventType,'scroll'>;//click and ,mouse move

const handleEvent=(event:ExcludeEvent)=>{
    console.log(`handle event:${event}`);
}

handleEvent('click');

