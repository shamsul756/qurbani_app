"use client";

import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaWeightHanging,
  FaMoneyBillWave,
  FaPaw,
  FaCalendarAlt,
  FaTags,
} from "react-icons/fa";

import "animate.css";
import { useSpring, animated } from "@react-spring/web";
import { toast } from "react-toastify";

const AnimalDetailsId = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://qurbani-app-five.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  const singleData = data.find((d) => d.id == id);

  return <AnimalCard singleData={singleData} />;
};

const AnimalCard = ({ singleData }) => {
  const springStyle = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(40px) scale(0.95)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
    },
    config: {
      tension: 120,
      friction: 14,
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center p-6">
      <animated.div
        style={springStyle}
        className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 animate__animated animate__fadeInUp"
      >
        {/* IMAGE */}
        <div className="relative h-[350px] md:h-full group overflow-hidden">
          <img
            src={singleData.image}
            alt={singleData.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            {singleData.category}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            {singleData.name}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            {singleData.description}
          </p>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <FaPaw />
                <span className="font-semibold">Breed</span>
              </div>
              <p className="text-gray-700">{singleData.breed}</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <FaMoneyBillWave />
                <span className="font-semibold">Price</span>
              </div>
              <p className="text-gray-700 font-bold">
                ৳ {singleData.price.toLocaleString()}
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <FaWeightHanging />
                <span className="font-semibold">Weight</span>
              </div>
              <p className="text-gray-700">{singleData.weight} KG</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <FaCalendarAlt />
                <span className="font-semibold">Age</span>
              </div>
              <p className="text-gray-700">{singleData.age} Years</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition col-span-2">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <FaMapMarkerAlt />
                <span className="font-semibold">Location</span>
              </div>
              <p className="text-gray-700">{singleData.location}</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-2xl font-semibold shadow-lg cursor-pointer" onClick={()=> toast.success("your buying are successful")}>
              Buy Now
            </button>

            <button className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition py-3 rounded-2xl font-semibold cursor-pointer" onClick={()=> toast.info("added whitelist please go to homepage")}>
              Add Wishlist
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default AnimalDetailsId;