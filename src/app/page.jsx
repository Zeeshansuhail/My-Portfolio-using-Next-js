'use client'
import Image from "next/image"
import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <motion.div initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}} className=" h-full">
    <div className=" h-full flex flex-col lg:flex-row lg:items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:48">
    <div className=" h-1/2 lg:h-full lg:w-1/2 relative">
      <Image className=" object-contain" src='/hero.png' fill></Image>
    </div>
    <div className="md:mt-5 h-1/2 lg:h-full lg:w-1/2 lg:mb-4  flex flex-col gap-8 items-center justify-center">
      
        <h1 className=" font-bold text-4xl md:text-5xl">Crafiting Digital Experience, Designing Tommorrow</h1>
        <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae aliquid autem minima vitae praesentium unde earum sapiente ipsum consequatur perferendis ad, aperiam fugiat eos nihil illum odio ullam facere?</p>
      <div className="flex flex-row gap-4 w-full">
        <button className=" p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Works</button>
        <button className="p-4 rounded-lg ring-2 ring-black">Contact Me</button>
      </div>
    </div>
    </div>
    </motion.div>
  )
}

export default HomePage