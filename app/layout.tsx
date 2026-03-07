import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Link from 'next/link';
import { ContactDrawer } from './components/ContactDrawer';
import { StructuredData } from './components/StructuredData';

const GA_MEASUREMENT_ID = 'G-TFRBS07470';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'JService - Pulizie Professionali a Jesolo',
    template: '%s | JService'
  },
  description: 'Servizi di pulizia professionali a Jesolo e dintorni. Pulizia di cambio, pulizia di fondo, ripasso e servizi straordinari per appartamenti vacanze, uffici e attività commerciali. Preventivi gratuiti.',
  keywords: ['pulizie jesolo', 'pulizia appartamenti vacanze jesolo', 'servizi pulizia jesolo', 'pulizie professionali venezia', 'pulizia cambio jesolo', 'pulizia fondo jesolo'],
  authors: [{ name: 'JService S.R.L.' }],
  creator: 'JService S.R.L.',
  publisher: 'JService S.R.L.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jservicejesolo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://jservicejesolo.com',
    siteName: 'JService',
    title: 'JService - Pulizie Professionali a Jesolo',
    description: 'Servizi di pulizia professionali a Jesolo e dintorni. Pulizia di cambio, pulizia di fondo, ripasso e servizi straordinari per appartamenti vacanze, uffici e attività commerciali.',
    images: [
      {
        url: '/og-image.jpg', // Dovrai creare questa immagine
        width: 1200,
        height: 630,
        alt: 'JService - Pulizie Professionali a Jesolo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JService - Pulizie Professionali a Jesolo',
    description: 'Servizi di pulizia professionali a Jesolo e dintorni. Preventivi gratuiti.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: [{ url: '/favicon.png', sizes: '32x32', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // google: 'your-google-verification-code', // Aggiungi quando disponibile
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <StructuredData />
        <a href="#main" className="sr-only">Salta al contenuto</a>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="Vai alla homepage">
              <img src="/logo.svg" alt="JService" />
              <span>JService</span>
            </Link>
            <nav aria-label="Navigazione principale">
              <ul className="nav-list">
                <li><Link href="/servizi" className="nav-link">Servizi</Link></li>
                <li><Link href="/prezzi" className="nav-link">Prezzi</Link></li>
                <li><Link href="/zone-servite" className="nav-link">Zone servite</Link></li>
                <li><Link href="/chi-siamo" className="nav-link">Chi siamo</Link></li>
                <li><Link href="/faq" className="nav-link">FAQ</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-block">
              <div>© {new Date().getFullYear()} JService</div>
              <div className="footer-meta">JService S.R.L. — P.IVA 04914180270</div>
              <div className="footer-meta">Via Levantina, 57, 30016 Jesolo, Italia</div>
              <div className="footer-meta">
                Tel. <a href="tel:+39393668673">393 366 8673</a> — Email{' '}
                <a href="mailto:jservicesrljesolo@gmail.com">jservicesrljesolo@gmail.com</a>
              </div>
              <div className="footer-meta">
                PEC: <a href="mailto:jservice.srl@pec.it">jservice.srl@pec.it</a>
              </div>
            </div>
          </div>
        </footer>
        <ContactDrawer />
      </body>
    </html>
  );
}

