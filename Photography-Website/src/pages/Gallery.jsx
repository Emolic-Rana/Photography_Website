import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import CategoryFilter from '../components/gallery/CategoryFilter'
import GalleryGrid from '../components/gallery/GalleryGrid'
import galleryData from '../data/galleryData'

function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return galleryData
    return galleryData.filter((img) => img.category === active)
  }, [active])

  return (
    <>
      <Helmet>
        <title>Gallery | The LightBox Production</title>
        <meta
          name="description"
          content="Browse our portfolio of wedding, portrait, and event photography — real moments, captured as they happened."
        />
      </Helmet>
      <section className="px-6 md:px-12 pt-32 pb-20">
        <h1 className="font-display text-4xl md:text-5xl font-light mb-4">Gallery</h1>
        <p className="font-body text-fog text-sm mb-10 max-w-md">
          A contact sheet of recent work — click any frame to view it full size.
        </p>
        <CategoryFilter active={active} onChange={setActive} />
        <GalleryGrid images={filtered} />
      </section>
    </>
  )
}

export default Gallery