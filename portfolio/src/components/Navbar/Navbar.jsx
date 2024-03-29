import React from 'react'
import "./navbar.css"
import Pixvelp from "./PXELVELP.png"
import { motion } from "framer-motion"
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Navbar = () => {
  return (

    <div className="navbar inline-flex items-center">
        <div className="logo">
          <h1 className='fontlad text-3xl font-extrabold'><span style={{ color: '#6366F1' }}>&lt;</span>velp<span style={{ color: '#6366F1' }}>/&gt;</span></h1>
        </div>
        <div className="items">
            <ul className='inline-flex items-center gap-6'>
                <button><a href = "#work">Work</a></button>
                <button><a href ="#templates">Templates</a></button>
                  <Link to = "/blog">
                    <button>Blog</button>
                  </Link>
                  <Link to = "/about">
                    <button>Passions</button>
                  </Link>
                <li>
                <motion.div className = 
                "bbix inline-flex items-center cursor-pointer" 
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                
                onClick={() => alert('Feature being built.. 🛠️')}>Let's talk 
               </motion.div>
              </li>
            </ul>
        </div>

    </div>


/* const Navbar = () => {



  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
  
                <div className='flex items-center'>
                    <img src={Pixvelp} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' />
                </div>
          
  
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                    </ul>
                </div>
  
  
  
                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='border-none bg-transparent text-black mr-4'>Login</button>
                    <button className='px-8 py-3'>Sign Up</button>
  
                </div>
  
                
  
        </div>
        <ul className={'absolute bg-white w-full px-8 md:hidden'}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                        <div className='flex flex-col my-4'>
                            <button className='bg-transparent text-black mb-4 py-3 px-8'>Login</button>
                            <button className='px-8 py-3'>Sign Up</button>
                        </div>
        </ul>
  
    </div>
  )
  }
   */

  )
}

export default Navbar