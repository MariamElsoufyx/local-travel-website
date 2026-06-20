// ─────────────────────────────────────────────────────────────
// Local Travel — site content
// Edit everything here (text, prices, images, links) without
// touching the components. Swap the picsum image URLs for your
// own photos when you have them.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Local Travel',
  tagline: 'travel with no limits',
  // Contact / social — replace with the real handles & number.
  whatsapp: '201500000000', // digits only, international format (no + or spaces)
  whatsappDisplay: '+20 150 000 0000',
  email: 'hello@localtravel.com',
  instagram: 'https://instagram.com/localtravel',
  instagramHandle: '@localtravel',
}

// Helper for building a pre-filled WhatsApp link.
export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Tours', href: '#tours' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const features = [
  {
    icon: 'compass',
    title: 'Hidden Gems',
    text: 'Off-the-map spots the big tour buses never reach — chosen by people who actually live here.',
  },
  {
    icon: 'sun',
    title: 'Made for the Day',
    text: 'Sunrise hikes, long lazy lunches, golden-hour viewpoints — trips paced to feel like a getaway, not a checklist.',
  },
  {
    icon: 'heart',
    title: 'Real Experiences',
    text: 'Local food, local guides, local stories. You leave with more than photos.',
  },
]

export const badges = ['Licensed guides', 'Small groups', 'Best prices', 'Local experts']

export const categories = [
  { label: 'Adventure', icon: 'mountain' },
  { label: 'Culture', icon: 'landmark' },
  { label: 'Beach', icon: 'wave' },
  { label: 'Desert', icon: 'sun' },
  { label: 'Day Trips', icon: 'compass' },
  { label: 'Food', icon: 'food' },
]

export const packages = [
  {
    id: 'coastal-escape',
    title: 'Coastal Escape',
    location: 'Hidden Bays & Cliffs',
    duration: '1 day',
    price: 49,
    image: 'https://picsum.photos/seed/coast-lt/640/420',
    description:
      'A full day along the coast — secret coves, a clifftop lunch, and snorkelling in water you have to see to believe.',
    tag: 'Most popular',
  },
  {
    id: 'desert-nights',
    title: 'Desert Nights',
    location: 'The Open Dunes',
    duration: '2 days',
    price: 129,
    image: 'https://picsum.photos/seed/desert-lt/640/420',
    description:
      'Dune driving at sunset, tea by the fire, and a sky full of stars with no city lights for miles.',
    tag: 'Overnight',
  },
  {
    id: 'old-town-walk',
    title: 'Old Town & Flavours',
    location: 'The Historic Quarter',
    duration: 'Half day',
    price: 35,
    image: 'https://picsum.photos/seed/oldtown-lt/640/420',
    description:
      'Backstreets, local markets and four tasting stops with the people who make the food. Come hungry.',
    tag: 'Foodie favourite',
  },
  {
    id: 'mountain-sunrise',
    title: 'Mountain Sunrise',
    location: 'The High Trail',
    duration: '1 day',
    price: 59,
    image: 'https://picsum.photos/seed/mountain-lt/640/420',
    description:
      'An early start rewarded with the best view in the region — and breakfast waiting at the top.',
    tag: 'Adventure',
  },
  {
    id: 'island-hopper',
    title: 'Island Hopper',
    location: 'The Blue Route',
    duration: '1 day',
    price: 75,
    image: 'https://picsum.photos/seed/island-lt/640/420',
    description:
      'Three islands, one boat, all yours for the day. Swim stops, lunch on deck, zero rush.',
    tag: 'On the water',
  },
  {
    id: 'sunset-cruise',
    title: 'Sunset Cruise',
    location: 'The Harbour',
    duration: 'Evening',
    price: 39,
    image: 'https://picsum.photos/seed/sunset-lt/640/420',
    description:
      'Cast off as the light turns gold, drinks in hand, the city skyline lighting up behind you.',
    tag: 'Evening',
  },
]

export const whyUs = [
  {
    icon: 'users',
    title: 'Local Experts',
    text: 'Guides born and raised here who know the stories behind every street and trail.',
  },
  {
    icon: 'tag',
    title: 'Honest Prices',
    text: 'No hidden fees, no tourist mark-ups. The price you see is the price you pay.',
  },
  {
    icon: 'phone',
    title: '24/7 Support',
    text: 'A real person on WhatsApp before, during, and after your trip — whenever you need us.',
  },
]

export const testimonials = [
  {
    name: 'Sofia M.',
    country: 'Spain',
    text: 'Honestly the best day of our whole trip. Our guide felt like a friend showing us around their hometown.',
    rating: 5,
  },
  {
    name: 'James T.',
    country: 'UK',
    text: 'The desert overnight was unreal — the stars, the food, the people. Booked through WhatsApp in five minutes.',
    rating: 5,
  },
  {
    name: 'Lena K.',
    country: 'Germany',
    text: 'Small group, no rushing, places we never would have found on our own. Worth every cent.',
    rating: 5,
  },
]

export const faqs = [
  {
    q: 'How do I book a tour?',
    a: 'Tap any “Book on WhatsApp” button, send us the tour name and your dates, and we’ll confirm everything in a few messages. No accounts, no long forms.',
  },
  {
    q: 'Are the groups small?',
    a: 'Yes — most tours cap at 8–12 people so you actually get to know your guide and the group. Private trips are available on request.',
  },
  {
    q: 'Can you customise a trip for us?',
    a: 'Absolutely. Tell us what you’re into — food, hiking, photography, history — and we’ll build a day around it.',
  },
  {
    q: 'What’s included in the price?',
    a: 'Your guide, transport, entry fees and any tastings or meals listed on the tour. We spell out exactly what’s included before you pay.',
  },
  {
    q: 'Is it safe?',
    a: 'All our guides are licensed and trips are fully planned. You’ll have our number the whole time and 24/7 support if anything comes up.',
  },
]
