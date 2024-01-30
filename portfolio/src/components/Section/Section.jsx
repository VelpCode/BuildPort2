import React from 'react'
import Shit from './shit.png'
import Dude from './dude.png'
import "./section.css"
import { motion } from "framer-motion"
import { useScroll } from 'framer-motion'

const Section = () => {
  return (
    <div className="container mt-[10vh]">
    <div className="textsec">
            <h1 className='t text-5xl font-semibold'><span style={{ color: '#6366F1' }}>&lt;</span>Projects</h1>
            <h1 className='lambo text-2xl mb-10'>Check out the projects I've created, mixture of past work & current WIP's.<span className= "text-3xl font-bold" style={{ color: '#6366F1' }}>/&gt;</span></h1>    
        </div>
    <div className="cards flex gap-5 justify-between">
        <div className="card">
            <img className = "divspal h-[50vh]" src= {Shit} alt="" />
            <div className="bubbles flex gap-5 mt-7">
                    <div className="bubble font-bold text-sm">
                        Code
                    </div>
                    <div className="bubble font-bold text-sm">
                        Illustration
                    </div>
                    <div className="bubble font-bold text-xs">
                        Open Source
                    </div>
                </div>
            <div className="textsec">
                <h1 className='t text-4xl mt-5 font-semibold'>DivSplash Creative.</h1>
                <h1 className='subtext text-2xl mt-5 w-[59vh]'>Platform for developers to snag doodles for interactive and clean websites. Illustrations all created by me.</h1>
            </div>
        </div>
        <div className="card">
            <img className = "divspal h-[50vh]" src= {Dude} alt="" />
            <div className="bubbles flex gap-5 mt-7">
                    <div className="bubble font-bold text-sm">
                        Coding
                    </div>
                    <div className="bubble font-bold text-sm">
                        Learning
                    </div>
                </div>
                <div className="textsec">
                <h1 className='t text-4xl mt-5 font-semibold'>Skill Slap - Passion Tracker</h1>
                <h1 className='subtext text-2xl mt-5 w-[59vh]'>Platform for developers to snag doodles for interactive and clean websites. Illustrations all created by me.</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section