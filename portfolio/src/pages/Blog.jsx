import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Quote from "../components/Quote/Quote";
import "./blogs.css"
import Article from "./Article";
import { Link } from "react-router-dom";


const Blog = () => {

    return (
        
        <div className="w-full">
            <Navbar />
        <div className="max-w-[1240px] mx-auto my-20">
            <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                    <img className="h-56 w-full object-cover" src={"https://s3-alpha.figma.com/hub/file/1164680562/95e16f73-b877-4d64-8f0e-0d1d652782ea-cover.png"} />
                    <div className="p-8">
                        <div className="font-bold text-2xl my-1">Travelling to saturn</div>
                        <div className="text-sm text-gray-600 my-2">Talking about the differences in</div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )


}

export default Blog;