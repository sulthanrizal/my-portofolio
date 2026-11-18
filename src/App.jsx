import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { ThemeProvider } from './ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
