import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Section from "../components/Section/Section";
import Quote from "../components/Quote/Quote";
import Footer from "../components/Footer/Footer";


const Home = () =>{

    return (

        <>
            <Navbar />
            <Hero />
            <Quote />
            <Products />
            <Section />
            <Footer />
        </>

    )

}


export default Home;