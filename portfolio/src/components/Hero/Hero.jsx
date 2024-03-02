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
      <div className='max-w-[1200px] p-20 mx-auto container flex justify-between items-center h-screen w-full'>
          <div className="borderleft flex-col items-start max-w-[200vh] mt-20 sm:justify-center xs:justify-center">
              <h1 className='headdie text-5xl font-semibold mt-3'>I'm a <span className = "text-ind text-indigo-500">creative</span> <br/> developer & designer.</h1>
              
              <p className='paratext text-sm mt-7 w-[600px]'>Web builder combining my passions, sharing ideas, creating products and templates that solve problems.


  </p>
                <div className="icons flex text-[30px] gap-8 mt-8">
                <a className = "text-[30px]" href="https://twitter.com/velpcode" target="_blank" rel="noopener noreferrer">
                  <FaTwitter/>
                </a>
                <a className = "text-[30px]" href="https://www.linkedin.com/in/aman-velpula-9b8b3619b/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a className = "text-[30px]" href="https://www.instagram.com/velpwrld/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                  <TbWriting />
                  </div>
                  <motion.div className = "bbix mt-5 pointer inline-flex items-center" 
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "2px 10px 8px rgb(255,255,255)",
                  }}>
                  <a href = "#work">
                    See my work
                  </a>
                  <FaArrowRight 
                  className='text-[20px] ml-3'/></motion.div>
                  <YourIcon  className = "mamooty ml-8"/>
                </div>
          <div className="borderright  flex flex-col items-start max-w-[1000px]">
              <img className="ladoo" src ={Velp} />
              <div className="stacktech text-[30px] flex mt-10 gap-2 ">
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