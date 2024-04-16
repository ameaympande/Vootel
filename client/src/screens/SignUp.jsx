import React, { useState } from "react";
import logo from "../assets/image/Slogo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import googleLogo from "../assets/image/google.png";
import { ThreeDots } from "react-loader-spinner";
import { signUp } from "../api/SignUpAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setLoading(true);
    const { email, password } = form;
    const newErrors = {};

    if (email.trim() === "") {
      newErrors.email = "Email cannot be empty";
    }

    if (password.trim() === "") {
      newErrors.password = "Password cannot be empty";
    } else if (password.length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
    }

    if (form.password !== form.cpassword) {
      newErrors.password = "Password should match";
      newErrors.cpassword = "Password should match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const res = await signUp(form);
      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/signin");
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
        <div className="bg-background-darker lg:mt-7 mt-10 lg:w-[20%] flex justify-center items-center rounded-l-xl hidden lg:flex ">
          <img src={logo} className="h-24 lg:h-32" alt="logo" />
        </div>
        <div className="bg-white lg:mt-7 mt-10 lg:w-[40%] rounded-r-xl ">
          <div className="px-4 lg:px-20 py-7 items-center">
            <p className="text-3xl font-medium">SignUp</p>
            <form onSubmit={handleSignUp}> {/* Added onSubmit event listener */}
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


              <div className="mt-6">
                <Button type="submit" onClick={handleSignUp}>
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
                    "Create New Account"
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
                className={` text-black font-semibold py-2 px-2 rounded-full border border-slate-300`}
              >
                <img src={googleLogo} className="h-7 lg:h-18" alt="Google" />
              </button>
            </div>
            <div>
              <div className="mt-3 flex justify-center items-center">
                <p className="text-sm font-normal">Already have an account?</p>
                <a
                  className="text-color-darker text-sm font-bold hover:cursor-pointer ml-1"
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
