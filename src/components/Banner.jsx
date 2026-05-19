import { Button } from "@heroui/react";
import Link from "next/link";
import thumbnail from "@/Assets/thumbnail.png";
import Image from "next/image";


const Banner = () => {
 
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden rounded-xl">

      {/* Background Image */}
      <Image
        src={thumbnail}
        alt="Qurbani thumbnail"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center">

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-white w-full">

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 max-w-2xl leading-tight animate__animated animate__fadeInDown">
            হাটে নয়, নেটে খুঁজুন কুরবানির সেরা পশু
          </h1>

          {/* Sub text */}
          <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-xl text-gray-200 animate__animated animate__fadeInUp animate__delay-1s">
            কষ্ট নয়, ক্লিকেই কুরবানি — স্মার্টভাবে বেছে নিন আপনার কুরবানির পশু
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate__animated animate__fadeInUp animate__delay-2s">

            <Link href="/pricing">
              <Button className="bg-white text-black hover:bg-gray-200">
                View Pricing
              </Button>
            </Link>

            <Link href="/allanimals">
              <Button variant="outline" className="text-white border-white" >
                Browse Cattle
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;