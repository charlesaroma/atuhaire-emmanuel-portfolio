import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Page imports
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

// Component imports
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-primary)] text-text flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
