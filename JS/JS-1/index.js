//map, filter, arrow fns


const sum=(a,b)=>{
   return a+b;
}


/* 
given an array give me back a new array in which every
value is mul by 2
[1,2,3,4,5]
[2,4,6,8,10]
*/

/* 
we know we can take an function as argument for an function
what if we had global function that took arr 1 and
the function to mul 2 or anything else to do this
called map
*/
let arr=[1,2,3,4,5];

let ans=arr.map(function transform(i){
    return i*2;
});
console.log(ans);


//filter
//what if i tell you, given an input array give me back all even values from it 

/*
If we create filtering logic which return true or false based 
on the input 
*/


const out=arr.filter(function (n){
    if (n % 2==0) {
        return true;
    } else {
        return false;
    }
}
)

console.log(out);
