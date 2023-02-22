import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Footer from './components/Footer'

import projectsData from './data/projectsData'
import toolsData from './data/toolsData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Hero />
      
      <Projects projects={projectsData} />
      <Tools tools={toolsData} />

      <Footer />
    </div>
  </React.StrictMode>
)
