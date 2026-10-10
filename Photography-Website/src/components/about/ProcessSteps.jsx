import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaPhoneAlt, FaCamera, FaSlidersH, FaBoxOpen } from 'react-icons/fa'

const steps = [
  { number: '01', icon: FaPhoneAlt, title: 'Consultation', description: 'We start with a call or message to understand your story, style, and what you\'re looking for.' },
  { number: '02', icon: FaCamera, title: 'Shoot Day', description: 'On the day, we work quietly and quickly — capturing real moments as they happen, not staging them.' },
  { number: '03', icon: FaSlidersH, title: 'Editing', description: 'Every frame is hand-edited, not batch-filtered — color, tone, and mood matched to how the moment actually felt.' },
  { number: '04', icon: FaBoxOpen, title: 'Delivery', description: 'You receive a private online gallery within the agreed timeline, ready to view, download, and share.' },
]

const iconPositions = [0, 0.333, 0.666, 1]

function IconDot({ Icon, scrollYProgress, position }) {
  const scale = useTransform(scrollYProgress, [position - 0.05, position, position + 0.05], [1, 1.3, 1])
  const glow = useTransform(scrollYProgress, [position - 0.05, position, position + 0.05], [0, 1, 0.3])

  return (
    <motion.span
      style={{
        scale,
        boxShadow: useTransform(glow, (g) => `0 0 ${g * 18}px ${g * 5}px rgba(193, 84, 79, ${g * 0.7})`),
      }}
      className="relative z-10 w-9 h-9 rounded-full bg-safelight flex items-center justify-center shrink-0"
    >
      <Icon className="text-bone text-xs" />
    </motion.span>
  )
}

function ProcessSteps() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  })

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="px-6 md:px-12 py-24 border-t border-fog/20 bg-ink">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <span className="font-body text-xs uppercase tracking-widest text-safelight">
          How we work
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mt-3">
          The process
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center md:items-start"
              >
                <p className="font-display text-4xl font-light text-safelight mb-3">
                  {step.number}
                </p>

                {/* Dot Wrapper carrying line anchor logic */}
                <div className="relative w-full flex items-center justify-center md:justify-start">
                  {/* Background Progress Line */}
                  {i === 0 && (
                    <div className="hidden md:block absolute left-4 right-[-245%] top-1/2 -translate-y-1/2 h-[2px] bg-fog/20 z-0 pointer-events-none">
                      <motion.div style={{ width: lineWidth }} className="h-full bg-safelight" />
                    </div>
                  )}

                  <IconDot
                    Icon={Icon}
                    scrollYProgress={scrollYProgress}
                    position={iconPositions[i]}
                  />
                </div>

                <h3 className="font-body text-sm uppercase tracking-wide text-bone mt-4 mb-3 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-fog leading-relaxed text-center md:text-left">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps