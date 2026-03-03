//creating a http server 
//express
//node default library => no

const express=require("express");
const app=express();

app.use(express.json());

// function sum(n){
//     let ans=0;
//     for (let index = 0; index < n; index++) {
//         ans=ans+index;
//     }
//     return ans;
// }

//req,res=>request,response

let users=[{
    name:"john",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]

function badKidney(){
     let atleastOneBadKidney=false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].length){
            atleastOneBadKidney=true;
        }  
    }
    return atleastOneBadKidney;
}


app.get('/',(req,res)=>{ //this is callback function will send to the address
    const johnKidney=users[0].kidneys;
    const numKid=johnKidney.length;
    let numberOfhealthyKidney=0;
    for (let i = 0; i < numKid; i++) {
        if (johnKidney[i].healthy) {
            numberOfhealthyKidney++;
        }  
    }
    const numberOfbadkidneys=numKid-numberOfhealthyKidney;
    res.json({
        numKid,
        numberOfhealthyKidney,
        numberOfbadkidneys
    })
})

app.post('/',(req,res)=>{ 
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    
    res.json({
        msg:"done"
    })
})

app.put('/',(req,res)=>{ 
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy=true;
    }
    res.json({
        msg:"Updated"
    })
})

app.delete('/',(req,res)=>{ 
    if(badKidney){
        const newKidney=[];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy){
                newKidney.push({
                    healthy:true
                })
            } 
        }
        users[0].kidneys=newKidney;
        res.json({
            msg:"clear"
        })
    }else{
        res.json({
            msg:"you have no bad kidney"
        })
    }
})


app.listen('8080',()=>{
    console.log(`app is working on http://localhost:8080`);
})

