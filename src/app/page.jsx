"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-red-100 flex items-center justify-center px-6 py-12 md:px-12 lg:px-20 xl:px-32"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center max-w-7xl w-full">
        
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Zeeshan Suhail
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I specialize in <strong>scalable web & mobile solutions</strong> with cutting-edge technologies.
          </p>

          {/* SERVICES LIST */}
          <ul className="space-y-2 text-gray-700 text-sm md:text-lg">
            <li>✅ <strong>Web Development</strong> – React, Next.js, TypeScript</li>
            <li>✅ <strong>Mobile App Development</strong> – Flutter (Android & iOS)</li>
            <li>✅ <strong>E-commerce Solutions</strong> – Shopify & WordPress</li>
            <li>✅ <strong>Backend Development</strong> – Node.js, FastAPI, PostgreSQL</li>
            <li>✅ <strong>Cloud & Deployment</strong> – Azure-based scalability</li>
            <li>✅ <strong>Custom Solutions</strong> – SaaS platforms & automation tools</li>
          </ul>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link href="/portfolio">
              <button className="px-6 py-3 bg-black text-white text-base md:text-lg font-medium rounded-lg shadow-md hover:bg-gray-900 transition">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 border-2 border-black text-base md:text-lg font-medium rounded-lg shadow-md hover:bg-black hover:text-white transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-96 lg:h-[500px] max-h-[500px]">
          <Image
            src="/profile.jpeg"
            alt="Zeeshan Suhail"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Homepage;