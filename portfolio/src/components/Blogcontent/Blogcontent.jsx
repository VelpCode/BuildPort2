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
        
        I started my tech journey documenting my coding progress on twitter which led me to learning how to write better, which then led me to learn how to build templates on notion, which then led me how to design interfaces..
        
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
        "tags": "Life",
        "title": 'Balancing multiple skills',
        'desc': 'How Im going about balancing code, writing..',
        'coverImg': 'https://i.ibb.co/48LHr7X/JanRecap.png',
        'content': ` **ever since I could remember, the people around me have always described me as a jack of all trades**
        
        sometimes even I catch myself not knowing what to say when asked who i am and what I’m good at.
        
        and it’s true, i’ve never been able to strictly limit myself to a single skill or activity.
        
        i’ve always admired people that are able to dial into a single skill, obsess over it night and day, these beasts make the most progress in their respective crafts.
        
        but that’s just not me, if I’m not working on different things, I don’t want it.

        right now a few skills I’m building (in public) are:
        
        **1) coding - web development, front & backend development**
        
        **2) design - figma, photoshop, tailwindCSS & template components**
        
        **3) writing - note taking, perspective sharing, social media writing.**
        
        **4) art - illustrations, sketches, freeform doodles, character design.**
        
        it’s a lot, i’m doing a lot, but I love every single fucking part of it.
        
        am I cutting my progress short? maybe, but I’m trying to approach it in a structured way.
        
        here’s how I break it down:
        
        **the first 1-2 hours for my mornings is strictly for writing, **
        
        i write as much as i can, the stuff that’s on my mind, problems I’m going through, how I’ve fixed them, whateverelse.. this post right now is that first hour I’m utilizing.
        
        heading into the afternoons i switch locations up on campus out of habit, and we enter smelly developer mode, 
        
        i like switching locations because it puts me in different mental states.
        
        **the next 3-6 hours are entirely for code, design or learning concepts,** hours vary depending if I’ve got work or not. 
        
        and for art, I approach it very different..
        
        it’s more intuition based and when I feel a lot more creative, I’ll get some sketches in, create some concepts for ideas, get in that zone. this usually hits me once a week.
        
        **it's not an equal distribution of effort either**
        
        my main focus is building up my dev skills, I’m approaching everything else secondary, but they are needed for **VELP** as a vehicale to function.
        
        will this work for everyone? probably not, but if you’re a multipassionate person, I know for a fact that tunnel visioning into one thing is not going to work for you.
        
        we love jumping into different worlds every now and then
        
        and creating our own.
        
        if you liked this, or have a different perspective, let me know, shoot me a dm.
        
        always open to new perspectives & conversations with my builders.
        
        until next time, stay blessed, stay hydrated.
        
        velp ❤️
        `
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