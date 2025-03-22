import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-zinc-900 h-full max-w-screen flex flex-col  items-center border-white border-[2px] justify-cente">
    <div className="flex flex-col gap-12 items-center justify-center  h-screen">
      <Link to={"/ReactangleCircle"} className=" hover:text-blue-500 hover:cursor-pointer transition duration-300 hover:scale-110 md:text-5xl text-3xl italic underline hover:cursor-pointer text-white">Reactangle and Circle</Link>
      <Link to={"/Navbar"} className=" hover:text-blue-500 hover:scale-110 transition duration-300 md:text-5xl text-3xl italic underline hover:cursor-pointer text-white">Navbar Page</Link>
      <Link to={"/commet"} className=" hover:text-blue-500 hover:scale-110 transition duration-300 md:text-5xl text-3xl italic underline hover:cursor-pointer text-white">Commet Page</Link>
      <Link to={"/loadBar"} className=" hover:text-blue-500 hover:scale-110 transition duration-300 md:text-5xl text-3xl italic underline hover:cursor-pointer text-white">Loading Bar</Link>
      <Link to={"/buttonLoad"} className=" hover:text-blue-500 hover:scale-110 transition duration-300 md:text-5xl text-3xl italic underline hover:cursor-pointer text-white">Loading Bar functionalble</Link>

    </div>
    </div>
  )
}

export default Home