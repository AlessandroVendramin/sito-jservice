import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Domande Frequenti Pulizie Professionali Jesolo',
  description: 'Risposte alle domande frequenti sui servizi di pulizia JService a Jesolo: prezzi, prenotazioni, tipologie di servizio, qualità e materiali utilizzati.',
  keywords: ['faq pulizie jesolo', 'domande pulizie professionali', 'informazioni pulizie jesolo', 'come funziona pulizia jesolo'],
  openGraph: {
    title: 'FAQ - Domande Frequenti Pulizie Professionali Jesolo',
    description: 'Risposte alle domande più comuni sui servizi di pulizia JService.',
  },
};

export default function FaqPage() {
  return (
    <>
      <section className="section hero-with-photo" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="photo-layer" aria-hidden="true">
          <Image
            src="/assets-photos/pexels-liliana-drew-9462679.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(10%) saturate(0.95)' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-title">Domande frequenti</h1>
          <p className="muted" style={{ maxWidth: '680px', fontSize: '18px' }}>
            Trova rapidamente le risposte alle domande più comuni sui nostri servizi di pulizia. 
            Se non trovi quello che cerchi, non esitare a contattarci.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 40 }}>
            <div>
              <h2>Hai bisogno di aiuto?</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Qui trovi le risposte alle domande più frequenti sui nostri servizi. Se la tua 
                domanda non è presente, siamo sempre disponibili per chiarimenti e informazioni.
              </p>
              <div className="actions">
                <a className="button button-primary" href="#" data-open-drawer="preventivo">
                  Contattaci
                </a>
                <a className="button button-secondary" href="/servizi">
                  Vedi i servizi
                </a>
              </div>
            </div>

            <div className="stack">
              <div className="card faq-card">
                <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Tipologie di servizio</h3>
                <details className="faq-item">
                  <summary>Qual è la differenza tra pulizia di cambio e pulizia di fondo?</summary>
                  <p className="muted">
                    La <strong>pulizia di cambio</strong> è pensata per il cambio ospite/inquilino: rapida, 
                    efficace, focalizzata su igiene e ordine. La <strong>pulizia di fondo</strong> è un intervento 
                    straordinario più approfondito, indicato dopo lunghi periodi di inutilizzo o quando serve 
                    un ripristino completo degli ambienti, compresi angoli e aree normalmente escluse dalla pulizia ordinaria.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>Quando è utile il servizio di ripasso e controllo?</summary>
                  <p className="muted">
                    Il ripasso è perfetto come controllo qualità tra una pulizia e l'altra. È un intervento 
                    leggero di verifica generale che include riordino, rimozione di polvere superficiale e 
                    controllo dello stato di pulizia. Ideale per mantenere sempre un buon livello di presentabilità.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>Cosa include il servizio di pulizie straordinarie?</summary>
                  <p className="muted">
                    Le pulizie straordinarie sono servizi personalizzati per esigenze specifiche: pulizie post-cantiere, 
                    dopo traslochi, trattamenti particolari su pavimenti, sanificazioni. Utilizziamo macchinari 
                    professionali e prodotti specifici per garantire risultati superiori.
                  </p>
                </details>
              </div>

              <div className="card faq-card">
                <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Prezzi e preventivi</h3>
                <details className="faq-item">
                  <summary>Come vengono calcolati i prezzi?</summary>
                  <p className="muted">
                    I prezzi variano in base alla tipologia di servizio (ripasso, cambio, fondo o straordinario), 
                    alla metratura dell'appartamento (monolocale, bilocale, trilocale, ecc.) e alle condizioni 
                    iniziali degli ambienti. Forniamo sempre un preventivo gratuito e dettagliato prima di iniziare.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>I prezzi sono fissi o possono variare?</summary>
                  <p className="muted">
                    Per i servizi standard (ripasso, cambio, fondo) i prezzi sono fissi in base alla tipologia 
                    di appartamento. Per le pulizie straordinarie il prezzo è orario (30€/ora) e viene definito 
                    in base alle specifiche esigenze. Tutti i dettagli sono sempre comunicati nel preventivo.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>È possibile avere uno sconto per servizi ricorrenti?</summary>
                  <p className="muted">
                    Per clienti con servizi ricorrenti e frequenti possiamo valutare condizioni personalizzate. 
                    Contattaci per discutere le tue esigenze e troveremo insieme la soluzione migliore.
                  </p>
                </details>
              </div>

              <div className="card faq-card">
                <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Prenotazione e organizzazione</h3>
                <details className="faq-item">
                  <summary>Quanto tempo prima devo prenotare?</summary>
                  <p className="muted">
                    Consigliamo di prenotare con almeno 24-48 ore di anticipo, soprattutto durante l'alta stagione. 
                    Per urgenze valutiamo sempre la disponibilità: contattaci e cercheremo di trovare una soluzione.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>Posso modificare o annullare una prenotazione?</summary>
                  <p className="muted">
                    Sì, puoi modificare o annullare fino a 24 ore prima dell'intervento senza costi aggiuntivi. 
                    Per modifiche o annullamenti con meno preavviso potrebbero applicarsi condizioni specifiche, 
                    che ti comunicheremo al momento della prenotazione.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>Operate anche nei weekend e nei giorni festivi?</summary>
                  <p className="muted">
                    Sì, operiamo anche nei weekend e nei giorni festivi, previa disponibilità del team. 
                    Durante questi periodi potrebbero applicarsi maggiorazioni, che ti comunicheremo nel preventivo.
                  </p>
                </details>
              </div>

              <div className="card faq-card">
                <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>Qualità e materiali</h3>
                <details className="faq-item">
                  <summary>Portate voi i prodotti per la pulizia?</summary>
                  <p className="muted">
                    Sì, forniamo tutti i prodotti professionali necessari per la pulizia. Utilizziamo solo 
                    detergenti di alta qualità, adatti a ogni tipo di superficie. Se preferisci prodotti 
                    specifici o forniti da te, possiamo organizzarci di conseguenza.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>Come garantite la qualità del servizio?</summary>
                  <p className="muted">
                    Ogni intervento segue procedure standardizzate e viene eseguito da operatori qualificati. 
                    Al termine del lavoro, se richiesto, possiamo fornire un report fotografico delle aree 
                    pulite. La nostra esperienza e la costante formazione del team garantiscono risultati sempre eccellenti.
                  </p>
                </details>
                <details className="faq-item">
                  <summary>Siete assicurati?</summary>
                  <p className="muted">
                    Sì, JService è coperta da assicurazione di responsabilità civile per eventuali danni 
                    involontari. Tutti i dettagli sono disponibili nel contratto di servizio.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section centered" style={{ background: 'var(--surface)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2>Non hai trovato la risposta?</h2>
          <p className="muted" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
            Se hai altre domande o hai bisogno di informazioni specifiche sui nostri servizi, 
            non esitare a contattarci. Siamo sempre disponibili per aiutarti.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button button-primary" href="#" data-open-drawer="preventivo">
              Contattaci
            </a>
            <a className="button button-secondary" href="tel:+39393668673">
              Chiama: 393 366 8673
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
