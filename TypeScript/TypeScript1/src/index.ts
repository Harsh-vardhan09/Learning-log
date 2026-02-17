// we can write both typeScipt and js code file both

// let y: number = 1;//type inferencing
// console.log(y);



// function greet (firstname:string){
//     console.log("hello"+firstname);

// }
// greet("aarsh");

// //number,string, any
// let x:any=1;
// x=true;
// x="harkirat";
// x="random";

// // dont use any as it is not using the type safety of ts

// //sum of two number
// //since two numbers are being added output is number so we dont need to explicitly give it.

// function sum(a:number,b:number){
//     return a+b;
// }
// let ans=sum(1,2);

// console.log(ans);


// //if above age of 18 give true
// //here the return is implicitly giving the type of the output

// function isLegal(age:number){
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isLegal(19));


// //the type of the argument and return is return here its not returning anything so void
// //if it was returning number we would write fn:()=>number
// //if it ahs argument we have to give the return type and argument in it
// function delayedOutput(fn:()=>void){
//     setTimeout(fn,1000);
// }

// delayedOutput(function(){
//     console.log("hello");
    
// })

// //50:57 left at time of player

// function delayedCall(anotherfn:(a:string)=>void){
//     setTimeout(anotherfn,1000);
// }

// function greet2(name:string){
//     console.log("hello"+name);
// }
// delayedCall(greet2);//here we can't give since return type is void


// let greet3=()=>console.log("hi there");

// const greet4=(name)=>`hello,$(name)`;//effect of noImplicitAny false in the ts.config

// function greet6(user:{
//     name:string,
//     age:number,
    
// }){
//     console.log(user.name);
// }

// function greet7(user:{
//     name:string,
//     age:number,
//     address:{
//         streetName:string,
//         city:string
//     }
// }){
//     console.log(user.name);
// }

// greet6({
//     name:"aarsh",
//     age:21
// });

// let id={
//     name:"aarsh",
//     age:21,
// }

// greet6(id);

// let user:{
//     firstName:string,
//     age:number
// }={
//     firstName:"harsh",
//     age:21
// }

// //here we have to repeat the same object datatypes again and again
// //so we use interface to create custom interfaces

// interface userType{
//     firstName:string,
//     lastName:string,
//     age:number
// }

// function legal(user:userType){
//     if(user.age>=18){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

//this is a react component
// interface todoType{
//     title:string,
//     description:string,
//     done:boolean
// }
// interface TodoInput{
//     todo:todoType
// }

// function Todo(props:TodoInput){
    
// }


//types

// type sumInput=string|number;

// // interface sum=string|number// you cant do this in interface

// function sum(a:sumInput,b:sumInput){
    
// }

interface Manager{
    name:string,
    age:number
}

interface Employee{
    name:string,
    department:string
}

type TeamLead=Manager&Employee;

let t:TeamLead={
    name:"aarsj",
    age:32,
    department:"ceo"
}


type s=string|number
let x:s=1;
let y:s="asd"

let z=x+y;
//ts can sum number+number
//ts can sum string+number
//ts can sum string + string

//ts cant sum (string|number)+(string+number)


// function sum(x:s,y:s){
//     return x+y
// }