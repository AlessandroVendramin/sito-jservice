import Image from 'next/image';
import type { Metadata } from 'next';
import { BOOKING_URLS } from '../lib/booking-urls';

export const metadata: Metadata = {
  title: 'Servizi di Pulizia Professionali',
  description: 'Servizi di pulizia professionali a Jesolo: pulizia di cambio per appartamenti vacanze, pulizia di fondo, ripasso e controllo, pulizie straordinarie. Prezzi trasparenti e preventivi gratuiti.',
  keywords: ['servizi pulizia jesolo', 'pulizia cambio appartamenti', 'pulizia fondo jesolo', 'pulizie straordinarie jesolo', 'ripasso controllo pulizia'],
  openGraph: {
    title: 'Servizi di Pulizia Professionali a Jesolo | JService',
    description: 'Servizi di pulizia professionali a Jesolo: pulizia di cambio, pulizia di fondo, ripasso e pulizie straordinarie. Preventivi gratuiti.',
  },
};

export default function ServiziPage() {
  return (
    <>
      <section className="section hero-with-photo" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="photo-layer" aria-hidden="true">
          <Image
            src="/assets-photos/pexels-liliana-drew-9462663.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(10%) saturate(0.95)' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-title">I Nostri Servizi</h1>
          <p className="muted">
            Pulizie professionali con un approccio essenziale e affidabile. Interventi pianificati in base
            agli spazi e agli standard richiesti, con checklist chiare e controllo qualità.
          </p>
        </div>
      </section>

      <section className="section" id="ripasso-controllo">
        <div className="container">
          <p className="muted" style={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 12 }}>
            Servizi di Pulizia
          </p>
          <p className="muted">01.</p>
          <h2>Ripasso e Controllo</h2>
          <p className="muted">
            Intervento leggero di verifica generale dell'appartamento, ideale come controllo qualità tra una pulizia e l'altra.
            Include il riordino degli ambienti, la rimozione di polvere superficiale e il controllo dello stato generale di
            pulizia, offrendo una garanzia aggiuntiva di ordine e presentabilità dell'immobile.
          </p>

          <div className="card" style={{ marginTop: 24 }}>
            <div className="card-media">
              <Image
                src="/assets-photos/pexels-matilda-wormwood-4098576.jpg"
                alt="Ripasso e controllo"
                fill
                sizes="(max-width: 900px) 100vw, 100%"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>Ripasso e Controllo</h3>
            <p><strong>Durata:</strong> 60 min</p>
            <p><strong>Prezzo:</strong> 50,00 € (fisso)</p>
            <p className="muted">
              Intervento leggero di verifica generale dell'appartamento, ideale come controllo qualità tra una pulizia e
              l'altra. Include il riordino degli ambienti, la rimozione di polvere superficiale e il controllo dello stato
              generale di pulizia.
            </p>
            <div className="actions">
              <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.ripassoControllo}>
                Richiedi preventivo
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="line-above" style={{ marginTop: 40 }} />

      <section className="section" id="pulizia-cambio">
        <div className="container">
          <p className="muted" style={{ marginTop: 24 }}>02.</p>
          <h2>Pulizia di Cambio</h2>
          <p className="muted">
            Servizio pensato per il <strong>cambio ospite / cambio inquilino</strong>, focalizzato su igiene, ordine e
            ripristino rapido degli spazi. Include la gestione dei materiali tessili e di consumo (se previsti) e si integra
            perfettamente con la pulizia ordinaria.
          </p>

          <div className="grid-2" style={{ marginTop: 24 }}>
            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-matilda-wormwood-4098000.jpg"
                  alt="Pulizia di cambio monolocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Monolocale</h3>
              <p>
                <strong>Durata:</strong> 45 min
                <br />
                <strong>Prezzo:</strong> 70,00 € (fisso)
              </p>
              <p className="muted">
                Pulizia completa degli ambienti principali e del bagno, con particolare attenzione alle superfici di contatto e
                al riordino generale.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaCambioMonolocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-tima-miroshnichenko-6196228.jpg"
                  alt="Pulizia di cambio bilocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Bilocale</h3>
              <p>
                <strong>Durata:</strong> 60 min
                <br />
                <strong>Prezzo:</strong> 100,00 € (fisso)
              </p>
              <p className="muted">
                Intervento mirato su zona giorno, camera, bagno e cucina, per garantire un ambiente pulito e pronto
                all'utilizzo.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaCambioBilocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-towfiqu-barbhuiya-3440682-10941389.jpg"
                  alt="Pulizia di cambio trilocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Trilocale</h3>
              <p>
                <strong>Durata:</strong> 75 min
                <br />
                <strong>Prezzo:</strong> 120,00 € (fisso)
              </p>
              <p className="muted">
                Pulizia accurata di tutti gli ambienti, ideale per appartamenti di medie dimensioni con più stanze.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaCambioTrilocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-pavel-danilyuk-7108400.jpg"
                  alt="Pulizia di cambio quadrilocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Quadrilocale</h3>
              <p>
                <strong>Durata:</strong> 190 min
                <br />
                <strong>Prezzo:</strong> 170,00 € (fisso)
              </p>
              <p className="muted">
                Servizio completo pensato per abitazioni ampie, con più camere e bagni, per assicurare continuità operativa e
                standard elevati.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaCambioQuadrilocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-boom-12585524.jpg"
                  alt="Pulizia di cambio pentalocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Pentalocale</h3>
              <p>
                <strong>Durata:</strong> 180 min
                <br />
                <strong>Prezzo:</strong> 180,00 € (fisso)
              </p>
              <p className="muted">
                Pulizia di cambio approfondita per grandi appartamenti, con intervento strutturato su tutti gli ambienti.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaCambioPentalocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-above" style={{ marginTop: 40 }} />

      <section className="section" id="pulizia-fondo">
        <div className="container">
          <p className="muted" style={{ marginTop: 24 }}>03.</p>
          <h2>Pulizia di Fondo</h2>
          <p className="muted">
            Intervento <strong>straordinario e approfondito</strong>, indicato quando è necessario un ripristino completo degli
            ambienti. Comprende la pulizia dettagliata di superfici, angoli, arredi e aree normalmente escluse dalla pulizia
            ordinaria.
          </p>

          <div className="grid-2" style={{ marginTop: 24 }}>
            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-ellie-burgin-1661546-3177257.jpg"
                  alt="Pulizia di fondo monolocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Monolocale</h3>
              <p>
                <strong>Durata:</strong> 120 min
                <br />
                <strong>Prezzo:</strong> 150,00 € (fisso)
              </p>
              <p className="muted">
                Pulizia intensiva di ogni area, ideale dopo lunghi periodi di inutilizzo o prima di una nuova occupazione.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaFondoMonolocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-uniqueton-4021256.jpg"
                  alt="Pulizia di fondo bilocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Bilocale</h3>
              <p>
                <strong>Durata:</strong> 150 min
                <br />
                <strong>Prezzo:</strong> 200,00 € (fisso)
              </p>
              <p className="muted">
                Intervento completo su tutti gli ambienti, con particolare attenzione a cucina e bagno.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaFondoBilocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-shvetsa-5217919.jpg"
                  alt="Pulizia di fondo trilocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Trilocale</h3>
              <p>
                <strong>Durata:</strong> 180 min
                <br />
                <strong>Prezzo:</strong> 250,00 € (fisso)
              </p>
              <p className="muted">
                Pulizia profonda e dettagliata per appartamenti di dimensioni medio-grandi.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaFondoTrilocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-rdne-5591963.jpg"
                  alt="Pulizia di fondo quadrilocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Quadrilocale</h3>
              <p>
                <strong>Durata:</strong> 240 min
                <br />
                <strong>Prezzo:</strong> 300,00 € (fisso)
              </p>
              <p className="muted">
                Servizio di alto livello per abitazioni ampie, ideale per riportare l'immobile a uno stato ottimale.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaFondoQuadrilocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-media">
                <Image
                  src="/assets-photos/pexels-liliana-drew-9462732.jpg"
                  alt="Pulizia di fondo pentalocale"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Pentalocale</h3>
              <p>
                <strong>Durata:</strong> 210 min
                <br />
                <strong>Prezzo:</strong> 350,00 € (fisso)
              </p>
              <p className="muted">
                Pulizia di fondo completa e strutturata per grandi superfici, con standard professionali elevati.
              </p>
              <div className="actions">
                <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.puliziaFondoPentalocale}>
                  Richiedi preventivo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-above" style={{ marginTop: 40 }} />

      <section className="section" id="pulizie-straordinarie">
        <div className="container">
          <p className="muted" style={{ marginTop: 24 }}>04.</p>
          <h2>Pulizie Straordinarie Varie</h2>
          <p className="muted">
            Servizi personalizzati per esigenze specifiche (es. pulizie mirate, interventi post-lavori, trattamenti
            particolari). Utilizziamo macchinari professionali e prodotti specifici per garantire risultati superiori rispetto
            alla pulizia ordinaria.
          </p>

          <div className="card" style={{ marginTop: 24 }}>
            <div className="card-media">
              <Image
                src="/assets-photos/pexels-liliana-drew-9462131.jpg"
                alt="Pulizie straordinarie"
                fill
                sizes="(max-width: 900px) 100vw, 100%"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>Pulizie Straordinarie Varie</h3>
            <p>
              <strong>Durata:</strong> 60 min
              <br />
              <strong>Prezzo:</strong> 30,00 € / ora
            </p>
            <p className="muted">
              Servizi personalizzati per esigenze specifiche (es. pulizie mirate, interventi post-lavori, trattamenti
              particolari). Utilizziamo macchinari professionali e prodotti specifici per garantire risultati superiori
              rispetto alla pulizia ordinaria.
            </p>
            <div className="actions">
              <a className="button button-secondary" href="#" data-open-drawer="preventivo" data-booking-url={BOOKING_URLS.pulizieStraordinarieVarie}>
                Richiedi preventivo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container centered">
          <p className="muted">
            Tutti i servizi possono essere adattati in base alle esigenze specifiche dell'immobile e del cliente.
          </p>
        </div>
      </section>
    </>
  );
}
