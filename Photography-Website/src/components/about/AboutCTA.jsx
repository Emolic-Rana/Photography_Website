import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function AboutCTA() {
  return (
    <section className="px-6 md:px-12 py-24 border-t border-fog/20 bg-ink text-center">
      <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
        Let's create something together
      </h2>
      <p className="font-body text-fog text-sm mb-10 max-w-md mx-auto">
        Whether it's a wedding, a portrait, or a project you're still shaping
        — we'd love to hear about it.
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link
          to="/contact"
          className="font-body text-sm uppercase tracking-wide bg-safelight text-bone px-10 py-4 inline-block hover:bg-safelight/80 transition-colors"
        >
          Get in touch
        </Link>
      </motion.div>
    </section>
  )
}

export default AboutCTA