import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Quote from "../components/Quote/Quote";
import "./blogs.css"
import Article from "./Article";
import { Link } from "react-router-dom";


const Blog = () => {


    const blogs = [

        {
            "id":1,
            "title": 'Blog 1',
            'desc': 'Talking about how to travel to that magical planet',
            'coverImg': 'https://s3-alpha.figma.com/hub/file/1164680562/95e16f73-b877-4d64-8f0e-0d1d652782ea-cover.png'
        },
        {
            "id":2,
            "title": 'Blog 2',
            'desc': 'Talking about how to travel to that magical planet',
            'coverImg': 'https://s3-alpha.figma.com/hub/file/1164680562/95e16f73-b877-4d64-8f0e-0d1d652782ea-cover.png'
        },
        {
            "id":1,
            "title": 'Blog 3',
            'desc': 'Talking about how to travel to that magical planet',
            'coverImg': 'https://s3-alpha.figma.com/hub/file/1164680562/95e16f73-b877-4d64-8f0e-0d1d652782ea-cover.png'
        }

    ]

    return (
        
        <div className="w-full">
            <Navbar />
        <div className="max-w-[1240px] mx-auto my-20">
            <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
                
                
                {blogs.map((blog) => 

                    <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                    <img className="h-56 w-full object-cover" src={blog.coverImg} />
                    <div className="p-8">
                            <div className="font-bold text-2xl my-1">{blog.title}</div>
                            <div className="text-sm text-gray-600 my-2">{blog.desc}</div>
                        </div>
                    </div>
                
                )}

                
            </div>
        </div>
        </div>

    )


}

export default Blog;