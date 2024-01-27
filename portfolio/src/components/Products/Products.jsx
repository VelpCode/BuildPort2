import React from 'react'
import JavaScr from './1tab.png'
import DayPlan from './2tab.png'
import Fitnest from './2tab.png'
import "./products.css"

const Products = () => {
  return (
    <div className="container mt-10">
        <div className="textsec">
            <h1 className='t text-4xl font-semibold'><span style={{ color: '#6366F1' }}>&lt;</span>Products</h1>
            <h1 className='lambo text-xl mb-5'>Check out the projects I've created, mixture of past work & current WIP's.<span className= "text-3xl font-bold" style={{ color: '#6366F1' }}>/&gt;</span></h1>    
        </div>
        <div className="productbox flex justify-between gap-[10vh] align-middle items-center">
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
        </div>
    </div>
  )
}

export default Products