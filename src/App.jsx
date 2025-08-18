import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div>
      <div className="flex flex-col items-center w-full p-10 gap-10">
        <Hero />
        <About />
        <Projects />
        <Skillset />
      </div>
      <Footer />
    </div>
  )
}

export default App
