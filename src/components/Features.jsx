import { features, categories } from '../data'
import Icon from './Icon'

export default function Features() {
  return (
    <section id="about" className="bg-exact-color-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-title text-3xl md:text-4xl text-exact-color-terracotta">
            Why travel local?
          </h2>
          <p className="mt-3 font-body text-lg text-navy-700">
            Because the best moments never make it into the guidebook.
          </p>
        </div>

        {/* Value props */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mx-auto mb-5 grid place-items-center h-14 w-14 rounded-full bg-terracotta-50 text-exact-color-terracotta">
                <Icon name={f.icon} className="w-7 h-7" />
              </div>
              <h3 className="font-title text-xl text-exact-color-navy">{f.title}</h3>
              <p className="mt-3 font-body text-navy-600">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Category chips */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <a
              key={c.label}
              href="#tours"
              className="group inline-flex items-center gap-2 bg-white hover:bg-exact-color-navy text-exact-color-navy hover:text-white font-body rounded-full px-5 py-2.5 shadow-sm transition-colors"
            >
              <Icon name={c.icon} className="w-5 h-5 text-exact-color-amber group-hover:text-exact-color-amber" />
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
