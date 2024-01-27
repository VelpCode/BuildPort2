import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
import Section from './components/Section/Section';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Section />
    </>
  );
}

export default App;
