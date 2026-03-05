
### Maps:-

we know we can take an function as argument for an function
what if we had global function that took arr 1 and
the function to mul 2 or anything else to do this
called map


SO 
1. we have an arr [1,2,3,4,5]
2. function that does some transformation
3. we pass it to the global function

```js
let arr=[1,2,3,4,5];
function transform(i){
    return i*2;
}
let ans=arr.map(transform);
console.log(ans);
```
Here map is an internal function of arr so when we call it.
it takes each element of array passes it as argument
And gives the output

map() — transforms every element
- It runs the function on every element of the array.
- The output array has the same length as the input array.
- Each element becomes whatever the function returns.

### Filter

It is similar to map but here 

filter() — selects some elements

- It runs the function on every element.
- The function must return true or false.
- Only elements where the function returns true stay in the output array.
- The output array may be smaller or equal in size.

```js
const out=arr.filter(function (n){
    if (n % 2==0) {
        return true;
    } else {
        return false;
    }
})
console.log(out);
```


| Feature         | map()              | filter()                  |
| --------------- | ------------------ | ------------------------- |
| Purpose         | Transform elements | Select elements           |
| Output length   | Same as input      | Same or smaller           |
| Callback return | Any value          | Boolean (`true/false`)    |
| Result          | New mapped values  | Subset of original values |


## Middleware readme

```js
app.use((req,res)=>{
    res.send("404 page not found")
});
```

- we create a default path at end of page that if not other is matched in it it gets called for 404 not found