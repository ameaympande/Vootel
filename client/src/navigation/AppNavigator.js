import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "../components/Home";

function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigator;
