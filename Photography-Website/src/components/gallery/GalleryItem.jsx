function GalleryItem({ image, index, total, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[3/2] overflow-hidden border border-fog/20"
    >
      <img
        src={image.src}
        alt={image.caption}
        loading="lazy"
        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
      />
      {/* <span className="absolute top-2 left-2 font-body text-xs text-bone/70 bg-ink/60 px-1.5 py-0.5">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span> */}
    </button>
  )
}

export default GalleryItem