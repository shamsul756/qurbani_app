"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/logo.png";

import { Bars, Xmark } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/allanimals" },
    { name: "Pricing", path: "/pricing" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="bg-white rounded-full p-1 shadow-lg group-hover:scale-105 transition duration-300">
              <Image
                src={logo}
                alt="Logo"
                width={45}
                height={45}
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Qurbani
              </h1>

              <p className="text-[11px] text-gray-400 -mt-1">
                Premium Animal Service
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">

            {/* Nav Links */}
            <ul className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/register">
                <Button
                  variant="bordered"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-full px-5 font-semibold transition-all"
                >
                  Register
                </Button>
              </Link>

              <Link href="/login">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full px-5 shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-white/10 border border-white/10 p-2 rounded-xl text-white hover:bg-white/20 transition"
          >
            {menuOpen ? <Xmark width={22} /> : <Bars width={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-6 animate-in fade-in slide-in-from-top-3 duration-300">

            {/* Mobile Links */}
            <ul className="flex flex-col gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-gray-200 font-medium hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <Link href="/register">
                <Button
                  variant="bordered"
                  className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-xl font-semibold"
                >
                  Register
                </Button>
              </Link>

              <Link href="/login">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;