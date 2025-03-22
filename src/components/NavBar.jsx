import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react'

import { BriefcaseBusiness, Linkedin } from "lucide-react";

function NavBar() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
      setShow(!show);
    };

  return (
    <div className='bg-black relative flex   text-white h-screen w-full '>
      
    
<AnimatePresence>
      {
        show &&   <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: -120 }} 
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeIn" }}

        className="navbar z-10 absolute -top-16 -left-0 bg-white -100 md:min-w-[500px] min-h-[120vh] rotate-[-25deg]"
      >
        <div className="flex flex-col rotate-[25deg]  text-black gap-12 justify-end items-center md:ml-[100px] my-[100px] p-12">
        <motion.div
     
          transition={{ duration: 0.5, ease: "easeOut" }}

        onClick={handleClick} className="text-red-600 top-[-50px] md:left-[255px] border-2 rounded-full border-gray-200 px-2 bg-gray-400 font-bold hover:text-red-800 transition-duration-300 hover:bg-gray-500 cursor-pointer absolute z-10 text-2xl" > X</motion.div>


          <h1 className='text-4xl hover:text-blue-500 hover:underline cursor-pointer transition duration-300 '>Home</h1>
          <hr className="bg-gray-200 p-[0.2px] ml-12 border-0 w-[210px]" />

          <h1 className='text-4xl hover:text-blue-500 hover:underline cursor-pointer transition duration-300 '>About</h1>
          <hr className="bg-gray-200 p-[0.2px] ml-12 border-0 w-[210px]" />

          <h1 className='text-4xl hover:text-blue-500 hover:underline cursor-pointer transition duration-300 '>Page</h1>

          <hr className="bg-gray-200 p-[0.2px] ml-12 border-0 w-[210px]" />

          <h1 className='text-4xl hover:text-blue-500 hover:underline cursor-pointer transition duration-300 '>Contact</h1>
          <hr className="bg-gray-200 p-[0.2px] ml-12 border-0 w-[210px]" />

        </div>

      </motion.div>

      }
      </AnimatePresence>

    <div onClick={handleClick} className="div absolute left-6 flex justify-center items-start">
      <h1  className=' text-center border-2 ml-12 z-10 rounded-full px-4 py-2 hover:bg-blue-500 mt-12 text-4xl'>{
        <>
        <div className="w-[20px] p-[1px] mb-1 text-white bg-white border-0"></div>
        <div className="w-[20px] p-[1px] mb-1 text-white bg-white border-0"></div>
        <div className="w-[20px] p-[1px]  text-white bg-white border-0"></div></>
        }</h1>
      </div>

      <div className="flex px-4 w-screen border-1 md:border-4  flex-col justify-center md:items-center items-start gap-4">
        <h1 className='text-3xl md:text-6xl text-center mx-auto'>Navbar Creation</h1>
        <p className="text-gray-600 md:text-2xl">This is a simple navbar created using React and Framer Motion</p>
        <p className="text-gray-600 md:text-2xl">Feel free to contact me</p>
       <div className="flex gap-5 mx-auto">
       <button onClick={() => {
          window.open('https://www.linkedin.com/in/nmnnrb/')

       }} className="text-white mx-auto bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-full transition duration-300">    <Linkedin /></button>
       <button 
     onClick={() => {
          window.open('https://react-portfolio-ashy-theta.vercel.app/')

       }} className="text-white mx-auto bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-full transition duration-300">   <BriefcaseBusiness /> </button>
       </div>
</div>
    </div>
  )
}

export default NavBar
