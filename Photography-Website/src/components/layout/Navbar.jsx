import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from 'react-icons/fa'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu open hone par background scroll lock karo
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup — component unmount hone par bhi reset kar do
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-colors duration-300 ${
          scrolled ? 'bg-ink/90 backdrop-blur-sm border-b border-fog/10' : 'bg-transparent'
        }`}
      >
        <Link
          to="/"
          className="font-display text-xl tracking-wide text-bone"
          onClick={() => setOpen(false)}
        >
          The LightBox Production
        </Link>

        <nav className="hidden md:flex gap-10 font-body text-sm tracking-wide uppercase text-bone">
          <Link to="/gallery" className="hover:text-safelight transition-colors">Gallery</Link>
          <Link to="/about" className="hover:text-safelight transition-colors">About</Link>
          <Link to="/services" className="hover:text-safelight transition-colors">Pricing</Link>
          <Link to="/contact" className="hover:text-safelight transition-colors">Contact</Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-bone relative z-50"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 md:hidden">
          <Link to="/gallery" onClick={() => setOpen(false)} className="font-display text-3xl text-bone hover:text-safelight transition-colors">
            Gallery
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="font-display text-3xl text-bone hover:text-safelight transition-colors">
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)} className="font-display text-3xl text-bone hover:text-safelight transition-colors">
            Services
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="font-display text-3xl text-bone hover:text-safelight transition-colors">
            Contact
          </Link>

          <div className="flex gap-6 mt-6">
            <a href="#" aria-label="Instagram" className="text-fog hover:text-bone transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="text-fog hover:text-bone transition-colors">
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar