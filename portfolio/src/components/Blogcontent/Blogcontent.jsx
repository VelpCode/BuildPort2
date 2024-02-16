import React from 'react'
import { useParams } from "react-router-dom";


const Blogcontent = () => {

  const { id }= useParams()


  
  const blogs = [
    {
        "id":1,
        "title": 'who am i',
        "tags": "VELP",
        'desc': 'what these blogs are going to be about, who am i..',
        'coverImg': 'https://i.ibb.co/tCVH5R6/whoami.png',
        'content': `what is up apes.

        before I get into who I am, I just want to say that I’m honestly hyped that this is up, and you can see this.
        
        the process of building this entire website from the design, to the branding to the ‘blog’ section and this content you’re currently looking at has been nothing but amazing.
        
        I’ve struggled with 
        
        who am I?
        
        If you don’t follow me on social media or you aren’t a direct friend, you know a thing about me
        
        velp (aman velpula) i’m a 21 year old university student that has 
        
        growing up, I was a rebellious that had zero for school, i was the kid that would doodle on the desks, attempt flips from roofs, 
        
        my whole life has been taking a bunch of risks, trying a lot of shit out, 
        
        which has lead me on a quest to keep experiment, try a bunch of things out and improve the multiple passions I’ve always naturaully stuck to and aim to find a sick way to combine all of it together.
        
        **what am i going to write about?**
        
        **I** honestly i don’t know yet. I’m using this blog as a means to find out more of what I want to write about, but for now.. I’m going to dive deeper into topics about combining passions, code, design, writing and overall lifestyle.
        
        I know this caters to a very niche audience,
        
        One step @ a time.`
    },
    {
        "id":2,
        "tags": "Tech",
        "title": 'Lessons for Jan',
        'desc': 'Everything I have learned this Jan, pitfalls probelms..',
        'coverImg': 'https://i.ibb.co/48LHr7X/JanRecap.png'
    },
    {
        "id":3,
        "tags": "Random",
        "title": 'Planetsat',
        'desc': 'It always ends up leading there eventually..',
        'coverImg': 'https://i.ibb.co/f0zqc1v/recap.png'
    },
]

  let blog = blogs.filter(blog => blog.id == id)
  blog = blog[0]
  console.log(blog);

  return (  
    <div>
      <div className = "w-full pb">
        <div className = "max-w-[1240px] mx-auto">
          <div className='grid lg:grid-cols-3 md:grid-cols-3 ss:gri-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss: pt-20 text-black'>
            <div className = "col-span-2 gap-x-8 gap-y-8">
              <h1 className='font-bold text-5xl my-1 pt-4'>{blog.title}</h1>
              <div className='pt-5 '><p>{blog.content}</p></div>
            </div>
            <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[450px]'>
                    <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={`https://i.ibb.co/LRmLZqq/velp.jpg" alt="velp" border="0`} />
                        <div className="headsec flex justify-center align-middle items-center">
                        <h1 className='font-bold text-2xl text-gray-900 pt-3'>velp</h1>
                        <img className='p-2 w-10 h-10 rounded-full' src={`https://i.ibb.co/cFHnxCP/Ganapatti.png" alt="Ganapatti" border="0`} />
                        </div>
                        <p className='text-center text-gray-900 font-medium p-3'>Creative Developer & designer building things on the web</p>
                    </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogcontent