function sum(a: number, b: number): number {
    return a + b;
}

function isEven(num: number): boolean {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
console.log(sum(2, 5));
console.log(isEven(5));



//interfaces and types

let user1 = {
    name: "aarsh",
    age: 21,
    address: {
        city: "chandigarh",
        country: "india",
        pincode: 123456
    }
}

// function isLeagal(user1):boolean{
//     // here user is a complex data type 
// }

interface Address {
    city: string,
    pincode: number,
    country: string,
    houseNumber?: string
}

interface User {
    name: string,
    age: number,
    address?: Address //this make adress optional it can exist or not

};

interface Office {
    address: Address
}

let user: User = {
    name: "aarsh",
    age: 21,
    address: {
        city: "chandigarh",
        country: "india",
        pincode: 123456
    },
}

function isLegal(user: User): boolean {
    return user.age >= 18;
}

const ans = isLegal(user);

if (ans == true) {
    console.log("allowed to vote");
} else {
    console.log("cannot vote");

}

interface People {
    name: string,
    age: number,
    greet?: () => string
    greet2?(): string
}

let person: People = {
    name: "aarsh",
    age: 21,
    greet: () => {
        return "hi"
    }
}

// let greeting =person.greet();
// console.log(greeting);


interface User3 {
    name: string,
    age: number,
    isLegal(): boolean;
}


class Manager implements User3 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18
    }
}


class Manager2 implements User3 {

    constructor(public name: string, public age: number) {
    }
    isLegal() {
        return this.age > 18
    }
}

let user2 = new Manager("john", 30);

console.log(user2);

//we create an class in case we need to extend a class in a future

abstract class Users{
    name:string;
    constructor(name:string){
        this.name=name
    }
    abstract greet():string;
    hello(){
        console.log("hi there");
        
    }
}

class Employees extends Users{
    name:string;
    constructor(name:string){
        super(name)
        this.name=name
    }
    greet(){
        return "hi" + this.name
    }
}

// 1 hr 9 min 
//In interface there is equal to sign and in type there is not 

type user={
    name:string,
    age:number,
}

function isLegals(user:user){
    return user.age>18;
}


//intersection

type Employee={
    name:string,
    startDate:Date,
}

type Managers={
    name:string,
    department:string
}

type TeamLead= Employee & Managers;

const E:Employee={
    name:"aarsh",
    startDate:new Date(),
}

const M:Managers={
    name:"aarsh",
    department:"It"
}


const teamLead:TeamLead={
    name:"aarsh",
    startDate:new Date(),
    department:"It"
}


//unions

type GoodUser={
    name:string,
    gift:string
}

type BadUser={
    name:string,
    ip:string
}

type NewUser=GoodUser | BadUser;

const newUser:NewUser={
    name:"aarsh",
    ip:"asdas",
    gift:"adasad"
}

/// interfaces vs types
//create two types called user and admin 
// Create a function that takes either a user or an admin
//as an input, and return a string saying "welcome [name]"


interface Admin{
    name:string,
    permission:string
}

interface User{
    name:string,
    age:number
}

type UserOrAdmin=User|Admin;

function greet(user:UserOrAdmin){
    console.log("welcome"+user.name);
}


//given array 

function getMax(nums: number[]){
    let maxValue= -1000000000;
    for(let i of nums){
        if(nums[i]>maxValue){
            maxValue=nums[i];
        }
    }
    return maxValue;
}

getMax([1,2,3,4,5,6,7,8]);

interface Addresses{
    city:string,
    pincode:string
}

interface Users4{
    name:string,
    age:number,
    addresses:Address[]
}


function filterUsers(users:Users4[]){
    let ans=[];
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            ans.push(users[i]);
        }
    }
}