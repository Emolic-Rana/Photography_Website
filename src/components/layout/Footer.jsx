import { Link } from 'react-router-dom'
import { FaInstagram, FaPinterestP } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="border-t border-fog/20 px-6 md:px-12 pt-20 pb-8 bg-ink">
      <div className="grid md:grid-cols-3 gap-12 md:gap-6 items-center">
        {/* Left — contact & social */}
        <div>
          <h3 className="font-display text-2xl mb-4">The LightBox Production</h3>
          <p className="font-body text-xs text-fog uppercase tracking-wide leading-relaxed mb-4">
            Based in Uttarakhand <br /> Capturing stories, one frame at a time
          </p>

          <a href="mailto:thelightboxproduction72@gmail.com"
            className="font-body text-xs text-fog tracking-wide hover:text-bone transition-colors"
          >
            thelightboxproduction72@gmail.com
          </a>
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Instagram" className="text-fog hover:text-bone transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-fog hover:text-bone transition-colors">
              <FaPinterestP size={16} />
            </a>
          </div>
        </div>

        {/* Middle — logo only, bigger on mobile too */}
        <div className="flex justify-center">
          <img
            src="/images/logo_1.png"
            alt="Lens & Light"
            className="h-28 md:h-30 w-auto"
          />
        </div>

        {/* Right — nav links, row layout on mobile */}
        <div className="flex flex-row justify-center md:justify-end gap-x-10 font-body text-xs uppercase tracking-widest text-fog">
          <div className="flex flex-col gap-3">
            <Link to="/" className="hover:text-bone transition-colors">Home</Link>
            <Link to="/about" className="hover:text-bone transition-colors">About</Link>
            <Link to="/gallery" className="hover:text-bone transition-colors">Portfolio</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/services" className="hover:text-bone transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-bone transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright strip */}
      <div className="mt-16 pt-6 border-t border-fog/20 text-center">
        <p className="font-body text-[11px] text-fog uppercase tracking-widest">
          © {new Date().getFullYear()} Lens & Light Creative — All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer