const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod=require('zod');

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);


function signJwt(username, password) {
    const usernameResponse=emailSchema.safeParse(username);
    const passwordResponse=passwordSchema.safeParse(password);
    if(!usernameResponse.success|| !passwordResponse.success){
        return null;
    }

  const signature=jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

function verifyJwt(token) {
    //true,false
    const decode=jwt.decode(token);
    if(decode){
        return true
    }else{
        return false
    }
}

// let ans=verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhcnNoQGdtYWlsLmNvbSIsImlhdCI6MTc3MjczNDIxNn0.1OX7fVDiAuy98ql48ykfe9-b1jjSolJ96RduGD0hBrA")
// console.log(ans);

function decodeJwt(token) {
    try {
        const verified=jwt.verify(token,jwtPassword);
        return true;    
    } catch (error) {
        return false;
    }
}

// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhcnNoQGdtYWlsLmNvbSIsImlhdCI6MTc3MjczNDIxNn0.1OX7fVDiAuy98ql48ykfe9-b1jjSolJ96RduGD0hBrA"));

