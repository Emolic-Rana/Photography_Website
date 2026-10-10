import AboutCTA from "../components/about/AboutCTA"
import BrandStatement from "../components/home/BrandStatement"
import FeaturedWork from "../components/home/FeturedWork"
import FixedVideoBackground from "../components/home/FixedVideoBackground"
import IntroSection from "../components/home/Introsection"
import ScrollRevealWindow from "../components/home/ScrollRevealWindow"
import Testimonials from "../components/home/Testimonials"
import { Helmet } from 'react-helmet-async'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const cld = (publicId, width = 1920) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`
const cldPortrait = (publicId, width = 800) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,ar_9:16,g_auto,w_${width}/${publicId}`

function Home() {
  return (
    <>
      <Helmet>
        <title>The LightBox Production | Wedding & Portrait Photography</title>
        <meta
          name="description"
          content="Documentary-style wedding, portrait, and event photography. Based in Your City, available for destination shoots worldwide."
        />
      </Helmet>
      <FixedVideoBackground />
      <section className="relative h-screen w-full overflow-hidden">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={cldPortrait('IMG_20250513_132310', 800)}
          />
          <img
            src={cld('IMG_4483', 1920)}
            alt="Featured photography work"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover  md:object-bottom"
          />
        </picture>
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-20">
          <h1 className="font-display text-6xl md:text-8xl font-light leading-[0.95] max-w-3xl">
            Light, held still.
          </h1>
          <p className="font-body  mt-6 max-w-md text-sm tracking-wide">
            Portrait & documentary photography — capturing the moments between moments.
          </p>
        </div>
      </section>
      <BrandStatement />
      <ScrollRevealWindow />
      <IntroSection />
      <FeaturedWork />
      <Testimonials />
      <ScrollRevealWindow />
      <AboutCTA/>
    </>
  )
}

export default Home