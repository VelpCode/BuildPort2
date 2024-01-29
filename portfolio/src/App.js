import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
import Section from './components/Section/Section';
import Products from './components/Products/Products';
import Quote from './components/Quote/Quote';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Products />
      <Section />
    </>
  );
}

export default App;
