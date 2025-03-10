'use client'
import {motion } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
   
  const form = useRef()

  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)
  const animatedText = 'Say Hello'

    return (
      <motion.div initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}} className=" h-full">
    <div className="h-full flex flex-col lg:flex-row justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 ">
    <div className=" h-1/2  lg:h-full lg:w-1/2 flex justify-center items-center text-4xl  lg:text-6xl">
      <div>
     {animatedText.split("").map((letter,index)=> <motion.span
       initial={{opacity:1}}  
       animate={{opacity:0}}
       key={index}
       transition={{duration:3, delay: index * 0.1, repeat:Infinity}}
      >
      {letter}
      </motion.span>
       )}
       😉
       </div>
       </div> 
       <form ref={form} className=" bg-red-50 h-1/2 lg:h-full lg:w-1/2 rounded-xl p-24 flex flex-col gap-8 justify-center">
          <span className=" text-xl">Dear Zeeshan,</span>
          <textarea name="" rows="6" className=" bg-transparent outline-none border-b-2 border-black resize-none"></textarea>
          <span className=" text-xl">My Email is:</span>
          <input type="text" className="bg-transparent outline-none border-b-2 border-black" />
          <span className="text-lg">Regards</span>
          {success && (<span className="text-sm text-green-600 font-semibold">Email address sent success</span>)}
          {error && (<span className="text-sm text-red-600 font-semibold">Your mail is not sent</span>)}
          <button  className=" bg-purple-200 rounded-lg font-medium text-black p-4 ">Send</button>
        </form> 
    </div>
    </motion.div>
    )
  }
  
  export default Contact