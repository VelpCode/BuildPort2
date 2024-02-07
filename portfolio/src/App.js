import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
import Section from './components/Section/Section';
import Products from './components/Products/Products';
import Quote from './components/Quote/Quote';
import Blogcontent from './components/Blogcontent/Blogcontent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Article from './pages/Article';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/blog" element = {<Blog />} />
          <Route path = "/article" element = {<Article />} />
          <Route path = "/blogcontent" element = {<Blogcontent />} />
x         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
