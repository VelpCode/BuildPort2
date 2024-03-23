import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
import Section from './components/Section/Section';
import Products from './components/Products/Products';
import Quote from './components/Quote/Quote';
import Blogpage from './pages/Blogpage';
import Blogcontent from './pages/Blogcontent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article';
import useFetch from './hooks/useFetch';

function App() {


  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs')
  if(loading) return <p>Loading..</p>
  if(error) return <p>Error!</p>

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/blog" element = {<Blogpage blogs = {data?data:""}/>} />
          <Route path = "/article" element = {<Article />} />
          <Route path = "/blogcontent/:id" element = {<Blogcontent />} />
x         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
