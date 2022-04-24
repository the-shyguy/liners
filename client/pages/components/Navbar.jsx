import React from "react";
import Link from "next/link";
import Logo from "../icon/Logo";

const Navbar = () => {
  return (
    <div className="bg-gray-800 w-full h-14 flex items-center justify-center fixed">
      <nav className="flex w-full px-6 md:w-5/6 xl:w-4/5 md:px-0 mx-auto justify-between items-center">
        <Link href="/" passHref>
          <a className=" cursor-pointer">
            <Logo />
          </a>
        </Link>
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            {/* {<img class="w-8 h-8 rounded-full" src="" alt="Rounded avatar" />} */}
            <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
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
            <p className="text-white">User</p>
          </div>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-semibold rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 ml-10 transition-all"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
