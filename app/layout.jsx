import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import {
  Bricolage_Grotesque,
  Manrope,
  Caveat,
  Newsreader,
  Tiro_Devanagari_Hindi,
  Mukta,
} from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  subsets: ['devanagari'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-tiro',
  display: 'swap',
});

const mukta = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mukta',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://tinywisdomcards.com'),
  title: {
    default: 'Nepali & English Alphabet Cards for Kids | Tiny Wisdom Cards',
    template: '%s | Tiny Wisdom Cards',
  },
  description: 'Bilingual learning cards for children aged 3+, teaching English & Nepali alphabets through stories from the Mahabharata & Ramayana. Made in Kathmandu.',
  keywords: [
    'Nepali alphabet cards', 'English alphabet cards for kids', 'bilingual learning cards Nepal',
    'Ka Kha cards', 'A to Z wisdom cards', 'Devanagari learning cards', 'Nepali kids cards Kathmandu',
    'Mahabharata cards for children', 'Ramayana alphabet cards', 'Tiny Wisdom Cards',
    'bilingual flash cards Nepal', 'Nepali language learning kids',
  ],
  authors: [{ name: 'Tiny Wisdom Cards', url: 'https://tinywisdomcards.com' }],
  creator: 'Tiny Wisdom Cards',
  publisher: 'Tiny Wisdom Cards',
  alternates: {
    canonical: 'https://tinywisdomcards.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tinywisdomcards.com',
    siteName: 'Tiny Wisdom Cards',
    title: 'Nepali & English Alphabet Cards for Kids | Tiny Wisdom Cards',
    description: 'Bilingual learning cards for children aged 3+, teaching English & Nepali alphabets through stories from the Mahabharata & Ramayana. Made in Kathmandu.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tiny Wisdom Cards — Bilingual Alphabet Learning Cards for Kids, made in Kathmandu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nepali & English Alphabet Cards for Kids | Tiny Wisdom Cards',
    description: 'Bilingual learning cards for children aged 3+, teaching English & Nepali alphabets through stories from the Mahabharata & Ramayana. Made in Kathmandu.',
    images: ['/assets/og-image.png'],
    creator: '@tinywisdomcards',
  },
  icons: {
    icon: '/assets/fabicon.png',
    apple: '/assets/fabicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }) {
  const fontVars = [
    bricolage.variable,
    manrope.variable,
    caveat.variable,
    newsreader.variable,
    tiroDevanagari.variable,
    mukta.variable,
  ].join(' ');

  return (
    <html lang="en" className={fontVars}>
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
