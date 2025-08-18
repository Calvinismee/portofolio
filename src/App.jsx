import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './styles/App.css';

function App() {
  return (
    <div className="flex flex-col items-center w-full p-10 gap-10">
      <Hero />
      <About />
      <Projects />
      <p className="read-the-docs">
        Balls
      </p>
    </div>
  )
}

export default App
