import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../icons/Logo";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    router.push("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  useEffect(() => {
    const token = user?.token;
  }, [router.pathname]);

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
              <div className="w-8 h-8 mr-2">
                <Image
                  className=" rounded-lg"
                  src={user.result.imageUrl}
                  alt={user.result.name}
                  width={8}
                  height={8}
                  layout="responsive"
                />
              </div>

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
              <Link href="/auth">
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
