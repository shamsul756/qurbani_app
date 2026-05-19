"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/Assets/logo.png";
import { Bars, Xmark } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/allanimals" },
    { name: "Pricing", path: "/pricing" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07110d]/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-4 group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative bg-white p-1.5 rounded-full border border-green-400/40 shadow-xl">
                <Image
                  src={logo}
                  alt="Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-wide bg-gradient-to-r from-green-300 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                Qurbani
              </h1>

              <p className="text-xs tracking-[3px] uppercase text-gray-400 -mt-1">
                Premium Animal Service
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            {/* NAV LINKS */}
            <ul className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur-xl shadow-inner">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="relative px-5 py-2 text-sm font-semibold text-gray-200 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white hover:shadow-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* AUTH SECTION */}
            {!user ? (
              <div className="flex items-center gap-3">
                <Link href="/register">
                  <Button
                    variant="bordered"
                    className="rounded-full border-green-500/70 bg-transparent text-green-400 hover:bg-green-500 hover:text-white px-6 font-semibold transition-all duration-300"
                  >
                    Register
                  </Button>
                </Link>

                <Link href="/login">
                  <Button className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 font-semibold shadow-[0_10px_25px_rgba(34,197,94,0.4)] hover:scale-105 transition-all duration-300">
                    Login
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-3 py-2">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={user.image || ""}
                    className="ring-2 ring-green-500 shadow-lg"
                  />

                  <div className="hidden xl:block">
                    <h3 className="text-sm font-semibold text-white leading-none">
                      {user.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Welcome Back 👋
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleLogOut}
                  className="rounded-full bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all duration-300 px-5"
                >
                  Logout
                </Button>
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
          >
            {menuOpen ? <Xmark width={22} /> : <Bars width={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden pb-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl">
              {/* MOBILE NAV */}
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-gray-200 font-medium hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* MOBILE AUTH */}
              {!user ? (
                <div className="flex flex-col gap-3 mt-5">
                  <Link href="/register">
                    <Button
                      variant="bordered"
                      className="w-full rounded-2xl border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-6"
                    >
                      Register
                    </Button>
                  </Link>

                  <Link href="/login">
                    <Button className="w-full rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-6 shadow-lg">
                      Login
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="mt-5 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4">
                    <Avatar>
                      <Avatar.Image
                      src={user?.image}
                      className="ring-2 ring-green-500"
                      alt={user?.name}
                      referrerPolicy="no-referrer"
                      />
                    </Avatar>

                    <div>
                      <h3 className="text-white font-semibold">
                        {user.name}
                      </h3>

                      <p className="text-sm text-gray-400">
                        Logged in successfully
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={handleLogOut}
                    className="w-full mt-4 rounded-2xl bg-red-500 text-white font-semibold py-6 hover:bg-red-600 transition-all duration-300"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;