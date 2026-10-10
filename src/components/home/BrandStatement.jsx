import { motion } from 'framer-motion'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

const cld = (publicId, width = 1000) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`

function BrandStatement() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 bg-ink overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {/* Left image — slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="md:mt-24"
        >
          <img
            src={cld('0E7A0443')}
            alt="Documentary wedding photography"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
        </motion.div>

        {/* Right column — image slides from right, text fades in */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <img
              src={cld('IMG_4487')}
              alt = "Couple, documentary style"
              loading = "lazy"
              className = "w-full aspect-[4/3] object-cover mb-12"
                />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-body text-xs uppercase tracking-widest text-safelight">
              Documentary wedding photography
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-medium uppercase mt-4 leading-[1.2] max-w-md">
              For couples who crave artistry, connection and an unforgettable experience
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandStatement