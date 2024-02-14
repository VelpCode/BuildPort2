import React from 'react'
import Doodles from './DOODLES.png'
import Velpdraw from './Velpdraw.jpg'
import Legda from './legday.png'
import Seneca from './Seneca.png'
import './../Section/section.css'
import { motion } from "framer-motion"
import { useScroll } from 'framer-motion'
import { BsPaintBucket } from "react-icons/bs";


const Passions = () => {
  return (
    <div className="maindiv w-[1240px]">
              <div className="subparts1">
                <div className="alignment1">
                  <h1 className='heading text-4xl font-semibold flex'><span style={{ color: '#6366F1' }}>&lt;</span>ART <BsPaintBucket /><span style={{ color: '#6366F1' }}>/&gt;</span></h1>
                  <div>
                    <img className="card object-cover cardpart1 bg-cover" src = {Legda}></img>
                    <h1 className="cardmaintxt text-2xl font-semibold">Hit Legday</h1>
                  </div>
        
                  <div>
                    <img className="card object-cover cardpart1 bg-cover" src = {Doodles}></img>
                    <h1 className="cardmaintxt text-2xl font-semibold">Random Splurge</h1>
                  </div>
        
                </div>
              </div>
        
              <div className="subparts2">
                <div className="alignment2">
                  <div>
                  <img className="card object-cover cardpart2 bg-cover" src = {Velpdraw}></img>
                    <h1 className="cardmaintxt text-2xl font-semibold">Hand sketches.</h1>
                  </div>
                  <div>
                  <img className="card object-cover cardpart2 bg-cover" src = {Seneca}></img>
                    <h1 className="cardmaintxt text-2xl font-semibold">Inspirational Art</h1>
                  </div>
        
                </div>
              </div>
            </div>
  )
}

export default Passions