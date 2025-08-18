import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-full p-10 gap-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skillset />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
