"use strict";
// we can write both typeScipt and js code file both
Object.defineProperty(exports, "__esModule", { value: true });
// let x: number = 1;//type inferencing
// console.log(x);
// function greet (firstname:string){
//     console.log("hello"+firstname);
// }
// greet("aarsh");
//number,string, any
// let x:any=1;
// x=true;
// x="harkirat";
// x="random";
// dont use any as it is not using the type safety of ts
//sum of two number
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
//isLegal
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(19));
//# sourceMappingURL=index.js.map