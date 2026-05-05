"use client";

import axios from "axios";
import { useState } from "react";

export default function signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex  justify-around items-center">
      <div className="border p-2">
        <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)} value={username}/>
        <input type="text" placeholder="password" onChange={e=>setPassword(e.target.value)} value={password} />
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin", {
                username,
                password
            });
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
