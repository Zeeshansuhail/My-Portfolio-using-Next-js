"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./navlink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    opened: { opacity: 1, x: 0 },
  };

  return (
    <nav className="h-16 flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32  w-full top-0 z-50 fixed md:static lg:static xl:static">
      {/* LOGO */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      {/* NAV LINKS (Desktop) */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4">
        <a
          href="https://github.com/Zeeshansuhail"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Image src="/github.png" alt="GitHub" width={35} height={35} />
        </a>
        
        <a
          href="https://www.linkedin.com/in/zeeshan-suhail-ahmed-321779232/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={35} height={35} />
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            animate={open ? { rotate: 45 } : { rotate: 0 }}
          />
          <motion.div
            className="w-10 h-1 bg-black rounded"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            className="w-10 h-1 bg-black rounded origin-left"
            animate={open ? { rotate: -45 } : { rotate: 0 }}
          />
        </button>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-6 text-3xl"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={menuItemVariants}>
                <Link
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-300"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;