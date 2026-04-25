import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Protected from "./Components/Protected";

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </section>
  );
};

export default App;
