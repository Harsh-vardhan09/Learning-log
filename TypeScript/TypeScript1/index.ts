// we can write both typeScipt and js code file both

let y: number = 1;//type inferencing

console.log(y);



function greet (firstname:string){
    console.log("hello"+firstname);

}
greet("aarsh");

//number,string, any
let x:any=1;
x=true;
x="harkirat";
x="random";

// dont use any as it is not using the type safety of ts

//sum of two number
//since two numbers are being added output is number so we dont need to explicitly give it.

function sum(a:number,b:number){
    return a+b;
}
let ans=sum(1,2);

console.log(ans);


//if above age of 18 give true
//here the return is implicitly giving the type of the output

function isLegal(age:number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal(19));


//the type of the argument and return is return here its not returning anything so void
//if it was returning number we would write fn:()=>number
//if it ahs argument we have to give the return type and argument in it
function delayedOutput(fn:()=>void){
    setTimeout(fn,1000);
}

delayedOutput(function(){
    console.log("hello");
    
})

