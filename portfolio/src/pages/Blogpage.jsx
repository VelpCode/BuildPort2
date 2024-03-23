import React from 'react'
import Blog from './Blog.jsx'


const Blogpage = ({blogs}) => {


  return (
    <div>
        <Blog blogs = {blogs?blogs:""}/>
    </div>
  )
}

export default Blogpage