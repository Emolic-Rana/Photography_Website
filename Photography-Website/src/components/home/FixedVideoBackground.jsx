function FixedVideoBackground() {
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const videoUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/C6889`

  return (
    <video
      src={videoUrl}
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    />
  )
}

export default FixedVideoBackground