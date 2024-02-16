import React from 'react'
import Shit from './shit.png'
import Dude from './dude.png'
import Ladoo from './Ladoo.png'
import Velp from './Amanoty.png'
import Activ from './Addactiv.png'
import "./section.css"
import { motion } from "framer-motion"
import { useScroll } from 'framer-motion'



    const Section = () => {
        return (
            <div className="maindiv">
              <div className="subparts1">
                <div className="alignment1">
                  <h1 className='heading text-4xl font-semibold'><span style={{ color: '#6366F1' }}>&lt;</span>Work<span style={{ color: '#6366F1' }}>/&gt;</span></h1>
                  <div>
                    <img className="card object-cover cardpart1 bg-cover" src = {Shit}></img>
                    <div className="cardtextsub gap-2">
                      <div className='bubble'>NodeJs</div>
                      <div className='bubble'>React</div>
                      <div className='bubble text-xs'>Suprabase</div>
                      <div className='bubble text-xs'>Digital Art</div>
                    </div>
                    <h1 className="cardmaintxt text-2xl font-semibold">Divsplash Creative.</h1>
                    <h3 className="cardmaintxt">Open-source platform for developers to use illustrations<br/> for webpages.</h3>
                  </div>
        
                  <div>
                    <img className="card object-cover cardpart1 bg-cover" src = {Velp}></img>
                    <div className="cardtextsub">
                    <div className='bubble'>Code</div>
                      <div className='bubble'>Design</div>
                    </div>
                    <h1 className="cardmaintxt text-2xl font-semibold">Interactive Portfolio Site</h1>
                    <h3 className="cardmaintxt">Designed & developed a portfolio site with <br/>background design, 2D CSS animations.</h3>
                  </div>
        
                </div>
              </div>
        
              <div className="subparts2">
                <div className="alignment2">
                  <div>
                  <img className="card object-cover cardpart2 bg-cover" src = {Ladoo}></img>
                    <div className="cardtextsub">
                      <div className='bubble'>Design</div>
                      <div className='bubble'>Figma</div>
                      <div className='bubble text-xs'>HTML+CSS</div>
                    </div>
                    <h1 className="cardmaintxt text-2xl font-semibold">Website Templates.</h1>
                    <h3 className="cardmaintxt">Basic website landing page templates</h3>
                  </div>
                  <div>
                  <img className="card object-cover cardpart2 bg-cover" src = {Activ}></img>
                    <div className="cardtextsub">
                    <div className='bubble'>NodeJs</div>
                      <div className='bubble'>React</div>
                      <div className='bubble text-xs'>MongoDB</div>
                      <div className='bubble text-xs'>TailwindCSS</div>
                    </div>
                    <h1 className="cardmaintxt text-2xl font-semibold">FullStack Activity Tracker.</h1>
                    <h3 className="cardmaintxt">Activity tracker to balance a lot of tasks without <br/> feeling overwhelmed.</h3>
                  </div>
        
                </div>
              </div>
            </div>
          );
        }
        
        export default Section;
        

/*     <div className="container mt-[10vh]">
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

export default Section */