import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsHorizontalIcon, PencilIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PostHandler = ({ setCurrentId, _id }) => {
  return (
    <Menu as="div" className=" relative inline-block text-center">
      <Menu.Button className="flex items-center dark:hover:bg-gray-400 dark:hover:bg-opacity-30 transition-all px-2 py-0.5 rounded-lg">
        <DotsHorizontalIcon className="h-4 dark:text-white text-black" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg dark:bg-[#28353E] ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? "bg-gray-600 text-white rounded-t-md"
                      : "text-white",
                    "px-4 py-2 text-sm w-full flex justify-center items-center gap-2"
                  )}
                  onClick={() => setCurrentId(_id)}
                >
                  <PencilIcon className="h-3.5 " />
                  Edit
                </button>
              )}
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
                  Clear
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PostHandler;
