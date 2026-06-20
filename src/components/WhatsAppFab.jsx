import { waLink } from '../data'
import Icon from './Icon'

// Floating WhatsApp button, always visible bottom-right.
export default function WhatsAppFab() {
  return (
    <a
      href={waLink('Hi Local Travel! I have a question about your tours.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <Icon name="whatsapp" className="w-7 h-7" filled />
    </a>
  )
}
