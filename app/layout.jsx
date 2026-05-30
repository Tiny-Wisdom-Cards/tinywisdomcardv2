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
  title: 'Nepali & English Alphabet Cards for Kids | Tiny Wisdom Cards',
  description: 'Bilingual learning cards for children aged 3+, teaching English & Nepali alphabets through stories from the Mahabharata & Ramayana. Made in Kathmandu.',
  alternates: {
    canonical: 'https://tinywisdomcards.com',
  },
  icons: {
    icon: '/assets/fabicon.png',
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
