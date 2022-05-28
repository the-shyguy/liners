import React, { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { GoogleLogin } from "react-google-login";
import GoogleIcon from "../icons/GoogleIcon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { signin, signup } from "../../store/actions/auth";
import { stmt } from "../helper";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMesaage, setErrorMessage] = useState("");
  const error = useSelector((state) => state.auth.errorData);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        dispatch(signup(formData, navigate));
      } else {
        dispatch(signin(formData, navigate));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
    setErrorMessage("");
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
  };

  useEffect(() => {
    const user = window.localStorage.getItem("profile");

    if (user && location.pathname === "/auth") {
      navigate("/posts");
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center bg-white px-6 md:px-0">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center md:hidden">
          <div
            className={`text-6xl font-semibold tracking-wider text-blue-700 ${
              isSignup ? "mb-10" : "mb-20"
            }`}
          >
            liner
          </div>
        </div>
        <form
          className="auth-from px-6 sm:px-0 sm:w-80 mx-auto"
          onSubmit={handleSubmit}
        >
          {isSignup && (
            <div className="grid grid-cols-2 gap-8">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-gray-700 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  autoFocus={isSignup ? true : false}
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-md text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-gray-700 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-md text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
          )}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-gray-700 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.email}
              autoFocus={!isSignup ? true : false}
            />
            <label
              htmlFor="email"
              className="absolute text-md text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div
            className={` ${
              isSignup ? "mb-6" : "mb-2"
            } relative z-0 w-full group`}
          >
            {showPassword ? (
              <span className="flex">
                <EyeIcon
                  className="h-4 absolute right-1 bottom-2 text-gray-400 z-10 cursor-pointer"
                  onClick={() => handleShowPassword()}
                />
              </span>
            ) : (
              <span className="flex">
                <EyeOffIcon
                  className="h-4 absolute right-1 bottom-2 text-gray-400 z-10 cursor-pointer"
                  onClick={() => handleShowPassword()}
                />
              </span>
            )}
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-gray-700 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              required
              value={formData.password}
            />
            <label
              htmlFor="password"
              className="absolute text-md text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          {isSignup && (
            <div className="relative z-0 mb-2 w-full group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-gray-700 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
                value={formData.confirmPassword}
              />
              <label
                htmlFor="confirmPassword"
                className="absolute text-md text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
          )}
          {errorMesaage && (
            <p className=" text-red-500 text-xs mb-2">{errorMesaage}</p>
          )}
          {isSignup ? (
            <div className="flex w-full justify-end">
              <small className="block mb-4 text-black">
                Already have a account?{" "}
                <span
                  className="hover:underline cursor-pointer"
                  onClick={() => switchMode()}
                >
                  Sign In
                </span>
              </small>
            </div>
          ) : (
            <div className="flex w-full justify-end">
              <small className="block mb-4 text-black">
                Create an account?{" "}
                <span
                  className="hover:underline cursor-pointer"
                  onClick={() => switchMode()}
                >
                  Sign Up
                </span>
              </small>
            </div>
          )}
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-md w-full px-5 py-2 text-center mb-4 transition-all"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <GoogleLogin
            clientId={import.meta.env.VITE_CLIENT_ID}
            render={(renderProps) => (
              <button
                className="google-btn w-full bg-white py-2 rounded-lg font-medium text-gray-600 flex justify-center items-center gap-2 transition-all cursor-pointer"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <GoogleIcon /> {isSignup ? "Sign Up" : "Sign In"} with Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </form>
      </div>
      <div className="mt-20 sm:absolute bottom-0 md:left-0 md:ml-2 md:mb-2 text-xs md:text-sm">
        {stmt()}
      </div>
      <div className="w-1/3 h-full flex-col justify-center items-center auth-bg hidden md:flex bg-blue-800 md:px-8 lg:px-12">
        <div className=" text-white md:text-5xl lg:text-7xl font-semibold tracking-wider mb-4">
          liner
        </div>
        <p className="text-white mb-16 md:text-sm lg:text-base">
          {isSignup
            ? `Be a part of the community. Explore, create and share liners.`
            : "Glad to see you back to the community."}
        </p>
        <div className="text-white flex flex-col md:text-sm lg:text-base">
          <p className="mb-2 italic">"{"My life is like a sin wave"}"</p>
          <p className="text-sm self-end">-Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
