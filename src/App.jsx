import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import projects from './data/projects'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects projects={projects} />
    </div>
  )
}

