import React from 'react'
import "./navbar.css"
import Pixvelp from "./PXELVELP.png"
import { motion } from "framer-motion"
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Navbar = () => {
  return (

    <div className="seperator inline-flex items-center justify-between">
        <div className="logo">
          <h1 className='fontlad text-3xl font-extrabold'><span style={{ color: '#6366F1' }}>&lt;</span>velp<span style={{ color: '#6366F1' }}>/&gt;</span></h1>
        </div>
        <div className="items">
            <ul className='inline-flex items-center gap-5'>
                  <Link to = "/home">
                    <button>Projects</button>
                  </Link>
                <li><a>My Shop</a></li>
                  <Link to = "/blog">
                    <button>Blog</button>
                  </Link>
                <li><a>About</a></li>
                <li>
                <motion.div className = 
                "bbix inline-flex items-center cursor-pointer" 
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}>Let's talk 
               </motion.div>
              </li>
            </ul>
        </div>

    </div>

  )
}

export default Navbar