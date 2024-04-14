import React from "react";
import logo from "../assets/image/Slogo.png";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  return (
    <div className="h-screen flex flex-col lg:flex-row justify-center px-4 sm:px-0">
      <div className="bg-white lg:mt-28 mt-10 h-[62%] lg:w-[40%] rounded-tl-xl rounded-bl-xl">
        <div className="px-4 lg:px-20 py-7 items-center">
          <p className="text-3xl font-medium">Login</p>
          <div className="mt-6">
            <p className="text-md font-normal">Email</p>
            <div className="mt-2">
              <Input type="text" placeholder="example@vootel.com" fontSize="text-sm sm:text-md" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-normal">Password</p>
            <div className="mt-2">
              <Input type="password" placeholder="password" fontSize="text-sm sm:text-md" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-color-primary text-sm font-bold text-end">Forgot password ?</p>
          </div>
          <div className="mt-5">
            <Button>Sign in</Button>
          </div>
        </div>
      </div>
      <div className="bg-background-primary lg:mt-28 mt-10 h-[62%] lg:w-[20%] flex justify-center items-center rounded-tr-xl rounded-br-xl hidden lg:flex">
        <img src={logo} className="h-24 lg:h-32" alt="logo" />
      </div>
    </div>
  );
}

export default Login;
