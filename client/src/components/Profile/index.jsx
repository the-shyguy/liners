import React from "react";
import { Link } from "react-router-dom";

const index = ({ user }) => {
  return (
    <div className="flex flex-col">
      <div className=" rounded-xl">
        <img
          src="https://summer.pes.edu/wp-content/uploads/2019/02/explore-bg.jpg"
          alt="img"
          className=" rounded-t-xl"
        />
      </div>
      <div className="bg-white dark:bg-[#1A2730] relative flex flex-col items-center justify-center dark:text-white rounded-b-xl">
        <img
          src={user?.result?.imageUrl}
          alt={user?.result?.name}
          className="rounded-full absolute -top-12 max-h-24"
        />
        <div className="font-semibold mb-4 mt-14">{user?.result?.name}</div>
        <div className="text-sm mb-6">Working on liner rn!</div>
        <div className="flex w-full">
          <div className="flex flex-1 flex-col justify-center items-center py-3 profile-box">
            <p className="font-semibold">20</p>
            <p className="text-sm">Followers</p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center py-3 profile-box">
            <p className="font-semibold">30</p>
            <p className="text-sm">Followings</p>
          </div>
        </div>
        <Link to="/" className="py-4 text-blue-400 text-sm">
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default index;
