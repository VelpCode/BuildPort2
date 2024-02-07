import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Quote from "../components/Quote/Quote";
import "./blogs.css"
import Article from "./Article";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const Blog = () => {

    const blogs = [

        {
            "id":1,
            "title": 'who am i',
            "tags": "VELP",
            'desc': 'what these blogs are going to be about, who am i..',
            'coverImg': 'https://i.ibb.co/tCVH5R6/whoami.png'
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

    return (
        
        <div className="w-full">
            <Navbar />
            <div className="headtitle mt-[15vh] max-w-[200vh] items-center justify-center flex flex-col">
                <div className="leftsec">
                <h1 className="curious lg:text-5xl md:text-4xl sm:text-xl font-semibold"><span style={{ color: '#6366F1' }}>&lt;</span> Combining my curiosities.</h1>
                </div>
                <div className="rightsec">
                <h1 className="curious lg:text-2xl md:text-xl sm:text-lg text-gray-600 font-semibold my-2">Diving deeper into lifestyle, code, design, writing. <span style={{ color: '#6366F1' }}>/&gt;</span></h1>
                </div>

            </div>    
        <div className="max-w-[1240px] mx-auto my-[8vh]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 text-black">
                
                
                {blogs.map((blog) => 
                <Link to = {`/blogcontent/${blog.id}`}>
                    <div className="bg-white rounded-xl overflow-hidden drop-shadow-lg">
                    <img className="h-56 w-full object-cover" src={blog.coverImg} />
                    <div className="p-8">
                            <div className="font-bold text-2xl my-1">{blog.title}</div>
                            <div className="babble text-xs font-thin max-xs mt-2">{blog.tags}</div>
                            <div className="text-sm text-gray-600 my-2 ml-1 mt-4">{blog.desc}</div>
                            <div className="read text-xs font-semibold ml-1 mt-3">Read More →</div>
                        </div>
                    </div>
                </Link>

                
                )}

                
            </div>
        </div>
        </div>

    )


}

export default Blog;