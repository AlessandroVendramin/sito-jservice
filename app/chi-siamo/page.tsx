import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Siamo - JService Pulizie Professionali Jesolo',
  description: 'JService è un\'azienda di pulizie professionali a Jesolo. Team qualificato, prodotti professionali e servizi di qualità per appartamenti vacanze, uffici e attività commerciali.',
  keywords: ['chi siamo jservice', 'azienda pulizie jesolo', 'team pulizie professionali', 'pulizie jesolo esperienza'],
  openGraph: {
    title: 'Chi Siamo - JService Pulizie Professionali Jesolo',
    description: 'JService: team qualificato e servizi di pulizia professionali a Jesolo.',
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      <section className="section hero-with-photo" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="photo-layer" aria-hidden="true">
          <Image
            src="/assets-photos/pexels-matilda-wormwood-4098838.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(8%) saturate(0.95)' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-title">La nostra storia</h1>
          <p className="muted" style={{ maxWidth: '680px', fontSize: '18px' }}>
            JService nasce dall'esperienza maturata nel settore delle pulizie professionali a Jesolo. 
            Conosciamo le esigenze del territorio e sappiamo quanto sia importante avere un servizio 
            affidabile, puntuale e di qualità per appartamenti vacanze, uffici e attività commerciali.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 40, alignItems: 'center' }}>
            <div>
              <h2>Chi siamo</h2>
              <p className="muted" style={{ marginBottom: 20 }}>
                Siamo un'azienda giovane ma con una visione chiara: offrire servizi di pulizia 
                che facciano la differenza. Ogni intervento è per noi un'opportunità per dimostrare 
                professionalità e attenzione ai dettagli.
              </p>
              <p className="muted" style={{ marginBottom: 20 }}>
                Il nostro team è composto da operatori qualificati, formati sulle migliori pratiche 
                del settore. Lavoriamo con prodotti professionali e attrezzature moderne, garantendo 
                risultati che superano le aspettative.
              </p>
              <p className="muted">
                La nostra sede è a Jesolo, in Via Levantina 57. Questo ci permette di essere sempre 
                vicini ai nostri clienti e di intervenire rapidamente quando serve.
              </p>
            </div>
            <div className="card-media" aria-hidden="true" style={{ height: 400 }}>
              <Image
                src="/assets-photos/pexels-caleboquendo-34516664.jpg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section motif-section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 48 }}>Il nostro approccio</h2>
          <div className="grid-3">
            <div className="card">
              <h3 style={{ color: 'var(--primary)', marginBottom: 12 }}>Puntualità</h3>
              <p className="muted">
                Rispettiamo sempre gli orari concordati. Sappiamo che nel settore turistico ogni minuto 
                conta, e per questo organizziamo i nostri interventi con precisione millimetrica.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--primary)', marginBottom: 12 }}>Qualità costante</h3>
              <p className="muted">
                Ogni pulizia segue standard precisi. Non ci accontentiamo del "quasi perfetto": 
                ogni superficie, ogni angolo, ogni dettaglio viene curato con la massima attenzione.
              </p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--primary)', marginBottom: 12 }}>Flessibilità</h3>
              <p className="muted">
                Capiamo che le esigenze cambiano. Per questo offriamo soluzioni personalizzate, 
                adattandoci alle tue necessità specifiche e ai periodi di alta stagione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 32 }}>
            <div className="card-media" aria-hidden="true" style={{ height: 320 }}>
              <Image
                src="/assets-photos/pexels-matilda-wormwood-4098578.jpg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2>Perché scegliere JService</h2>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
                <li style={{ marginBottom: 16, paddingLeft: 28, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontSize: '20px' }}>✓</span>
                  <strong>Esperienza sul territorio:</strong> Conosciamo Jesolo e le sue esigenze stagionali
                </li>
                <li style={{ marginBottom: 16, paddingLeft: 28, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontSize: '20px' }}>✓</span>
                  <strong>Prezzi trasparenti:</strong> Nessuna sorpresa, tutto chiaro fin dall'inizio
                </li>
                <li style={{ marginBottom: 16, paddingLeft: 28, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontSize: '20px' }}>✓</span>
                  <strong>Disponibilità:</strong> Siamo sempre raggiungibili per urgenze e cambiamenti
                </li>
                <li style={{ marginBottom: 16, paddingLeft: 28, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontSize: '20px' }}>✓</span>
                  <strong>Prodotti professionali:</strong> Utilizziamo solo detergenti di alta qualità
                </li>
                <li style={{ marginBottom: 16, paddingLeft: 28, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontSize: '20px' }}>✓</span>
                  <strong>Assicurazione:</strong> Siamo coperti per ogni eventualità
                </li>
              </ul>
              <div className="actions" style={{ marginTop: 32 }}>
                <a className="button button-primary" href="#" data-open-drawer="preventivo">
                  Richiedi un preventivo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72, background: 'var(--surface)' }}>
        <div className="container centered">
          <h2>Contattaci</h2>
          <p className="muted" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
            Hai domande o vuoi saperne di più sui nostri servizi? Siamo qui per aiutarti. 
            Contattaci telefonicamente, via email o WhatsApp: rispondiamo sempre.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button button-secondary" href="tel:+39393668673">
              Chiama: 393 366 8673
            </a>
            <a className="button button-secondary" href="mailto:jservicesrljesolo@gmail.com">
              Email
            </a>
            <a className="button button-secondary" href="https://api.whatsapp.com/send/?phone=39393668673" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
