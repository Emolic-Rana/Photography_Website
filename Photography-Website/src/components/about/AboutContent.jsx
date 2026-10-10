import Typewriter from '../common/Typewriter'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

const cld = (publicId, width = 800) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`

function AboutContent() {
  return (
    <section className="px-6 md:px-12 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-start">
      <div className="order-2 md:order-1">
        <img
          src={cld('0E7A55131', 800)}
          alt="Portrait of the photographer"
          loading="lazy"
          className="w-full max-w-md mx-auto md:mx-0 aspect-[3/4] object-cover grayscale-[15%]"
        />
      </div>

      <div className="order-1 md:order-2">
        <span className="font-body text-xs uppercase tracking-widest text-safelight">
          About
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-light mt-3 mb-8 leading-tight">
          <Typewriter text="Behind the lens" speed={70} />
        </h1>
        <div className="space-y-5 font-body text-fog text-sm leading-relaxed max-w-md">
          <p>
            I started photographing on borrowed film cameras, learning patience
            in the darkroom before I ever touched a digital sensor. That habit
            of waiting for the right moment — not forcing it — still shapes how
            I shoot today.
            Behind every frame is a love for stories, light, and genuine emotions.
          </p>
          <p>
            At The Lightbox Production, we look beyond the obvious — capturing the quiet glances, spontaneous laughter, heartfelt emotions, and little details that make your wedding uniquely yours.
            With a cinematic approach and an eye for authenticity, we turn fleeting moments into timeless visual stories.
          </p>
          <p>
            When I'm not shooting, I'm usually scanning negatives, hiking with
            a camera I have no real reason to bring, or re-watching the same
            three films for the hundredth time.
          </p>
        </div>
        <div className="mt-10 pt-8 border-t border-fog/20 grid grid-cols-3 gap-6">
          <div>
            <p className="font-display text-2xl text-bone">8+</p>
            <p className="font-body text-xs text-fog uppercase tracking-wide mt-1">Years shooting</p>
          </div>
          <div>
            <p className="font-display text-2xl text-bone">120+</p>
            <p className="font-body text-xs text-fog uppercase tracking-wide mt-1">Weddings covered</p>
          </div>
          <div>
            <p className="font-display text-2xl text-bone">35mm</p>
            <p className="font-body text-xs text-fog uppercase tracking-wide mt-1">Film, still</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent