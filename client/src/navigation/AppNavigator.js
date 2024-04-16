import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import PrivateRoute from "../utils/PrivateRoute";

function AppNavigator() {
  const isAuthenticated = localStorage.getItem("vootelToken") !== null;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route
          path="/signup"
          element={isAuthenticated ? <Home /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Home /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigator;
