import React, { useState } from "react";
import logo from "../assets/image/Slogo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import googleLogo from "../assets/image/google.png";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleLogin = () => {
    const { email, password } = form;
    const newErrors = {};

    if (email.trim() === "") {
      newErrors.email = "Email cannot be empty";
    }

    if (password.trim() === "") {
      newErrors.password = "Password cannot be empty";
    }

    if (password.length <= 8) {
      newErrors.password = "Password should 8 character long";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Logging in with:", form);
  };

  return (
    <div className="h-screen">
      <div className="h-auto flex flex-col lg:flex-row justify-center px-4 sm:px-0">
        <div className="bg-background-darker lg:mt-7 mt-10 lg:w-[20%] flex justify-center items-center rounded-l-xl hidden lg:flex ">
          <img src={logo} className="h-24 lg:h-32" alt="logo" />
        </div>
        <div className="bg-white lg:mt-7 mt-10 lg:w-[40%] rounded-r-xl ">
          <div className="px-4 lg:px-20 py-7 items-center">
            <p className="text-3xl font-medium">SignUp</p>
            <div className="mt-4">
              <p className="text-md font-normal">Email</p>
              <div className="mt-2">
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="example@vootel.com"
                  fontSize="text-sm sm:text-md"
                  error={errors.email}
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-md font-normal">Password</p>
              <div className="mt-2">
                <Input
                  name="password"
                  value={form.password}
                  onChange={handleOnChange}
                  type="password"
                  placeholder="Password"
                  fontSize="text-sm sm:text-md"
                  error={errors.password}
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-md font-normal">Confirm Password</p>
              <div className="mt-2">
                <Input
                  name="cpassword"
                  value={form.cpassword}
                  onChange={handleOnChange}
                  type="password"
                  placeholder="Confirm Password"
                  fontSize="text-sm sm:text-md"
                  error={errors.password}
                />
              </div>
            </div>

            <div className="mt-5">
              <Button onClick={handleLogin}>Create New Account</Button>
            </div>
            <div className="mt-5 flex flex-row gap-3 items-center">
              <div className="w-1/2 border border-grey h-0" />
              <p className="text-sm font-normal text-slate-500">OR</p>
              <div className="w-1/2 border border-grey h-0" />
            </div>
            <div className="mt-2 flex items-center justify-center">
              <button
                className={`hover:bg-blue-500 text-black font-semibold py-2 px-2 rounded-full border border-slate-300`}
              >
                <img src={googleLogo} className="h-7 lg:h-18" alt="Google" />
              </button>
            </div>
            <div>
              <div className="mt-3 flex justify-center items-center">
                <p className="text-sm font-normal">Already have an account?</p>
                <a
                  className="text-color-primary text-sm font-bold hover:cursor-pointer ml-1"
                  href="/signin"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
