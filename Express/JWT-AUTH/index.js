const jwt=require("jsonwebtoken");

//decode,verify,generate

const value={
    name:"aarsh",
    accountNumber:"12345678"
}

//jwt
const token=jwt.sign(value,"secret");

// console.log(token);
//this token has been created using this secret and hence
//this can only be varified using this secret


const verify=jwt.verify(token,"secret")
console.log(verify);

//any body can decode 