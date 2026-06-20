import { whyUs } from '../data'
import Icon from './Icon'

export default function WhyUs() {
  return (
    <section className="bg-exact-color-navy py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-title text-3xl md:text-4xl text-white">Why travel with us</h2>
          <p className="mt-3 font-body text-lg text-cream-200">
            We’re a small local team, not a faceless booking site.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((w) => (
            <div key={w.title} className="text-center">
              <div className="mx-auto mb-5 grid place-items-center h-16 w-16 rounded-2xl bg-exact-color-amber text-exact-color-navy">
                <Icon name={w.icon} className="w-8 h-8" />
              </div>
              <h3 className="font-title text-xl text-white">{w.title}</h3>
              <p className="mt-3 font-body text-cream-200">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
