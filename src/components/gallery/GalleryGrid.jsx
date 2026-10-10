import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GalleryItem from './GalleryItem'

function GalleryGrid({ images }) {
  const [index, setIndex] = useState(-1)

  const slides = images.map((img) => ({ src: img.fullSrc, description: img.caption }))

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <GalleryItem
            key={img.id}
            image={img}
            // index={i}
            // total={images.length}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  )
}

export default GalleryGrid