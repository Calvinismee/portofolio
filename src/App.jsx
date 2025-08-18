import Hero from './components/Hero'
import About from './components/About'
import './styles/App.css'

function App() {
  return (
    <div className="flex flex-col items-center w-full p-10">
      <Hero />
      <About />
      <p className="read-the-docs">
        Balls
      </p>
    </div>
  )
}

export default App
