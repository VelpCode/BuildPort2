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
        'content': '"What is up apes. Before I get into it, just want to say that I’m fucking hyped that this is up, and you can see this. The process of building this entire website, from the design, to the branding to the ‘blog’ section and this content you’re currently looking at has been nothing but amazing. As an aspiring developer, designer & writer, I wanted to make this to perfectly encapsulate all of these passions and essentially use this as a lifelong vessel to keep honing on these interests. So thank you. Thank you for reading this, because you were my motivation to build this, and now that it’s up, I’m going to continue writing for me and for you. Who am I? If you don’t follow me on social media or you aren’t a direct friend, you know a thing about me. Velp (Aman Velpula), I’m a 21-year-old university student that has growing up, I was a rebellious that had no interest in school, I was that kid that would doodle on the desks, try, which has led me on a quest to keep improving on my multiple passions, building skills and honestly becoming a modern-day polymath. Who decided that I can only stick to ‘one thing’? Who decided that what am I going to write about? Honestly, I don’t know yet. I want to discover more of that by actually making more posts, writing, and seeing what I like more, but foundationally, I’m going to document my journey'
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
    }
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogcontent