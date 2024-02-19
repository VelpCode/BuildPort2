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
            <div id = "work" className="maindiv">
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
        

