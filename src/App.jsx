import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Footer from './components/Footer';
import { AnimationProvider } from './utils/AnimationProvider';
import './styles/App.css';

function App() {
  return (
    <AnimationProvider>
        <Navbar />
        <div id="hero">
            <Hero />
          </div>
        <div className="flex flex-col items-center w-full p-10 gap-52">
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
    </AnimationProvider>
  )
}

export default App
