import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prezzi Pulizie Professionali Jesolo',
  description: 'Prezzi trasparenti per servizi di pulizia a Jesolo. Pulizia di cambio da 70€, pulizia di fondo da 150€, ripasso 50€. Preventivo gratuito in 24 ore.',
  keywords: ['prezzi pulizie jesolo', 'costo pulizia appartamento jesolo', 'tariffe pulizie professionali', 'preventivo pulizie jesolo'],
  openGraph: {
    title: 'Prezzi Pulizie Professionali Jesolo | JService',
    description: 'Prezzi trasparenti per servizi di pulizia a Jesolo. Preventivo gratuito in 24 ore.',
  },
};

export default function PrezziPage() {
  return (
    <>
      <section className="section hero-with-photo" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="photo-layer" aria-hidden="true">
          <Image
            src="/assets-photos/pexels-lamiko-3616735.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(10%) saturate(0.95)' }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-title">Prezzi trasparenti</h1>
          <p className="muted">
            Piani chiari per esigenze diverse. I prezzi possono variare in base a metratura, frequenza e condizioni
            degli ambienti. Preventivo gratuito in 24 ore.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-grid">
          <div className="plan">
            <div className="name">Base</div>
            <div className="price">da €30/ora</div>
            <div className="note">Pulizia essenziale per piccoli ambienti</div>
            <ul>
              <li>Pavimenti e spolvero superfici</li>
              <li>Bagni e cucina (standard)</li>
              <li>Materiali inclusi</li>
            </ul>
            <div className="actions">
              <a className="button button-primary" href="#" data-open-drawer="preventivo">Richiedi preventivo</a>
            </div>
          </div>

          <div className="plan">
            <div className="name">Standard</div>
            <div className="price">da €30/ora</div>
            <div className="note">Per case e uffici con necessità regolari</div>
            <ul>
              <li>Tutto del piano Base</li>
              <li>Vetri interni, dettagli aggiuntivi</li>
              <li>Check qualità a fine intervento</li>
            </ul>
            <div className="actions">
              <a className="button button-primary" href="#" data-open-drawer="preventivo">Richiedi preventivo</a>
            </div>
          </div>

          <div className="plan">
            <div className="name">Pro</div>
            <div className="price">su preventivo</div>
            <div className="note">Post‑ristrutturazione, trattamenti, sanificazioni</div>
            <ul>
              <li>Rimozione polveri da cantiere</li>
              <li>Trattamenti specifici pavimenti</li>
              <li>Sanificazione certificata</li>
            </ul>
            <div className="actions">
              <a className="button button-primary" href="#" data-open-drawer="preventivo">Richiedi preventivo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container centered">
          <p className="muted">
            Hai esigenze particolari (turni serali, festività, grandi metrature)? Parliamone e costruiamo un piano dedicato.
          </p>
          <div style={{ marginTop: 12 }}>
            <a className="button button-secondary" href="#">Parla con noi</a>
          </div>
        </div>
      </section>
    </>
  );
}

