export const site = {
  name: "My Breathing Path",
  tagline: "Transformational Breath® with Muge Zorbozan",
  description:
    "Gentle, guided Transformational Breath® sessions in Teddington, Richmond Upon Thames and online. Release stress, reconnect with your body and build a healthier breathing pattern.",
  url: "https://mybreathingpath.co.uk",
  email: "info@mybreathingpath.co.uk",
  phone: "+44 20 0000 0000",
  whatsapp: "+44 7000 000000",
  location: {
    area: "Teddington",
    region: "Richmond Upon Thames",
    country: "London, United Kingdom",
  },
  social: {
    instagram: "https://www.instagram.com/mybreathingpath",
    facebook: "https://www.facebook.com/mybreathingpath",
  },
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Breathwork", href: "/breathwork" },
  { label: "Sessions", href: "/sessions" },
  { label: "Workshops", href: "/workshops" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
