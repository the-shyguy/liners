import React, { useState, useEffect } from "react";
import Logo from "../icons/Logo";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  useEffect(() => {
    // const token = user?.token;
  }, [location]);

  return (
    <div className="bg-gray-900 w-full h-14 flex items-center justify-center fixed">
      <nav className="flex w-full px-6 md:w-5/6 xl:w-4/5 md:px-0 mx-auto justify-between items-center">
        <Link to="/" aria-label="logo">
          <Logo />
        </Link>
        <div className="flex justify-between items-center h-full">
          {user ? (
            <div className="flex items-center">
              {user?.result?.imageUrl ? (
                <img
                  className="rounded-full w-8 h-8 mr-3 text-white text-sm"
                  src={user.result.imageUrl}
                  alt={user.result.name}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-3">
                  <svg
                    className="absolute w-10 h-10 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
              <p className="text-white text-sm">{user.result.name}</p>

              <button
                type="button"
                className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 font-semibold rounded-lg text-sm px-4 py-1.5 text-center transition-all ml-10"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/auth">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-[#2557D6]/90 font-semibold rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center ml-10 transition-all"
                >
                  Sign In
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
