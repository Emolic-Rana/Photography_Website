import { useState } from 'react'
import testimonialsData from '../../data/testimonialsData'

function Testimonials() {
  const [active, setActive] = useState(0)
  const testimonial = testimonialsData[active]

  const goTo = (index) => setActive(index)
  const next = () => setActive((prev) => (prev + 1) % testimonialsData.length)
  const prev = () => setActive((p) => (p - 1 + testimonialsData.length) % testimonialsData.length)

  return (
    <section className="px-6 md:px-12 py-24 border-t border-fog/20 text-center bg-ink">
      <span className="font-body text-xs uppercase tracking-widest text-safelight">
        Kind words
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-light mt-3 mb-14">
        From Couples & Clients
      </h2>

      <div className="max-w-2xl mx-auto">
        <p className="font-display text-xl md:text-xl font-light leading-relaxed mb-8">
          "{testimonial.quote}"
        </p>
        <p className="font-body text-2xl text-bone">{testimonial.name}</p>
        <p className="font-body text-xs text-fog uppercase tracking-wide mt-1">
          {testimonial.event}
        </p>

        {/* Dots navigation */}
        <div className="flex justify-center gap-1 mt-10">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="p-2"
            >
              <span
                className={`block w-2 h-2 rounded-full transition-colors ${
                  i === active ? 'bg-safelight' : 'bg-fog/30'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Prev/Next arrows */}
        <div className="flex justify-center gap-8 mt-6">
          <button
            onClick={prev}
            className="font-body text-xs uppercase tracking-wide text-fog hover:text-bone transition-colors"
          >
            ← Prev
          </button>
          <button
            onClick={next}
            className="font-body text-xs uppercase tracking-wide text-fog hover:text-bone transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials