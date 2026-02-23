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