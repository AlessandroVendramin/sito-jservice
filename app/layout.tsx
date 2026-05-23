import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ContactDrawer } from './components/ContactDrawer';
import { SiteHeader } from './components/SiteHeader';
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
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon-48.png',
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
      <head>
        <link rel="icon" href="https://jservicejesolo.com/favicon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="https://jservicejesolo.com/favicon-96.png" type="image/png" sizes="96x96" />
        <link rel="shortcut icon" href="https://jservicejesolo.com/favicon.ico" />
        {/* Meta Pixel Code — https://developers.facebook.com/docs/meta-pixel/get-started/ */}
        <script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2232755924199897');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2232755924199897&ev=PageView&noscript=1" />',
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
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
        <SiteHeader />
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

