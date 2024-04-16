import React, { useState } from "react";
import logo from "../assets/image/Slogo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import googleLogo from "../assets/image/google.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginAPI } from "../api/LoginAPI";
import { ThreeDots } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
      return;
    }

    try {
      const res = await LoginAPI(form);
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.error);
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen">
      <div className="h-auto flex flex-col lg:flex-row justify-center px-4 sm:px-0">
        <div className="bg-white lg:mt-16 mt-10 lg:w-[40%] rounded-tl-xl rounded-bl-xl ">
          <div className="px-4 lg:px-20 py-7 items-center">
            <p className="text-3xl font-medium">Login</p>
            <form onSubmit={handleLogin}>
              <div className="mt-6">
                <p className="text-md font-normal">Email</p>
                <div className="mt-2">
                  <Input
                    name="email"
                    value={form.email}
                    onChange={handleOnChange}
                    type="text"
                    autoComplete="email"
                    placeholder="example@vootel.com"
                    fontSize="text-sm sm:text-md"
                    error={errors.email}
                  />
                </div>
              </div>
              <div className="mt-7">
                <p className="text-md font-normal">Password</p>
                <div className="mt-2">
                  <Input
                    name="password"
                    value={form.password}
                    onChange={handleOnChange}
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    fontSize="text-sm sm:text-md"
                    error={errors.password}
                  />
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <a className="text-color-darker text-xs font-bold hover:cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <div className="mt-5">
                <Button type="submit" onClick={handleLogin}>
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <ThreeDots
                        visible={true}
                        height="22"
                        width="50"
                        color="white"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </div>
            </form>
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
                <p className="text-sm font-normal">Don't have an account?</p>
                <a
                  className="text-color-darker text-sm font-bold hover:cursor-pointer ml-1"
                  href="/signup"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background-darker lg:mt-16 mt-10 lg:w-[20%] flex justify-center items-center rounded-tr-xl rounded-br-xl hidden lg:flex ">
          <img src={logo} className="h-24 lg:h-32" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
