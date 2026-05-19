"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, Button } from "@heroui/react";
import { FaMapMarkerAlt, FaWeightHanging, FaTag } from "react-icons/fa";
import { toast } from "react-toastify";

const FeaturesCardPage = ({ datas }) => {
  return (
    <Card className="w-full rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Image Section */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={datas.image}
          alt={datas.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {datas.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {datas.name}
          </h2>

          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {datas.description}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">

          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
            <FaMapMarkerAlt className="text-red-500" />
            <span>{datas.location}</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
            <FaWeightHanging className="text-blue-500" />
            <span>{datas.weight} kg</span>
          </div>

          <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-xl font-semibold text-green-700">
            <FaTag />
            <span>৳ {datas.price}</span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/allanimals/${datas.id}`} className="block">
          <Button
            className="w-full mt-2 bg-green-600 text-white font-semibold py-6 rounded-xl hover:bg-green-700 transition-all duration-300"
            onClick={() => toast.success("Opening details page")}
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default FeaturesCardPage;