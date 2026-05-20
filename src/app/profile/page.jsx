// app/profile/page.tsx
"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const ProfilePage = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          
          {/* Cover Section */}
          <div className="h-44 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          {/* Profile Content */}
          <div className="relative px-6 pb-8">
            
            {/* Avatar */}
            <div className="-mt-16 flex flex-col items-center">
              <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                <Avatar.Image
                  src={user?.image}
                  alt={user?.name}
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </Avatar>

              <h1 className="mt-5 text-3xl font-bold text-gray-900">
                {user?.name}
              </h1>

              <p className="mt-2 text-gray-500">
                {user?.email}
              </p>

              <div className="mt-6">
                <UpdateUserModal />
              </div>
            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Account Information
                </h3>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-800">Name:</span>{" "}
                    {user?.name}
                  </p>

                  <p>
                    <span className="font-medium text-gray-800">Email:</span>{" "}
                    {user?.email}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Profile Status
                </h3>

                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  <p className="text-sm text-gray-600">
                    Your account is active and verified.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;