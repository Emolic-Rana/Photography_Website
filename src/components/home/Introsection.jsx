import { Link } from 'react-router-dom'
import Typewriter from '../common/Typewriter'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

const cld = (publicId, width = 800) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`

function IntroSection() {
  return (
    <section className="px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12 items-center border-t border-fog/20 bg-ink">
      <img
        src={cld('0F5A9876', 800)}
        alt="Portrait of the photographer"
        loading="lazy"
        className="w-full max-w-md aspect-[3/4] object-cover grayscale-[15%]"
      />
      <div>
        <span className="font-body text-xs uppercase tracking-widest text-safelight">
          About
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mt-3 mb-6">
          <Typewriter text="Behind the lens" speed={70} />
        </h2>
        <p className="font-body text-fog text-sm leading-relaxed max-w-sm mb-8">
          At The Lightbox Production, we look beyond the obvious — capturing the quiet glances, spontaneous laughter, heartfelt emotions, and little details that make your wedding uniquely yours.
        </p>
        <Link
          to="/about"
          className="font-body text-sm uppercase tracking-wide bg-safelight text-bone px-8 py-3 inline-block hover:bg-safelight/80 transition-colors"
        >
          Read the full story
        </Link>
      </div>
    </section>
  )
}

export default IntroSection