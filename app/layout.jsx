import './globals.css';

export const metadata = {
  title: 'Tiny Wisdom Cards — Story-rich learning decks for curious hands',
  description: 'Bilingual learning decks for tiny hands.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Caveat:wght@600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Tiro+Devanagari+Hindi:ital@0;1&family=Mukta:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
