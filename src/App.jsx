import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/Homepage'
import Pricingpage from './pages/Pricingpage'
import Footer from './components/Footer'
import Usecasepage from './pages/Usecasepage'
import ContactusPage from './pages/Contactuspage'

function App() {

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-[#F5F3EA] ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricingpage/>} />
          <Route path="/usecase" element={<Usecasepage/>} />
          <Route path="/contact" element={<ContactusPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App
