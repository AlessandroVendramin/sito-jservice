import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';

const CONTACT_EMAIL = 'jservicesrljesolo@gmail.com';

const SERVICE_OPTIONS = [
  'Pulizia di Cambio',
  'Pulizia di Fondo',
  'Pulizia Uffici e Attività Commerciali',
  'Servizi Straordinari',
  'Sanificazione',
  'Manutenzione Ordinaria',
] as const;

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JService S.R.L.',
  '@id': 'https://jservicejesolo.com',
  url: 'https://jservicejesolo.com',
  telephone: '+39393668673',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Levantina, 57',
    addressLocality: 'Jesolo',
    postalCode: '30016',
    addressCountry: 'IT',
  },
  areaServed: ['Jesolo', 'Cavallino-Treporti', 'Eraclea', 'San Donà di Piave'],
  priceRange: '€€',
  openingHours: 'Mo-Sa 07:00-19:00',
};

const formFieldStyle: CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid var(--border-subtle)',
  borderRadius: 8,
  fontSize: 16,
  fontFamily: 'inherit',
  background: '#fff',
};

export const metadata: Metadata = {
  title: {
    absolute: 'Impresa di Pulizie a Jesolo | JService — Preventivo Gratuito',
  },
  description:
    'JService è l\'impresa di pulizie professionale a Jesolo. Pulizia appartamenti vacanze, uffici, cambio biancheria e sanificazione. Preventivo gratuito entro 24 ore. Chiamaci ora.',
  keywords: [
    'pulizie jesolo',
    'pulizia appartamenti vacanze jesolo',
    'servizi pulizia jesolo',
    'pulizie professionali venezia',
    'pulizia cambio jesolo',
    'pulizia fondo jesolo',
  ],
  openGraph: {
    title: 'Impresa di Pulizie a Jesolo | JService — Preventivo Gratuito',
    description:
      'JService è l\'impresa di pulizie professionale a Jesolo. Pulizia appartamenti vacanze, uffici e sanificazione. Preventivo gratuito entro 24 ore.',
  },
  twitter: {
    title: 'Impresa di Pulizie a Jesolo | JService — Preventivo Gratuito',
    description:
      'Pulizie professionali a Jesolo: appartamenti vacanze, uffici e sanificazione. Preventivo gratuito entro 24 ore.',
  },
};

function WhyUsIcon({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 10,
        background: 'var(--primary-light)',
        color: 'var(--primary)',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />

      <section className="section hero hero-with-photo">
        <div className="photo-layer" aria-hidden="true">
          <Image
            src="/assets-photos/pexels-liliana-drew-9462302.jpg"
            alt="Impresa di pulizie professionali a Jesolo"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(5%) saturate(0.9)' }}
          />
        </div>
        <div className="container hero-inner">
          <h1 className="hero-title">Impresa di Pulizie a Jesolo — Professionali e Affidabili</h1>
          <p className="hero-subtitle">
            JService è l&apos;impresa di pulizie locale che serve Jesolo e le zone limitrofe — Cavallino-Treporti,
            Eraclea e San Donà di Piave — con interventi puntuali per appartamenti vacanze, uffici, negozi e
            strutture ricettive. Personale formato, prodotti certificati e preventivo gratuito entro 24 ore.
          </p>
          <div className="hero-ctas">
            <a className="button button-primary" href="#" data-open-drawer="preventivo">
              Richiedi Preventivo Gratuito
            </a>
            <Link className="button button-secondary" href="/servizi">
              Scopri i Servizi
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="servizi" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 12 }}>I Nostri Servizi di Pulizia</h2>
          <p className="muted" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
            Soluzioni complete per privati, property manager e attività commerciali nel litorale veneziano.
          </p>
          <div className="grid-3">
            <div className="card">
              <h3>Pulizia di Cambio</h3>
              <p className="muted">
                Pulizia completa tra un check-out e l&apos;altro per appartamenti e case vacanza: ambienti,
                bagni, cucina e controllo finale prima dell&apos;arrivo degli ospiti.
              </p>
            </div>
            <div className="card">
              <h3>Pulizia di Fondo</h3>
              <p className="muted">
                Intervento approfondito per appartamenti, uffici e locali commerciali: ideale a inizio
                stagione, dopo lavori o quando serve ripartire da una base davvero pulita.
              </p>
            </div>
            <div className="card">
              <h3>Pulizia Uffici e Attività Commerciali</h3>
              <p className="muted">
                Contratti ricorrenti su misura per uffici, negozi e studi professionali, con orari e frequenza
                concordati per mantenere gli spazi sempre presentabili.
              </p>
            </div>
            <div className="card">
              <h3>Servizi Straordinari</h3>
              <p className="muted">
                Pulizie post-cantiere, apertura e chiusura stagionale, eventi e situazioni particolari che
                richiedono un intervento dedicato e programmato.
              </p>
            </div>
            <div className="card">
              <h3>Sanificazione</h3>
              <p className="muted">
                Trattamenti di sanificazione certificati per strutture ricettive, uffici e ambienti ad alta
                frequentazione, nel rispetto delle normative di settore.
              </p>
            </div>
            <div className="card">
              <h3>Manutenzione Ordinaria</h3>
              <p className="muted">
                Servizi di manutenzione per immobili e proprietà: piccoli interventi coordinati con le pulizie
                per tenere gli spazi sempre in ordine durante tutto l&apos;anno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section motif-section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Le Zone che Serviamo</h2>
          <p
            className="muted"
            style={{
              textAlign: 'center',
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 24,
              maxWidth: 720,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Jesolo · Cavallino-Treporti · Eraclea · San Donà di Piave · Musile di Piave · Caorle · Bibione
          </p>
          <p className="muted" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            Operiamo nel litorale veneziano e nell&apos;entroterra limitrofo. Contattaci per verificare la
            copertura nella tua zona.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 40 }}>Perché Scegliere JService</h2>
          <div
            className="why-us-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 24,
            }}
          >
            <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <WhyUsIcon>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </WhyUsIcon>
              <div>
                <h3 style={{ marginBottom: 8, fontSize: 17 }}>Puntualità garantita</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Rispettiamo gli orari concordati, anche in alta stagione, perché ogni cambio ospite ha tempi
                  stretti.
                </p>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <WhyUsIcon>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </WhyUsIcon>
              <div>
                <h3 style={{ marginBottom: 8, fontSize: 17 }}>Personale formato e assicurato</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Operatori qualificati, formati sulle procedure di pulizia professionale e coperti da
                  assicurazione.
                </p>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <WhyUsIcon>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </WhyUsIcon>
              <div>
                <h3 style={{ marginBottom: 8, fontSize: 17 }}>Prodotti certificati eco-compatibili</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Utilizziamo detergenti professionali certificati, efficaci e rispettosi di persone e
                  ambienti.
                </p>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <WhyUsIcon>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </WhyUsIcon>
              <div>
                <h3 style={{ marginBottom: 8, fontSize: 17 }}>Preventivo gratuito entro 24 ore</h3>
                <p className="muted" style={{ margin: 0 }}>
                  Ricevi un preventivo chiaro e senza impegno entro un giorno lavorativo, via telefono, email o
                  WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section secondary-cta" id="preventivo" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <h2 style={{ textAlign: 'center', marginBottom: 12 }}>Richiedi un Preventivo Gratuito</h2>
          <p className="muted" style={{ textAlign: 'center', marginBottom: 28 }}>
            Compila il modulo: ti risponderemo entro 24 ore. Puoi anche chiamarci al{' '}
            <a href="tel:+39393668673">393 366 8673</a>.
          </p>
          <form
            className="card"
            action={`mailto:${CONTACT_EMAIL}`}
            method="POST"
            encType="text/plain"
            style={{ display: 'grid', gap: 16 }}
          >
            <div>
              <label htmlFor="nome" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>
                Nome
              </label>
              <input
                id="nome"
                name="Nome"
                type="text"
                required
                autoComplete="name"
                style={formFieldStyle}
              />
            </div>
            <div>
              <label htmlFor="telefono" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>
                Telefono
              </label>
              <input
                id="telefono"
                name="Telefono"
                type="tel"
                required
                autoComplete="tel"
                style={formFieldStyle}
              />
            </div>
            <div>
              <label htmlFor="servizio" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>
                Tipo di servizio
              </label>
              <select id="servizio" name="Tipo di servizio" required style={formFieldStyle} defaultValue="">
                <option value="" disabled>
                  Seleziona un servizio
                </option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="messaggio" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="Messaggio"
                rows={4}
                required
                style={{ ...formFieldStyle, resize: 'vertical' }}
              />
            </div>
            <button type="submit" className="button button-primary" style={{ justifySelf: 'start' }}>
              Invia richiesta
            </button>
            <p className="muted" style={{ margin: 0, fontSize: 13 }}>
              Invio tramite il tuo client di posta. In alternativa usa il pulsante preventivo in alto o scrivici
              su <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </form>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .why-us-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </>
  );
}
