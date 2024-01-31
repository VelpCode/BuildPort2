import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import Quote from "../components/Quote/Quote";
import "./blogs.css"

const Blog = () => {

    return (
        
        <div>
            <Navbar />

            <div className="headtitle mt-[15vh] max-w-[200vh]">

                <div className="leftsec">
                <h1 className="curious text-6xl font-semibold"><span style={{ color: '#6366F1' }}>&lt;</span> Combining my curiosities.</h1>


                </div>
                <div className="rightsec">
                <h1 className="curious text-3xl font-semibold">Diving deeper into lifestyle, code, design, writing. <span style={{ color: '#6366F1' }}>/&gt;</span></h1>
                </div>

            </div>

            <div className="articleposts mt-20 cursor-pointer space-y-10">
                <div className="artone">
                    <div className="date">2024-01-31</div>
                    <div className="articlename font-semibold underline">Understanding how to get to that planet 🪐</div>
                    <div className="bubbles flex gap-2">
                        <div className="bubble font-bold text-xs mt-2">
                        Rant
                        </div>
                        <div className="bubble font-bold text-xs mt-2">
                        Random
                        </div>
                    </div>

                </div>
                <div className="artone">
                    <div className="date">2024-01-31</div>
                    <div className="articlename font-semibold underline">Thoughts on stacking skills, creating passions.</div>
                    <div className="bubbles flex gap-2">
                        <div className="bubble font-bold text-xs mt-2">
                        Thoughts
                        </div>
                        <div className="bubble font-bold text-xs mt-2">
                        NoCode
                        </div>
                    </div>
                </div>
                <div className="artone">
                    <div className="date">2024-01-31</div>
                    <div className="articlename font-semibold underline">Building in public.</div>
                    <div className="bubbles flex gap-2">
                        <div className="bubble font-bold text-xs mt-2">
                        Rant
                        </div>
                        <div className="bubble font-bold text-xs mt-2">
                        Random
                        </div>
                    </div>

                </div>
            </div>


        <Quote />


        </div>

    )


}

export default Blog;