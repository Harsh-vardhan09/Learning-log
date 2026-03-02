function wrapInArray<T>(item:T):T[]{
    return [item]
}

//here if we pass the T data type it will return the same
//datatype in array

wrapInArray("masala");
wrapInArray(55);
wrapInArray({flavour:"vanilla"});


function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b];
}

pair("masala",20);
pair("hello",{flavour:"vanilla"});

interface Box<T>{
    content:T
}

const StringBox:Box<String>={content:"hello"};
const numberBox:Box<number>={content:10};

//we use generics in forms and api promise in calls

interface ApiResponse<T>{
    status:number,
    data:T
}