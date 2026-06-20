import { testimonials } from '../data'
import Icon from './Icon'

export default function Testimonials() {
  return (
    <section className="bg-exact-color-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-title text-3xl md:text-4xl text-exact-color-terracotta">
            Loved by travellers
          </h2>
          <p className="mt-3 font-body text-lg text-navy-700">
            Real words from people who travelled with us.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 text-exact-color-amber">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="w-5 h-5" filled />
                ))}
              </div>
              <blockquote className="mt-4 font-body text-navy-700 flex-1">“{t.text}”</blockquote>
              <figcaption className="mt-5 font-body">
                <span className="font-semibold text-exact-color-navy">{t.name}</span>
                <span className="text-navy-400"> · {t.country}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
