import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Typewriter({ text, className = '', speed = 60, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (!isInView) return

    let index = 0
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++
        setDisplayedText(text.slice(0, index))
        if (index >= text.length) clearInterval(interval)
      }, speed)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [isInView, text, speed, delay])

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {displayedText.length < text.length && isInView && (
        <span className="inline-block w-[2px] h-[0.9em] bg-safelight ml-1 animate-pulse align-middle" />
      )}
    </span>
  )
}

export default Typewriter