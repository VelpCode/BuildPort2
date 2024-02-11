import React from 'react'
import './hero.css'
import Velp from './Velp3.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbWriting } from "react-icons/tb";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useScroll } from 'framer-motion';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { ReactComponent as YourIcon } from './undraw_fun-underline.svg';
import { ReactComponent as Arrow } from './archedarrow.svg';
import { SiFramer } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";





const Hero = () => {
  return (
    <div className='container flex justify-between items-center h-screen w-full md:flex-col sm:flex-col xs:flex-col'>
        <div className="borderleft flex flex-col items-start max-w-[200vh] mt-20 md:justify-center sm:justify-center xs:justify-center">
            <h1 className='text-5xl font-semibold mt-3'>I'm a <span className = "text-ind text-indigo-500">creative</span> <br/> developer & designer.</h1>
            
            <p className='paratext text-l mt-7 w-[100vh]'>I specialize in building stunning websites & applications that help individuals in enhancing their productivity, programming & daily goals.


</p>
              <div className="icons flex text-[5vh] gap-8 mt-8">
                <FaTwitter/>
                <FaLinkedinIn />
                <FaInstagram />
                <TbWriting />
                </div>
                <motion.div className = "bbix font-bold mt-5 inline-flex items-center" 
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "2px 10px 8px rgb(255,255,255)",
                }}>
                  See my work 
                <FaArrowRight 
                className='text-[5vh] ml-3'/></motion.div>
                <YourIcon  className = "mamooty ml-8"/>
              </div>
          <Arrow className = "pindu"/>
        <div className="borderright  flex flex-col items-start max-w-[100vh]">
            <img className="ladoo" src ={Velp} />
            <div className="stacktech text-[6vh] flex mt-10 gap-2 ">
              <IoLogoJavascript />
              <FaReact />
              <IoLogoFigma />
              <SiExpress />
              <SiMongodb />
              <SiTailwindcss />
              < SiFramer />
              <SiAdobephotoshop  />
            </div>
        </div>

    </div>


  )
}

export default Hero