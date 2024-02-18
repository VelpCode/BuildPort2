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
        'content': `**what is up guys.**

        before I get into it, I just want to say that I’m honestly hyped that this is up, and you can see this.
        
        the process of building this entire website from the code to the design, to the branding to the ‘blog’ section and writing the content you’re currently looking at has been nothing but amazing.
        
        the goal with this wasn’t just to build a portfolio-site, it was to combine my passions and create my own world.
        
        alright, apart from the site..
        
        **who am I?**
        
        If you don’t follow me on social media or you aren’t a direct friend, you’re probably wondering who this dude is.
        
        I go by velp (aman velpula) and i’m a 21 year old university student that has a vast set of interests from design, art, code, weightlifting, flips, psychology, spirituality & a lil more stuff..
        
        I started my tech journey documenting my coding progress on twitter which lead me to learning how to write better, which then lead me to learn how to build templates on notion, which then lead me how to design interfaces..
        
        Which is how I ended up putting this entire site together.
        
        **Yeah.. it all started from connecting the all the dots with the things I've learned from that bird app (X now).**
        
        I’m very greatful for starting this journey & the people I’ve connected with on there.
        
        My goal is to keep improving on my technical skillset and finding unique ways to bridge everything I’ve learned together that can help people solve their problems.
        
        I honestly i don’t know the direction I’m going to go with these blogs, I'm aiming to find that sense of direction the more I write here and share perspectives
        
        but the goal right now is to simply keep improving with my interests.. and take it
        
        **One step @ a time.**
        
        hope you guys stay blessed.
        
        -velp ❤️`
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

  const renderTextWithBold = (text) => {
    // Split text by "**" considering the "**" might be at the start or end of the text
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
      // Check if part is meant to be bold
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (  
    <div>
      <div className = "w-full pb">
        <div className = "max-w-[1240px] mx-auto">
          <div className='grid lg:grid-cols-3 md:grid-cols-3 ss:gri-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss: pt-20 text-black'>
            <div className = "col-span-2 gap-x-8 gap-y-8">
              <h1 className='font-bold text-5xl my-1 pt-4 p-10'>{blog.title}</h1>
              <div className='p-10'>
              {blog.content && blog.content.split('\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {renderTextWithBold(paragraph)}

                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[450px]'>
                    <div>
                        <img className='p-2 w-40 h-40 rounded-full mx-auto object-cover' src={`https://i.ibb.co/LRmLZqq/velp.jpg" alt="velp" border="0`} />
                        <div className="headsec flex justify-center align-middle items-center">
                        <h1 className='font-bold text-5xl text-gray-900 pt-3'>velp</h1>
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