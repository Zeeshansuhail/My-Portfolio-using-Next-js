'use client'

import Link from "next/link";
import { useState } from "react";
import Navlink from "@/components/navlink";
import Image from "next/image";
import { motion } from "framer-motion";


const links = [
  {
    link: "/",
    name: "Home",
  },
  { link: "/about", name: "About" },
  { link: "/portfolio", name: "Portfolio" },
  { link: "/contact", name: "Contact" },
];
const Navbar = () => {
  const [open,setOpen] = useState(false)

  const topVariant = {
    closed:{
      rotate:0
    },
    opened:{
      rotate:45,
      backgroudColor: "rgb(255,255,255,255)"
    }
  };
  const centerVariant = {
    closed:{
      opacity:1,
    },
    opened:{
      opacity:0
    }
  };
  const bottomVariant = {
    closed:{
      rotate:0
    },
    opened:{
      rotate:-45,
      backgroudColor: "rgb(255,255,255,255)"
    }
  };
  
  const listVariant = {
    closed: {
      x:"100vw"
    },
    opened:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2
      }
          
    }
  };
  
  const listItemVariant = {
    closed: {
      x:-10,
      opacity:0,
    },
    opened:{
      x:10,
      opacity:1
    }
  };

  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* Navigation Link */}
      <div className="hidden md:flex gap-4 w-1/3">
      {links.map((linkItem)=>(
          <Navlink link={linkItem} key={linkItem.name}/>
         ))}
      </div>
      {/* logo */}
      <div className=" md:flex xl:justify-center xl:w-1/3">
        <Link
          href="/"
          className=" text-sm bg-black rounded-md p-1 flex items-center"
        >
          <span className=" text-white mr-1 ml-1">Zees</span>
          <span className="w-12 h-8 bg-white flex items-center justify-center rounded-sm">
            .dev
          </span>
        </Link>
      </div>
    {/* Social Links */}
      <div className="hidden md:flex gap-4 xl:w-1/3">
        <Link href=''>
        <Image src="/githug.png" alt="git" width={24} height={24} className=" object-cover"/>
        </Link>
        <Link href=''>
        <Image src="/facebook.png" alt="" width={24} height={24}/>
        </Link>
        <Link href=''>
        <Image src="/insta.png" alt="" width={24} height={24}/>
        </Link>
        <Link href=''>
        <Image src="/twitter.png" alt="" width={24} height={24}/>
        </Link>
        <Link href=''>
        <Image src="/linkdin.png" alt="" width={24} height={24}/>
        </Link>
      </div>
      {/* menu navigation for phone */}
      <div  className=" md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=> setOpen((value)=>!value)}>
          <motion.div variants={topVariant} animate={open? "opened":"closed"} className=  {open?"w-10 h-1  bg-white rounded origin-left":"w-10 h-1  bg-black rounded"}></motion.div>
          <motion.div variants={centerVariant} animate={open? "opened":"closed"} className={open?"w-10 h-1  rounded":"w-10 h-1  bg-black rounded"}></motion.div>
          <motion.div variants={bottomVariant} animate={open? "opened":"closed"} className={open?"w-10 h-1  bg-white rounded origin-left":"w-10 h-1  bg-black rounded"}></motion.div>
        </button>
        {open && (
        <motion.div variants={listVariant} initial="closed" animate="opened" className="absolute top-0 left-0 h-screen w-screen bg-black flex flex-col justify-center text-white gap-8 text-4xl z-40">
         
         {links.map((linkItem)=>(
          <motion.div variants={listItemVariant} key={linkItem.name}>
          <Link className="flex item-center justify-center" href={linkItem.link}>{linkItem.name}</Link>
          </motion.div>
         ))}
         
        </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
