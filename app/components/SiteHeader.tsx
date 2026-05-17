'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { href: '/servizi', label: 'Servizi' },
  { href: '/prezzi', label: 'Prezzi' },
  { href: '/zone-servite', label: 'Zone servite' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/faq', label: 'FAQ' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerEl = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = headerEl.current;
    if (!el) return;
    const sync = () => el.style.setProperty('--nav-panel-top', `${el.offsetHeight}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header ref={headerEl} className={`site-header${open ? ' site-header--nav-open' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="JService — vai alla homepage">
          <img
            className="brand-logo"
            src="/logo.png"
            alt="JService — Pulizie professionali a Jesolo"
            width={236}
            height={87}
            decoding="async"
          />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Chiudi menu' : 'Apri menu'}</span>
          <span className="nav-toggle-bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>
        <div
          className="nav-backdrop"
          aria-hidden
          onClick={() => setOpen(false)}
        />
        <nav id="site-main-nav" className="site-nav" aria-label="Navigazione principale">
          <ul className="nav-list">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link${pathname === href ? ' nav-link--active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
