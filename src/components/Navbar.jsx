"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/logo.png";

const Navbar = () => {
  return (
    <div className="border-b backdrop-blur-md sticky top-0 z-50 shadow-sm px-3">
      <nav className="flex flex-col lg:flex-row justify-between items-center py-4 max-w-7xl mx-auto w-full gap-4 lg:gap-0">
        
        {/* Logo */}
        <div className="flex gap-3 items-center cursor-pointer group">
          <div className="shadow-md group-hover:scale-105 transition duration-300">
            <Image
              src={logo}
              alt="logo"
              loading="eager"
              width={45}
              height={45}
              className="object-cover h-auto w-auto"
            />
          </div>

          <h3 className="font-black text-2xl bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent tracking-wide">
            Qurbani
          </h3>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center items-center gap-2 text-sm px-3 py-2 rounded-full shadow-inner">
          <li>
            <Link
              href={"/"}
              className="px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href={"/animal"}
              className="px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
            >
              All Animals
            </Link>
          </li>

          <li>
            <Link
              href={"/pricing"}
              className="px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              href={"/profile"}
              className="px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <ul className="flex flex-wrap justify-center items-center text-sm gap-3">
            <li>
              <Link
                href={"/register"}
                className="border border-green-500 text-green-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold"
              >
                Register
              </Link>
            </li>

            <li>
              <Link
                href={"/login"}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;