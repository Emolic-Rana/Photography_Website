import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' })
  const [status, setStatus] = useState('idle') // idle | sending
  const [toast, setToast] = useState(null) // null | { type: 'success' | 'error', message: string }

  // Toast ko 4 second baad automatically hide karo
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.company) return // honeypot

    setStatus('sending')

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus('idle')
        setForm({ name: '', email: '', message: '', company: '' })
        setToast({ type: 'success', message: "Thank you for reaching out! We'll get back to you within a day or two." })
      })
      .catch(() => {
        setStatus('idle')
        setToast({ type: 'error', message: 'Something went wrong — please try again.' })
      })
  }

  return (
    <>
      {/* Toast notification — top of screen */}
      {toast && (
        <div
          className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-4 font-body text-sm shadow-lg transition-all ${
            toast.type === 'success' ? 'bg-safelight text-bone' : 'bg-fog text-ink'
          }`}
        >
          {toast.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div>
          <label className="font-body text-xs uppercase tracking-wide text-fog block mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-fog/30 py-2 font-body text-bone focus:outline-none focus:border-safelight transition-colors"
          />
        </div>

        <div>
          <label className="font-body text-xs uppercase tracking-wide text-fog block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-fog/30 py-2 font-body text-bone focus:outline-none focus:border-safelight transition-colors"
          />
        </div>

        <div>
          <label className="font-body text-xs uppercase tracking-wide text-fog block mb-2">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-fog/30 py-2 font-body text-bone focus:outline-none focus:border-safelight transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="font-body text-sm uppercase tracking-wide bg-safelight text-bone px-8 py-3 hover:bg-safelight/80 transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </>
  )
}

export default ContactForm