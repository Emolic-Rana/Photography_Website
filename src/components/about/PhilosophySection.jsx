import FadeIn from '../common/FadeIn'

function PhilosophySection() {
  return (
    <section className="px-6 md:px-12 py-24 border-t border-fog/20 bg-ink">
      <FadeIn className="max-w-2xl mx-auto text-center">
        <span className="font-body text-xs uppercase tracking-widest text-safelight">
          Our approach
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mt-3 mb-8">
          Documentary first, always
        </h2>
        <p className="font-body text-fog text-sm leading-relaxed mb-6">
          At The LightBox Production, we believe the best photographs happen
          when no one's posing for them...
        </p>
        <p className="font-body text-fog text-sm leading-relaxed">
          Every project gets treated as its own film, not a template...
        </p>
      </FadeIn>
    </section>
  )
}

export default PhilosophySection