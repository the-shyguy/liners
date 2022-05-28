import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ user, logout }) => {
  return (
    <Menu as="div" className=" relative inline-block text-center">
      <Menu.Button className="flex items-center dark:bg-[#2A3944] bg-[#D7DADE] py-1 pl-1 pr-2 gap-2 rounded-full">
        {user?.result?.imageUrl ? (
          <img
            className="rounded-full w-8 h-8 text-white text-sm"
            src={user.result.imageUrl}
            alt={user.result.name}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full mr-3">
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
        <p className="dark:text-white text-sm">{user.result.name}</p>
        <ChevronDownIcon
          className="h-4 w-4 dark:text-white"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) =>
                user ? (
                  <button
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-center px-4 py-2 text-sm"
                    )}
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  ""
                )
              }
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  About Liner
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
