import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Packages from './components/Packages'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <div className="font-body text-exact-color-navy">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Packages />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
