"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Appbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsScrolled(true); // Navbar background becomes transparent when scrolled
    } else {
      setIsScrolled(false); // Solid background before scrolling
    }
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 py-1 lg:py-2 pl-3 w-screen shadow-lg lg:grid lg:grid-cols-3 lg:items-center z-50 ${
        isScrolled
          ? "bg-gradient-to-b from-zinc-950 to-transparent"
          : "bg-black"
      } rounded-b-xl`}
    >
      {/* Logo and Mobile Dropdown Button */}
      <div className="flex items-center justify-between lg:justify-start w-screen relative">
        <button
          onClick={() => router.push("/")}
          className="text-xl lg:ml-8 lg:text-3xl font-ubuntu font-semibold lg:font-semibold opacity-80 text-white"
        >
          <span>ProfitONN</span>
        </button>

        <div className="flex items-center">
        <button
          onClick={() => router.push("/signup")}
          className="block items-center lg:hidden h-8 px-3 bg-indigo-600 
          rounded-md hover:scale-105 transition-all duration-300 font-medium"
        >
          Signup
        </button>
        
        {/* Mobile Dropdown Button with margin-right */}
        <div className="flex justify-between lg:hidden mr-4">
          <button
            id="dropdownDefaultButton"
            className="text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {dropdownOpen && (
            <div
              id="dropdown"
              className="absolute top-full right-0 mt-1 z-10 bg-black divide-y divide-gray-700 rounded-lg shadow-lg w-44 dark:bg-gray-800 transition-all duration-300"
            >
              <ul
                className="py-2 rounded-lg text-sm text-white shadow-2xl"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <button
                    onClick={() => router.push("/")}
                    className="block px-4 py-2 text-start w-full hover:bg-indigo-600 rounded-md hover:scale-105 transition-all duration-300"
                  >
                    Home
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => router.push("/about")}
                    className="block px-4 py-2 text-start w-full hover:bg-indigo-600 rounded-md hover:scale-105 transition-all duration-300"
                  >
                    About
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => router.push("/signup")}
                    className="block px-4 py-2 text-start w-full hover:bg-indigo-600 rounded-md hover:scale-105 transition-all duration-300"
                  >
                    Signup
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => router.push("/signin")}
                    className="block px-4 py-2 text-start w-full hover:bg-indigo-600 rounded-md hover:scale-105 transition-all duration-300"
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        </div>
        
      </div>

      {/* Large Screen Navigation */}
      <div
        className={`z-50 p-2 hidden ${
          isScrolled ? "text-white" : "text-gray-400"
        } lg:flex lg:justify-evenly lg:w-auto lg:grid-cols-5`}
      >
        <button
          onClick={() => router.push("/")}
          className="cursor-pointer text-xl hover:text-gray-200 transform hover:scale-110 transition duration-300"
        >
          Home
        </button>
        <button
          onClick={() => router.push("/about")}
          className="cursor-pointer text-xl hover:text-gray-200 transform hover:scale-110 transition duration-300"
        >
          About
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="cursor-pointer text-xl hover:text-gray-200 transform hover:scale-110 transition duration-300"
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/signin")}
          className="cursor-pointer text-xl hover:text-gray-200 transform hover:scale-110 transition duration-300"
        >
          Sign In
        </button>
      </div>

      {/* Demo Button */}
      <div className="flex justify-center">
        <button
          onClick={() => router.push("/terminal")}
          className="transition duration-300 hidden lg:block py-1 ease-in-out transform hover:scale-105 rounded-lg text-gray-300 hover:text-white px-4 relative text-xl bg-transparent border-2 border-white border-opacity-40 hover:bg-zinc-950 box-border"
        >
          Take a demo trade
        </button>
      </div>
    </div>
  );
}
