import { useState } from 'react'
import { faqs } from '../data'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-body font-medium text-lg text-exact-color-navy">{q}</span>
        <span
          className={`grid place-items-center h-7 w-7 flex-shrink-0 rounded-full bg-terracotta-50 text-exact-color-terracotta transition-transform ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && <p className="pb-5 -mt-1 font-body text-navy-600">{a}</p>}
    </div>
  )
}

export default function Faq() {
  return (
    <section className="bg-cream-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-title text-3xl md:text-4xl text-exact-color-terracotta">
            Questions? We’ve got answers
          </h2>
        </div>
        <div className="mt-10">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
