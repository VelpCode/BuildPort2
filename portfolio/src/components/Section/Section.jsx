import React from 'react'
import Divspl from './DivSplash.png'
import "./section.css"
import { motion } from "framer-motion"
import { useScroll } from 'framer-motion'

const Section = () => {
  return (
    <div className="cards">
        <div className="card">
            <img className = "divspal h-[50vh]" src= {Divspl} alt="" />
        </div>
        <div className="card">
            <img className = "divspal h-[50vh]" src= {Divspl} alt="" />
        </div>
        <div className="card">
            <img className = "divspal h-[50vh]" src= {Divspl} alt="" />
        </div>
        <div className="card">
            <img className = "divspal h-[50vh]" src= {Divspl} alt="" />
        </div>
    </div>
  )
}

export default Section