import Link from "next/link";
import Image from "next/image";
import logo from "@/Assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gray-200 dark:border-white/10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Glow Effect */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr 
        from-green-500/5 via-transparent to-emerald-500/5
        dark:from-green-500/10 dark:to-emerald-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Qurbani Logo"
                width={54}
                height={54}
                className="object-contain bg-cyan-900"
              />

              <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                Qurbani
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm">
              সহজ, নিরাপদ ও বিশ্বস্ত অনলাইন কুরবানির সেবা। 
              আপনার কুরবানির পশু নির্বাচন থেকে কুরবানি সম্পন্ন 
              হওয়া পর্যন্ত সম্পূর্ণ সেবায় আমরা আছি আপনার পাশে।
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/cows"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  Buy Cow
                </Link>
              </li>

              <li>
                <Link
                  href="/goats"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  Buy Goat
                </Link>
              </li>

              <li>
                <Link
                  href="/qurbani-packages"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  Qurbani Packages
                </Link>
              </li>

              <li>
                <Link
                  href="/delivery"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  Meat Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-white mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-green-600 dark:hover:text-green-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Book Your Qurbani Today
            </h3>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              এখনই আপনার কুরবানির পশু বুক করুন এবং সম্পূর্ণ 
              ঝামেলামুক্ত কুরবানির অভিজ্ঞতা উপভোগ করুন।
            </p>

            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full 
              bg-green-600 hover:bg-green-700 text-white 
              px-6 py-3 text-sm font-medium
              transition-all duration-300 hover:scale-[1.03]
              shadow-lg shadow-green-600/20"
            >
              Book Qurbani
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Qurbani. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Terms
            </Link>

            <Link
              href="/faq"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;