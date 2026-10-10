import { Link } from 'react-router-dom'
import galleryData from '../../data/galleryData'

function FeaturedWork() {
  const featured = galleryData.slice(0, 6)

  return (
    <section className="px-6 md:px-12 py-24 border-t border-fog/20 bg-ink">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="font-body text-xs uppercase tracking-widest text-safelight">
            Selected work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light mt-3">
            Featured frames
          </h2>
        </div>
        <Link
          to="/gallery"
          className="font-body text-sm uppercase tracking-wide text-fog hover:text-bone transition-colors hidden md:block"
        >
          View full gallery →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {featured.map((img) => (
          <div key={img.id} className="aspect-[3/2] overflow-hidden border border-fog/20">
            <img
              src={img.src}
              alt={img.caption}
              loading="lazy"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      <Link
        to="/gallery"
        className="font-body text-sm uppercase tracking-wide text-fog hover:text-bone transition-colors md:hidden inline-block mt-6"
      >
        View full gallery →
      </Link>
    </section>
  )
}

export default FeaturedWork