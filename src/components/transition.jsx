"use client";
import Navbar from "@/components/navbar";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = ({ children }) => {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div  key={path} className="h-screen w-screen bg-gradient-to-t from-blue-100 to-red-100">
        <motion.div 
          animate={{ height: "0vh" }}
          exit={{height:"140vh"}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bg-black z-40 h-screen w-screen rounded-b-[100px]"
        ></motion.div>
          <motion.div
          initial={{opacity:1}}
          animate={{opacity:0}}
          exit={{opacity:0}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed m-auto top-0 left-0 right-0 bottom-0 text-8xl z-50 cursor-default h-fit w-fit text-white items-center"
        >{path.substring(1)}</motion.div>
        <motion.div
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition:{ delay:0.5} }}

          className="fixed bg-black z-30 h-screen w-screen bottom-0 rounded-t-[100px]"
        ></motion.div>
      
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default Transition;
