import React, { useState, useEffect } from "react";
import Logo from "../icons/Logo";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { SunIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";

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
    <div className="w-full flex items-center px-10 py-4 justify-between bg-white dark:bg-[#05151C] fixed">
      <div className="flex gap-4 items-center ">
        <Link to="/" aria-label="logo">
          <Logo />
        </Link>
        <input
          type="text"
          placeholder="# Explore"
          className="rounded-lg px-2 py-1.5 bg-[#D7DADE] dark:bg-[#2A3944] dark:text-white focus:outline-none lg:w-72"
        />
      </div>
      <div className="flex justify-between items-center h-full gap-8">
        <div className="dark:text-white text-black">for something</div>
        {user ? (
          <div className="flex items-center gap-4">
            <Dropdown user={user} logout={logout} />
          </div>
        ) : (
          <Link to="/auth">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-[#2557D6]/90 font-semibold rounded-full text-sm px-5 py-1.5 text-center inline-flex items-center ml-10 transition-all"
            >
              Sign In
            </button>
          </Link>
        )}
        <button className="flex">
          <SunIcon className="h-8 dark:text-white" />
        </button>
        <MoonIcon className="h-8 dark:text-white" />
      </div>
    </div>
  );
};

export default Navbar;
