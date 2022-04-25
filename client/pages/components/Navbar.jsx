import React from "react";
import Link from "next/link";
import Logo from "../icons/Logo";

const Navbar = () => {
  const user = "Rohit";

  return (
    <div className="bg-gray-800 w-full h-14 flex items-center justify-center fixed">
      <nav className="flex w-full px-6 md:w-5/6 xl:w-4/5 md:px-0 mx-auto justify-between items-center">
        <Link href="/" passHref>
          <a className=" cursor-pointer">
            <Logo />
          </a>
        </Link>
        <div className="flex justify-between items-center h-full">
          {user ? (
            <div className="flex items-center">
              <img class="w-8 h-8 rounded-full" src="" alt={user.result.name} />
              <p className="text-white">{user.result.name}</p>

              <button
                type="button"
                class="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 font-semibold rounded-lg text-sm px-4 py-1.5 text-center transition-all ml-10"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              {/* <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
                <svg
                  className="absolute w-10 h-10 text-gray-300 -left-1"
                  fillRule="currentColor"
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
              <p className="text-white">User</p> */}
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-[#2557D6]/90 font-semibold rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center ml-10 transition-all"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
