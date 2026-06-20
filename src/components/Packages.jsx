import { packages, waLink } from '../data'
import Icon from './Icon'

function PackageCard({ p }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {p.tag && (
          <span className="absolute top-3 left-3 bg-exact-color-amber text-exact-color-navy text-xs font-body font-semibold uppercase tracking-wide rounded-full px-3 py-1">
            {p.tag}
          </span>
        )}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-exact-color-navy/85 text-white text-xs font-body rounded-full px-3 py-1">
          <Icon name="clock" className="w-3.5 h-3.5" />
          {p.duration}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-navy-500 font-body text-sm">
          <Icon name="pin" className="w-4 h-4 text-exact-color-terracotta" />
          {p.location}
        </div>
        <h3 className="mt-1 font-title text-xl text-exact-color-navy">{p.title}</h3>
        <p className="mt-2 font-body text-navy-600 text-sm flex-1">{p.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="font-body text-navy-500 text-sm">
            from{' '}
            <span className="font-title text-2xl text-exact-color-terracotta">${p.price}</span>
            <span className="text-navy-400"> / person</span>
          </div>
          <a
            href={waLink(`Hi Local Travel! I’d like to book the "${p.title}" tour.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-exact-color-navy hover:bg-exact-color-terracotta text-white font-body text-sm rounded-full px-4 py-2 transition-colors"
          >
            <Icon name="whatsapp" className="w-4 h-4" filled />
            Book
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Packages() {
  return (
    <section id="tours" className="bg-cream-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-subtitle text-3xl text-exact-color-amber">our trips</p>
          <h2 className="font-title text-3xl md:text-4xl text-exact-color-terracotta">
            Featured tours
          </h2>
          <p className="mt-3 font-body text-lg text-navy-700">
            Hand-picked experiences, small groups, and a local guide on every one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.map((p) => (
            <PackageCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={waLink('Hi Local Travel! Can you send me the full list of tours?')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-exact-color-terracotta hover:bg-terracotta-700 text-white font-body font-medium rounded-full px-8 py-3 transition-colors"
          >
            See all experiences
            <Icon name="arrow" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
