'use client';

import { useEffect, useMemo, useState } from 'react';
import { HALOMORA_LANDING_URL } from '../lib/booking-urls';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=39393668673&text&type=phone_number&app_absent=0';

const PHONE_TEL = 'tel:+39393668673';
const EMAIL_MAILTO = 'mailto:jservicesrljesolo@gmail.com';

function WhatsAppIcon() {
  return (
    <svg className="wa-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6.21-1.63A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52ZM12 22a9.92 9.92 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37A9.88 9.88 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Zm5.46-7.52c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.07.15.2 2.12 3.24 5.14 4.54.72.31 1.29.5 1.73.64.73.23 1.4.2 1.92.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z"
      />
    </svg>
  );
}

export function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  /** URL diretto al booking flow del servizio (da data-booking-url sul trigger); null = usa landing */
  const [bookingUrl, setBookingUrl] = useState<string | null>(null);
  const [isCheckingLink, setIsCheckingLink] = useState(false);

  const canBook = useMemo(() => !!HALOMORA_LANDING_URL, []);

  /** URL effettivo per "Prenota": diretto al servizio se disponibile, altrimenti landing */
  const effectiveBookingUrl = bookingUrl ?? HALOMORA_LANDING_URL;
  const isDirectBooking = !!bookingUrl;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    function onDocumentClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const trigger = target.closest('[data-open-drawer="preventivo"]') as HTMLElement | null;
      if (trigger) {
        e.preventDefault();
        const url = trigger.getAttribute('data-booking-url');
        setBookingUrl(url || null);
        setIsOpen(true);
        return;
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocumentClick);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocumentClick);
    };
  }, []);

  const handlePrenotaClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!canBook) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    if (isCheckingLink) return;

    if (!isDirectBooking) {
      window.open(HALOMORA_LANDING_URL, '_blank', 'noopener,noreferrer');
      return;
    }

    setIsCheckingLink(true);
    try {
      const res = await fetch('/api/check-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: effectiveBookingUrl }),
      });
      const data = (await res.json()) as { ok?: boolean };
      const urlToOpen = data.ok ? effectiveBookingUrl : HALOMORA_LANDING_URL;
      window.open(urlToOpen, '_blank', 'noopener,noreferrer');
    } catch {
      window.open(HALOMORA_LANDING_URL, '_blank', 'noopener,noreferrer');
    } finally {
      setIsCheckingLink(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <a
        className="wa-fab"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
      >
        <span className="wa-fab-inner" aria-hidden="true">
          <WhatsAppIcon />
        </span>
      </a>

      {isOpen ? (
        <div className="drawer-overlay" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <div
            className="drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Richiedi preventivo"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button className="drawer-close" type="button" onClick={() => setIsOpen(false)} aria-label="Chiudi">
              <span aria-hidden="true">×</span>
            </button>

            <div className="drawer-grid">
              <div className="drawer-col">
                <div className="drawer-kicker">Prenotazione</div>
                <h3 className="drawer-title">Prenota in pochi click</h3>
                <p className="drawer-subtitle">
                  Compila la richiesta in modo guidato e ricevi conferma rapida.
                </p>

                <a
                  className="button button-primary drawer-primary"
                  href={effectiveBookingUrl}
                  target={canBook ? '_blank' : undefined}
                  rel={canBook ? 'noopener noreferrer' : undefined}
                  aria-disabled={!canBook || isCheckingLink}
                  onClick={handlePrenotaClick}
                >
                  {isCheckingLink ? 'Verifica link…' : 'Prenota in pochi click'}
                </a>

                <div className="drawer-powered">
                  powered by{' '}
                  <a href="https://halomora.com" target="_blank" rel="noopener noreferrer">
                    halomora.com
                  </a>
                </div>
              </div>

              <div className="drawer-divider" aria-hidden="true" />

              <div className="drawer-col">
                <div className="drawer-kicker">Contatti</div>
                <h3 className="drawer-title">Preferisci parlare con noi?</h3>
                <p className="drawer-subtitle">Scegli il canale più comodo: telefono, email o WhatsApp.</p>

                <div className="drawer-actions">
                  <a className="button button-secondary drawer-action" href={PHONE_TEL}>
                    Chiama
                    <span className="drawer-action-meta">393 366 8673</span>
                  </a>
                  <a className="button button-secondary drawer-action" href={EMAIL_MAILTO}>
                    Email
                    <span className="drawer-action-meta">jservicesrljesolo@gmail.com</span>
                  </a>
                  <a
                    className="button button-secondary drawer-action"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <span className="drawer-action-meta">+39 393 366 8673</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

