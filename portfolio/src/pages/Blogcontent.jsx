import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Content from '../components/Blogcontent/Blogcontent'
import { motion } from "framer-motion";
import { useScroll } from 'framer-motion';
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useHistory } from 'react-router-dom';


const Blogcontent = () => {
  return (
    <div>
        <Link to = "/blog">
            <motion.div className = "bbix mt-5 inline-flex items-center" 
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "2px 10px 8px rgb(255,255,255)",
                }}>
                  <FaArrowLeft 
                className='text-[2vh] mr-[2vh]'/>
                  Back 
                </motion.div>
          </Link>
          <Content />

    </div>
  )
}

export default Blogcontent