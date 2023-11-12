import './global.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutSection from './components/AboutSection'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-[#1f1f1f] px-16'>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-24 mx-auto">
          <Routes>
            <Route path='/' element={<HeroSection />}/>
            <Route path='/#about' element={<AboutSection />}/>
          </Routes>
        </div>
      </BrowserRouter>
      <AboutSection />
      
    </div>
  )
}

export default App
