import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = () => {
    axios
      .post("http://localhost:8080/login", {
        username,
        password,
      })
      .then((user) => {
        console.log(user);
        localStorage.setItem("token", user.data.token);
        navigate("/protected");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/protected", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        navigate('/protected');
      })
      .catch((e) => {
        console.log(e);
        Navigate("/login");
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
