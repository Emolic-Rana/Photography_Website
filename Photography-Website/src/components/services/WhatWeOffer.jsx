import { useState } from 'react'
import { FaCameraRetro, FaHeart, FaGlassCheers, FaVideo, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'

const offerings = [
  {
    number: '01',
    icon: FaHeart,
    title: 'Wedding Photography',
    description: 'Full-day and half-day coverage — candid, documentary-style storytelling of your day, from getting ready to the last dance.',
    // image: '/images/services/wedding.jpg',
  },
  {
    number: '02',
    icon: FaCameraRetro,
    title: 'Portrait Sessions',
    description: 'Individual, couple, and family portraits — shot in studio or on location, tailored to how you want to be seen.',
    // image: '/images/services/portrait.jpg',
  },
  {
    number: '03',
    icon: FaGlassCheers,
    title: 'Event Coverage',
    description: 'Engagements, receptions, corporate events, and celebrations — candid coverage that captures the room, not just the room.',
    image: '/images/services/event.jpg',
  },
  {
    number: '04',
    icon: FaVideo,
    title: 'Videography',
    description: 'Cinematic highlight films and documentary-style footage, shot alongside stills for a complete record.',
    image: '/images/services/video.jpg',
  },
  {
    number: '05',
    icon: FaUsers,
    title: 'Brand & Commercial',
    description: 'Product, lifestyle, and brand photography built for businesses and creators who need work that performs.',
    image: '/images/services/brand.jpg',
  },
  {
    number: '06',
    icon: FaMapMarkerAlt,
    title: 'Destination Shoots',
    description: 'Available to travel — pre-weddings, elopements, and shoots beyond the city, wherever the story takes us.',
    image: '/images/services/destination.jpg',
  },
]

function WhatWeOffer() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="pt-32 border-t-0 bg-ink">
      <div className="px-6 md:px-12 text-center mb-16">
        <span className="font-body text-xs uppercase tracking-widest text-safelight">
          What we offer
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-light mt-3">
          Our specialties
        </h2>
      </div>

      <div className="border-t border-fog/20">
        {offerings.map((item, i) => {
          const Icon = item.icon
          const isHovered = hovered === item.number

          return (
            <div
              key={item.number}
              onMouseEnter={() => setHovered(item.number)}
              onMouseLeave={() => setHovered(null)}
              className="relative border-b border-fog/20 px-6 md:px-12 py-8 md:py-10 overflow-hidden group cursor-default"
            >
              {/* Background image reveal on hover — desktop only */}
              {/* <div
                className={`absolute inset-0 hidden md:block transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/80" />
              </div> */}

              <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                <span className="font-display text-2xl text-safelight w-12 shrink-0">
                  {item.number}
                </span>

                <div className="flex items-center gap-4 md:w-72 shrink-0">
                  <Icon className="text-safelight text-lg shrink-0" />
                  <h3 className="font-display text-xl md:text-2xl font-light text-bone">
                    {item.title}
                  </h3>
                </div>

                <p className="font-body text-sm text-fog leading-relaxed max-w-md md:ml-30">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WhatWeOffer