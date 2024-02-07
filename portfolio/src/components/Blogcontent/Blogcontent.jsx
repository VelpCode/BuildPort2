import React from 'react'


const Blogcontent = () => {


  const blog = {


    
  }




  return (
    <div>
      <div className = "w-full pb">
        <div className = "max-w-[1240px] mx-auto">
          <div className='grid lg:grid-cols-3 md:grid-cols-3 ss:gri-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss: pt-20 text-black'>

            <div className = "col-span-2 gap-x-8 gap-y-8">
              <img className='h-30 object-cover' src = {"kdakdjas"} />
              <h1 className='font-bold text-6xl my-1 pt-5'>Blog Title.</h1>
              <div className='pt-5 '><p>This is the blog content.</p></div>
            </div>

            <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogcontent