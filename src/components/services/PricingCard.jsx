function PricingCard({ service }) {
  return (
    <div
      className={`p-8 border flex flex-col ${
        service.featured
          ? 'border-safelight bg-safelight/5'
          : 'border-fog/20'
      }`}
    >
      {service.featured && (
        <span className="font-body text-xs uppercase tracking-widest text-safelight mb-4">
          Most booked
        </span>
      )}

      <h3 className="font-display text-2xl font-light mb-1">{service.title}</h3>
      <p className="font-body text-fog text-xs mb-6">{service.duration}</p>

      <p className="font-display text-4xl font-light mb-6">{service.price}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {service.features.map((feature, i) => (
          <li key={i} className="font-body text-sm text-fog flex items-start gap-2">
            <span className="text-safelight mt-1">—</span>
            {feature}
          </li>
        ))}
      </ul>

      
        <a href="/contact"
        className={`font-body text-sm uppercase tracking-wide text-center py-3 transition-colors ${
          service.featured
            ? 'bg-safelight text-bone hover:bg-safelight/80'
            : 'border border-fog/30 text-bone hover:border-bone'
        }`}
        >
        Enquire
      </a>
    </div>
  )
}

export default PricingCard