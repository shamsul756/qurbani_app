import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { FaMapMarkerAlt, FaWeight, FaTag } from "react-icons/fa";

const FeaturesCardPage = ({ datas }) => {
  return (
    <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border">
      
      {/* Image */}
      <div className="relative w-full h-56 ">
        <Image
          src={datas.image}
          alt={datas.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300 rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">
          {datas.name}
        </h2>

        {/* Category badge */}
        <span className="inline-block text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
          {datas.category}
        </span>

        {/* Info */}
        <p className="text-gray-600 text-sm">
          {datas.description}
        </p>

        {/* Details */}
        <div className="flex justify-between text-sm text-gray-700 pt-2">

          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-red-500" />
            {datas.location}
          </div>

          <div className="flex items-center gap-1">
            <FaWeight className="text-blue-500" />
            {datas.weight}kg
          </div>

          <div className="flex items-center gap-1 font-semibold text-green-600">
            <FaTag />
            ৳{datas.price}
          </div>

        </div>
        <Button
  variant="outline"
  className="w-full mt-5 py-5 rounded-2xl border-green-500 text-green-600 font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
>
  View Details
</Button>

      </div>
    </Card>
  );
};

export default FeaturesCardPage;