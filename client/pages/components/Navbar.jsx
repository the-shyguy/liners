import React from "react";

const Navbar = () => {
  return (
    <nav className=" h-16 flex w-full px-6 md:w-5/6 xl:w-4/5 md:px-0 mx-auto justify-between items-center bg-blue-600">
      <div>logo</div>
      <div className="flex w-1/6 justify-between">
        <div>user</div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
