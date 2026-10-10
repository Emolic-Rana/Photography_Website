import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes