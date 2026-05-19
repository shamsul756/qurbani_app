// app/not-found.js
"use client";

import Link from "next/link";
import { Button, Card } from "@heroui/react";

import "animate.css";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090F] px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed22,transparent_40%)]" />
      <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

      <Card className="animate__animated animate__zoomIn w-full max-w-xl border border-white/10 bg-white/5 backdrop-blur-2xl">
        <Card className="flex flex-col items-center py-14 text-center">
          {/* Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 animate-pulse rounded-full bg-red-500/30 blur-2xl" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-400 shadow-2xl">
            
            </div>
          </div>

          {/* 404 */}
          <h1 className="bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 bg-clip-text text-8xl font-black tracking-tight text-transparent">
            404
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Lost in Space
          </h2>

          <p className="mt-4 max-w-md text-gray-400">
            The page you’re looking for doesn’t exist or has drifted
            into another dimension.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href={"/"}>
            <Button
              as={Link}
              href="/"
              color="primary"
              radius="full"
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 font-semibold"
            
            >
              Back Home
            </Button>
            </Link>

        
          </div>

          {/* Decorative dots */}
          <div className="mt-10 flex gap-3">
            <span className="h-3 w-3 animate-ping rounded-full bg-cyan-400" />
            <span
              className="h-3 w-3 animate-ping rounded-full bg-violet-400"
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className="h-3 w-3 animate-ping rounded-full bg-pink-400"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </Card>
      </Card>
    </div>
  );
}