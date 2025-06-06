import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLogout } from "../services/profile/logout";
import { removeUser } from "../utils/features/userSlice";
import { useNavigate, useLocation } from "react-router";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const totalRequest = useSelector((state) => state.totalRequest.total);

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    await postLogout();
    dispatch(removeUser());
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-gray-200 shadow-sm dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://freshcartdev.s3.eu-north-1.amazonaws.com/devhub.png"
            className="h-[40px]"
            alt="devhub Logo"
          />
        </a>

        <div
          className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          ref={dropdownRef}
        >
          <button
            onClick={() => setDropDownOpen(!dropDownOpen)}
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded={dropDownOpen}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="user"
            />
          </button>

          {dropDownOpen && (
            <div className="absolute right-0 top-12 w-48 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user?.userName || "User"}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.email || "user@gmail.com"}
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <a
                    href="/user/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/my/connections"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Connections
                  </a>
                </li>
                <li>
                  <div
                    onClick={() => navigate("/request/feeds")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  >
                    Requests
                  </div>
                </li>
                <li>
                  <a
                    href="/premium"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Premium
                  </a>
                </li>
                <li>
                  {user?.userName ? (
                    <div
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    >
                      Sign out
                    </div>
                  ) : (
                    <a
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign In
                    </a>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive("/")
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/my/connections"
                className={`block py-2 px-3 rounded md:p-0 relative ${
                  isActive("/my/connections")
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                Connections
              </a>
            </li>
            <li>
              <div
                onClick={() => navigate("/request/feeds")}
                className={`block py-2 px-3 rounded md:p-0 cursor-pointer ${
                  isActive("/request/feeds")
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                Requests
                {totalRequest > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-[12px] font-bold leading-none text-white bg-red-600 rounded-full">
                    {totalRequest}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
