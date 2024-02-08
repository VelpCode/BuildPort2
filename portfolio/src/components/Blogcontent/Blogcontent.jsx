import React from 'react'
import { useParams } from "react-router-dom";


const Blogcontent = () => {

  const { id }= useParams()


  

  const blog = {
    
    'id': 1,
    'title': 'who i am!',
    'desc': 'brief description on who i am',
    'coverImg': 'https://i.ibb.co/tCVH5R6/whoami.png',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',


    'authorName': 'velp',
    'authorDesc': 'Creative Developer & Designer'

  }



  return (
    <div>
      <div className = "w-full pb">
        <div className = "max-w-[1240px] mx-auto">
          <div className='grid lg:grid-cols-3 md:grid-cols-3 ss:gri-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss: pt-20 text-black'>

            <div className = "col-span-2 gap-x-8 gap-y-8">
              <img className='h-30 object-cover' src = {"kdakdjas"} />
              <h1 className='font-bold text-6xl my-1 pt-4'>{blog.title}</h1>
              <div className='pt-5 '><p>{blog.content}</p></div>
            </div>

            <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogcontent