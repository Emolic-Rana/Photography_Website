function ContactInfo() {
  return (
    <div>
      <span className="font-body text-xs uppercase tracking-widest text-safelight">
        Contact
      </span>
      <h1 className="font-display text-4xl md:text-5xl font-light mt-3 mb-6 leading-tight">
        Let's talk about your shoot
      </h1>
      <p className="font-body text-fog text-sm mb-10 max-w-sm leading-relaxed">
        Whether it's a wedding, a portrait session, or something you're not
        quite sure how to describe yet — send a message and I'll reply within
        a day or two.
      </p>

      <div className="space-y-4 font-body text-sm">
        <div>
          <p className="text-fog text-xs uppercase tracking-wide mb-1">Email</p>
          <a href="mailto:you@example.com" className="text-bone hover:text-safelight transition-colors">
            thelightboxproduction72@gmail.com
          </a>
        </div>
        <div>
          <p className="text-fog text-xs uppercase tracking-wide mb-1">Based in</p>
          <p className="text-bone">Uttarakhand, India</p>
        </div>
        <div>
          <p className="text-fog text-xs uppercase tracking-wide mb-1">Thread</p>
          <a href="#" className="text-bone hover:text-safelight transition-colors">
            @thelightboxproduction
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo