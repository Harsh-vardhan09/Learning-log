// let arr=[1,2,3];

// arr.sayHello=()=>{
//     console.log("hi im arr");
    
// }

// function personMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi my name is ${this.name}`);
            
//         }
//     }
//     return person;
// }

// let p1=personMaker("adam",25);//copy 
// let p2=personMaker("adam",25)//copy 

//constructor- 
// function Person(name,age){
//         this.name=name;
//         this.age=age; 
// }

// Person.prototype.talk=function(){
//     console.log(`hi,my name is ${this.name}`);
// }

// let p1= new Person("adam",25);
// let p2= new Person("eve",25);

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi this is my ${this.name}`);
        
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}

let p1= new Person("adam",25);
let p2= new Student("eve",25,95);
