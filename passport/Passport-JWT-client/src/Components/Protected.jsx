import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Protected = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/protected", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((e) => {
        console.log(e);
        Navigate('/login')
      });
  }, []);
  return (
    <div>
      <h1>Protected</h1>
    </div>
  );
};

export default Protected;
