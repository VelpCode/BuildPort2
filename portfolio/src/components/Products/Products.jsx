import React from 'react'
import JavaScr from './1tabbb.png'
import DayPlan from './2tabbb.png'
import Fitnest from './2tabbb.png'
import Dtawp from './2tabbb.png'
import { IoStarSharp } from "react-icons/io5";

import "./products.css"

const Products = () => {
  return (
    <div id = "templates" className="wontainer mt-10 max-w-[1240px]">
        <div className="textsec ml-10">
            <h1 className='headbead t text-4xl font-semibold'><span style={{ color: '#6366F1' }}>&lt;</span>Templates</h1>
            <h1 className='lambo text-xl mb-5'>Notion templates I've built with love, all designed to help you win.<span className= "text-3xl font-bold" style={{ color: '#6366F1' }}>/&gt;</span></h1>    
        </div>

        <div className="max-w-[1240px] mx-auto my-[8vh]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 text-black">
                
                
            <a href="https://velpsworld.gumroad.com/l/javascriptnotes?layout=profile" target="_blank">
                    <div className="bawxz bg-white rounded-xl overflow-hidden drop-shadow-lg">
                    <img className="" src={JavaScr}/>
                    <div className="p-8">
                            <div className="font-bold text-2xl my-1">JS Concept Dashboard</div>
                            <div className="babble text-xs font-thin max-xs mt-2">Code</div>
                            <div className="text-sm text-gray-600 my-2 ml-1 mt-4">JavaScript dashboard with 60 different concepts & notes</div>
                            <div className="read text-xs font-semibold ml-1 mt-3">FREE</div>
                        </div>
                    </div>
            </a>
            <a href="https://velpsworld.gumroad.com/l/designyourself?layout=profile" target="_blank">
                    <div className="bawxz bg-white rounded-xl overflow-hidden drop-shadow-lg">
                    <img className="" src={Dtawp}/>
                    <div className="p-8">
                            <div className="font-bold text-2xl my-1">Design Your Days</div>
                            <div className="babble text-xs font-thin max-xs mt-2 min-w-[8vh]">Systems</div>
                            <div className="text-sm text-gray-600 my-2 ml-1 mt-4">Notion based tracker & activity manager to design your days</div>
                            <div className="read text-xs font-semibold ml-1 mt-3">FREE</div>
                        </div>
                    </div>
            </a>
                
            </div>
            
        </div>



       {/*  <div className="productbox flex justify-between gap-[10vh] align-middle items-center">
            <div className="prodone">
                <img className = " h-[40vh] w-[50vh]" src= {JavaScr} alt="" />
                <div className="bubbles flex gap-5 mt-3">
                    <div className="bubble font-bold text-sm">
                        Coding
                    </div>
                    <div className="bubble font-bold text-sm">
                        Learning
                    </div>
                </div>
                <div className="desc mt-5">
                    <div className="cla text-xl font-semibold">JavaScript Notes</div>
                    <div className="clb max-w-[50vh]">JavaScript dashboard with 60 different concepts & notes</div>
                </div>
                <div className="bbox max-w-[10vh] mt-3 text-center font-bold">FREE!</div>
            </div>
            <div className="prodone">
                <img className = " h-[40vh] w-[50vh]" src= {JavaScr} alt="" />
                <div className="bubbles flex gap-5 mt-3">
                    <div className="bubble font-bold text-sm">
                        Coding
                    </div>
                    <div className="bubble font-bold text-sm">
                        Learning
                    </div>
                </div>
                <div className="desc mt-5">
                    <div className="cla text-xl font-semibold">JavaScript Notes</div>
                    <div className="clb max-w-[50vh]">JavaScript dashboard with 60 different concepts & notes</div>
                </div>
                <div className="bbox max-w-[10vh] mt-3 text-center font-bold">FREE!</div>
            </div>
            <div className="prodone">
                <img className = " h-[40vh] w-[50vh]" src= {JavaScr} alt="" />
                <div className="bubbles flex gap-5 mt-3">
                    <div className="bubble font-bold text-sm">
                        Coding
                    </div>
                    <div className="bubble font-bold text-sm">
                        Learning
                    </div>
                </div>
                <div className="desc mt-5">
                    <div className="cla text-xl font-semibold">JavaScript Notes</div>
                    <div className="clb max-w-[50vh]">JavaScript dashboard with 60 different concepts & notes</div>
                </div>
                <div className="bbox max-w-[10vh] mt-3 text-center font-bold">FREE!</div>
            </div>
        </div> */}
    </div>
  )
}

export default Products