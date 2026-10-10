import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | The LightBox Production</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 text-center bg-ink">
        <span className="font-display text-8xl md:text-9xl font-light text-safelight mb-6">
          404
        </span>
        <h1 className="font-display text-2xl md:text-3xl font-light mb-4">
          This frame doesn't exist
        </h1>
        <p className="font-body text-fog text-sm mb-10 max-w-sm">
          The page you're looking for may have been moved, renamed, or never
          existed in the first place.
        </p>
        <Link
          to="/"
          className="font-body text-sm uppercase tracking-wide bg-safelight text-bone px-8 py-3 inline-block hover:bg-safelight/80 transition-colors"
        >
          Back to home
        </Link>
      </section>
    </>
  )
}

export default NotFound