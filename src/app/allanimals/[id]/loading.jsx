"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <button
        disabled
        className="px-6 py-3 bg-green-600 text-white rounded-lg flex items-center gap-3 shadow-lg"
      >
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

        Loading Animals...
      </button>
    </div>
  );
}