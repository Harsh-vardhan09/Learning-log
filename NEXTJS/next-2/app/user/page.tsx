import axios from "axios";

export default async function user(){

  const response=await axios.get("http://localhost:3000/api/v1/user/details")
  
  const data=response.data;
  return (
    <div className="">
      user page <br />
       {data.name} <br />
       {data.email}
    </div>
  );
};
