import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import Login from "../pages/Login";
import { Signup } from "../pages/Signup";

function LoggedOut() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default LoggedOut;
