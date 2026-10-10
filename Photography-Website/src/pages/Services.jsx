import {Wedding,PreWedding} from '../data/servicesData'
import PricingCard from '../components/services/PricingCard'
import WhatWeOffer from '../components/services/WhatWeOffer'
import { Helmet } from 'react-helmet-async'


function Services() {
  return (
    <>
      <Helmet>
        <title>Services & Pricing | The LightBox Production</title>
        <meta
          name="description"
          content="Wedding, portrait, event, and videography packages. Transparent pricing for every kind of shoot."
        />
      </Helmet>
      {/* <WhatWeOffer /> */}
      <section className="px-6 md:px-12 pt-25 pb-20 ">
        <span className="font-body text-xs uppercase tracking-widest text-safelight">
          Services
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-light mt-3 mb-4">
          Packages
        </h1>
        <p className="font-body text-fog text-sm mb-14 max-w-md">
          Every shoot is different — these are starting points. Reach out if you
          need something custom.
        </p>

        <h1 className="font-display text-4xl md:text-4xl font-light mt-3 mb-4">
          Wedding
        </h1>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {Wedding.map((service) => (
            <PricingCard key={service.id} service={service} />
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-4xl font-light mt-3 mb-4">
          Pre-Wedding
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {PreWedding.map((service) => (
            <PricingCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Services