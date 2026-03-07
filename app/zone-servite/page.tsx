import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zone Servite - Pulizie Professionali Jesolo e Dintorni',
  description: 'JService opera a Jesolo, Cavallino-Treporti, Eraclea, San Donà di Piave e zone limitrofe. Servizi di pulizia professionali in provincia di Venezia.',
  keywords: ['pulizie jesolo', 'pulizie cavallino treporti', 'pulizie eraclea', 'pulizie san donà piave', 'pulizie provincia venezia'],
  openGraph: {
    title: 'Zone Servite - Pulizie Professionali Jesolo e Dintorni',
    description: 'Servizi di pulizia a Jesolo, Cavallino-Treporti, Eraclea e zone limitrofe.',
  },
};

export default function ZoneServitePage() {
  return (
    <>
      <section className="section hero-with-photo" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="photo-layer" aria-hidden="true">
          <Image
            src="/assets-photos/pexels-liliana-drew-9462302.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(10%) saturate(0.9)' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-title">Dove operiamo</h1>
          <p className="muted" style={{ maxWidth: '680px', fontSize: '18px' }}>
            JService è presente sul territorio di Jesolo e nelle zone limitrofe. La nostra vicinanza 
            geografica ci permette di garantire interventi rapidi e un servizio sempre puntuale, 
            anche durante i periodi di maggiore affluenza turistica.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 48 }}>Le nostre zone di intervento</h2>
          <div className="grid-2" style={{ gap: 24 }}>
            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Jesolo</h3>
              <p className="muted" style={{ marginBottom: 12 }}>
                La nostra zona principale. Operiamo in tutto il territorio comunale:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Lido di Jesolo</li>
                <li>Jesolo Paese</li>
                <li>Ponte di Piave</li>
                <li>Frazioni limitrofe</li>
              </ul>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Litorale veneziano</h3>
              <p className="muted" style={{ marginBottom: 12 }}>
                Serviamo anche le località balneari vicine:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Cavallino-Treporti</li>
                <li>Eraclea e Eraclea Mare</li>
                <li>Caorle (su richiesta)</li>
              </ul>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Basso Piave</h3>
              <p className="muted" style={{ marginBottom: 12 }}>
                Estendiamo i nostri servizi anche ai comuni del Basso Piave:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>San Donà di Piave</li>
                <li>Musile di Piave</li>
                <li>Noventa di Piave</li>
                <li>Fossalta di Piave</li>
              </ul>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Zone limitrofe</h3>
              <p className="muted" style={{ marginBottom: 12 }}>
                Valutiamo richieste anche per:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Torre di Mosto</li>
                <li>Altri comuni della provincia di Venezia</li>
                <li>Zone specifiche su richiesta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section motif-section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 40, alignItems: 'center' }}>
            <div>
              <h2>Vantaggi di operare localmente</h2>
              <p className="muted" style={{ marginBottom: 20 }}>
                Essere radicati sul territorio di Jesolo non è solo una scelta geografica, ma un 
                vantaggio concreto per i nostri clienti. Conosciamo le caratteristiche degli 
                appartamenti vacanze, i ritmi stagionali e le esigenze specifiche del turismo balneare.
              </p>
              <p className="muted" style={{ marginBottom: 20 }}>
                La nostra vicinanza ci permette di:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Ridurre i tempi di spostamento</li>
                <li>Intervenire rapidamente in caso di urgenze</li>
                <li>Conoscere le specificità di ogni zona</li>
                <li>Offrire prezzi competitivi grazie all'efficienza logistica</li>
                <li>Essere sempre disponibili durante l'alta stagione</li>
              </ul>
            </div>
            <div className="card-media" aria-hidden="true" style={{ height: 300 }}>
              <Image
                src="/assets-photos/pexels-liliana-drew-9462131.jpg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 32 }}>
            <div className="card-media" aria-hidden="true" style={{ height: 320 }}>
              <Image
                src="/assets-photos/pexels-liliana-drew-9462732.jpg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2>Non sei nella lista?</h2>
              <p className="muted" style={{ marginBottom: 20 }}>
                Se la tua zona non è tra quelle elencate, non escluderci a priori. Valutiamo ogni 
                richiesta in base a:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, marginBottom: 20 }}>
                <li>Distanza dalla nostra sede</li>
                <li>Tipologia e frequenza degli interventi</li>
                <li>Disponibilità del nostro team</li>
                <li>Periodo dell'anno</li>
              </ul>
              <p className="muted">
                Contattaci e descrivici la tua situazione: ti risponderemo con trasparenza sulla 
                nostra disponibilità e sui tempi di intervento.
              </p>
              <div className="actions" style={{ marginTop: 24 }}>
                <a className="button button-primary" href="#" data-open-drawer="preventivo">
                  Verifica la copertura della tua zona
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section centered" style={{ background: 'var(--surface)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2>Hai bisogno di informazioni?</h2>
          <p className="muted" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
            Vuoi sapere se possiamo servire la tua zona? Contattaci indicando l'indirizzo e la 
            tipologia di intervento che ti serve. Ti risponderemo entro 24 ore con tutte le informazioni.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button button-primary" href="#" data-open-drawer="preventivo">
              Richiedi informazioni
            </a>
            <a className="button button-secondary" href="tel:+39393668673">
              Chiama ora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
