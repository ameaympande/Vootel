import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigator;
