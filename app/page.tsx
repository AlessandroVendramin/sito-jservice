import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — Hero Minimal with soft photo */}
      <section className="section hero hero-with-photo">
        <div className="photo-layer" aria-hidden="true">
          <Image
            src="/assets-photos/pexels-liliana-drew-9462302.jpg"
            alt="Servizi di pulizia professionali a Jesolo"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(5%) saturate(0.9)' }}
          />
        </div>
        <div className="container hero-inner">
          <h1 className="hero-title">Un modo più intelligente per mantenere gli spazi davvero puliti.</h1>
          <p className="hero-subtitle">
            Pulizie professionali, organizzate con intelligenza e precisione.
          </p>
          <div className="hero-ctas">
            <a className="button button-primary" href="#">Inizia ora</a>
            <a className="button button-secondary" href="#">Scopri come funziona</a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Quiet Value Props */}
      <section className="section value-props">
        <div className="container three-col">
          <div className="vp-item">
            <div className="vp-rule" />
            <h3>Pianificazione con AI</h3>
            <p>Giri di pulizia predittivi che si adattano all'uso reale.</p>
          </div>
          <div className="vp-item">
            <div className="vp-rule" />
            <h3>Prova di qualità</h3>
            <p>Foto, checklist e timestamp — verificati automaticamente.</p>
          </div>
          <div className="vp-item">
            <div className="vp-rule" />
            <h3>Operatività senza sforzo</h3>
            <p>Team, clienti e spazi in un'unica dashboard essenziale.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Visual + Single Message */}
      <section className="section split">
        <div className="container split-inner">
          <div className="split-visual" aria-hidden="true">
            <div className="mock-card">
              <video
                src="/assets-photos/9472815-uhd_2160_3840_24fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                aria-label="Anteprima dashboard gestione pulizie"
              />
            </div>
          </div>
          <div className="split-copy">
            <h2>Pulizie che pensano in anticipo.</h2>
            <p>
              Il sistema impara dai tuoi spazi e ottimizza ogni attività, prima che sorgano problemi.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION — Qualità e Precisione */}
      <section className="section split">
        <div className="container split-inner">
          <div className="split-visual" aria-hidden="true">
            <div className="mock-card">
              <video
                src="/assets-photos/4205600-uhd_3840_2160_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                aria-label="Anteprima servizi di pulizia professionale"
              />
            </div>
          </div>
          <div className="split-copy">
            <h2>Pulizie che valorizzano i tuoi spazi.</h2>
            <p>
              Servizi professionali per appartamenti, uffici e attività commerciali. Interventi mirati e personalizzati per ogni esigenza.
            </p>
            <ul>
              <li>Pulizia di cambio per appartamenti vacanze</li>
              <li>Pulizia di fondo approfondita</li>
              <li>Servizi straordinari e personalizzati</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 — How it works (Vertical Steps) */}
      <section className="section steps">
        <div className="container steps-inner">
          <ol className="steps-list" role="list">
            <li>
              <span className="step-dot" />
              <div className="step-copy">
                <h4>Aggiungi le tue sedi</h4>
                <p>Importa proprietà e aree in pochi minuti.</p>
              </div>
            </li>
            <li>
              <span className="step-dot" />
              <div className="step-copy">
                <h4>Assegna team o fornitori</h4>
                <p>Responsabilità, orari e SLA chiari.</p>
              </div>
            </li>
            <li>
              <span className="step-dot" />
              <div className="step-copy">
                <h4>Lascia che il sistema ottimizzi</h4>
                <p>Le routine si adattano all'uso reale e alla stagionalità.</p>
              </div>
            </li>
            <li>
              <span className="step-dot" />
              <div className="step-copy">
                <h4>Monitora la qualità in tempo reale</h4>
                <p>Evidenze, avvisi e insight senza rumore.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* SECTION 5 — Social Proof */}
      <section className="section social-proof">
        <div className="container">
          <div className="social-proof-panel">
            <p className="social-proof-copy">
              Scelto da hospitality, uffici e property manager moderni.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Secondary CTA */}
      <section className="section secondary-cta">
        <div className="container centered">
          <h2>Pronto per un modo più sereno di gestire le pulizie?</h2>
          <a className="button button-primary" href="#">Inizia la prova gratuita</a>
        </div>
      </section>
    </>
  );
}

