import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import projects from './data/projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className="container">
        <Header />
        <Hero />
        <Projects projects={projects} />
      </div>
  </React.StrictMode>
)
