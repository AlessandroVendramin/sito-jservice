# Guida al lancio in produzione e consigli opzionali

**Documento per il Cliente**  
Questo documento spiega passo dopo passo tutto ciò che serve per mettere online il sito e, in una seconda parte, propone consigli opzionali per migliorare marketing, SEO, design e prestazioni.

---

# PARTE 1 — Andare in produzione (obbligatorio)

## 1. Scelta e acquisto del dominio

### Cosa è il dominio
Il dominio è l’indirizzo del sito (es. `www.tuosito.it`). È obbligatorio per andare online con un indirizzo “pulito” e professionale.

### Dove acquistarlo (registrar italiani e internazionali) - lo faremo probabilmente su GoDaddy ma le altre varianti sono:
- **Registro .it**: [https://www.nic.it](https://www.nic.it) — per domini `.it`
- **Aruba**: [https://www.aruba.it](https://www.aruba.it) — domini .it, .com, .eu, ecc.
- **Register.it**: [https://www.register.it](https://www.register.it)
- **SiteGround**, **Namecheap**, **Google Domains** (ora Squarespace Domains) — per .com / .eu

### Cosa fare
1. Scegliere il nome (es. `jservice.it`, `tuo-nome.it`). - NB: probabilmente JService.it non sarà disponibile, ma controlliamo
2. Verificare disponibilità sul sito del registrar.
3. Acquistare il dominio (1 anno o più).
4. **Consiglio**: abilitare la **privacy WHOIS** (nasconde i tuoi dati personali nel registro pubblico).
5. Conservare le credenziali di accesso al pannello (dove gestisci DNS e rinnovi).

### Costi indicativi
- `.it`: circa 8–15 €/anno  
- `.com`: circa 10–15 €/anno  

---

## 2. Scelta dell’hosting / piattaforma di deploy

Il sito è realizzato in **Next.js**. Le opzioni più adatte sono:

### Opzione A: Vercel (consigliata per Next.js)
- **Sito**: [https://vercel.com](https://vercel.com)
- **Pro**: ottimizzato per Next.js, SSL gratuito, deploy automatico da Git, ottime prestazioni.
- **Piano gratuito**: adatto a siti piccoli/medi; limiti di bandwidth e build.
- **Piano a pagamento**: da circa 20 $/mese per uso professionale.

**Passi sintetici**:
1. Creare account su Vercel.
2. Collegare il repository Git (GitHub/GitLab/Bitbucket) del progetto.
3. Configurare il progetto: framework **Next.js** (rilevato in automatico).
4. Eseguire il primo deploy; Vercel fornirà un URL temporaneo (es. `tuoprogetto.vercel.app`).
5. In seguito collegare il dominio personalizzato (vedi sotto).

### Opzione B: Netlify
- **Sito**: [https://www.netlify.com](https://www.netlify.com)
- Supporta Next.js; funzionamento simile (collegamento Git, deploy, dominio custom).

### Opzione C: Hosting VPS / server (Aruba, SiteGround, AWS, ecc.)
- Richiede configurazione manuale: Node.js, build `npm run build`, avvio con `npm run start`, eventualmente reverse proxy (es. Nginx) e gestione SSL (es. Let’s Encrypt).
- Più tecnico; consigliato solo se avete già esperienza o un tecnico.

**Per questa guida si assume l’uso di Vercel**, ma i concetti (dominio, DNS, SSL) valgono anche per altre piattaforme.

---

## 3. Collegare il dominio al sito (DNS)

Dopo il primo deploy avrete un URL tipo `tuoprogetto.vercel.app`. Per usare il vostro dominio (es. `www.tuosito.it` e `tuosito.it`):

### Su Vercel
1. Nel progetto: **Settings** → **Domains**.
2. Aggiungere il dominio (es. `tuosito.it`).
3. Aggiungere anche `www.tuosito.it` se volete che entrambi funzionino.
4. Vercel mostrerà quali **record DNS** inserire (es. tipo **A** o **CNAME** e i valori da copiare).

### Nel pannello del registrar (dove avete comprato il dominio)
1. Accedere al pannello (Aruba, Register, Nic.it, ecc.).
2. Trovare la sezione **DNS**, **Gestione DNS**, **Zone DNS** o simile.
3. Inserire i record indicati da Vercel, ad esempio:
   - Per **tuosito.it** (dominio “root”):  
     - Tipo: **A**  
     - Nome/host: `@` (o lasciare vuoto)  
     - Valore: l’indirizzo IP fornito da Vercel (es. `76.76.21.21`)
   - Per **www.tuosito.it**:  
     - Tipo: **CNAME**  
     - Nome/host: `www`  
     - Valore: `cname.vercel-dns.com` (o quello indicato da Vercel)

4. Salvare e attendere la **propagazione DNS** (da qualche minuto fino a 24–48 ore, di solito 1–2 ore).

### Verifica
- Su Vercel, in **Domains**, lo stato del dominio diventerà “Valid” quando il DNS è corretto.
- Controllare che sia attivo il **certificato SSL** (lucchetto nel browser): di solito Vercel lo attiva in automatico.

---

## 4. Certificato SSL (HTTPS)

- Su **Vercel** (e su Netlify) l’SSL è incluso: una volta collegato il dominio, viene fornito automaticamente (Let’s Encrypt).
- Il sito deve essere raggiungibile con **https://** (es. `https://tuosito.it`).
- Se usate un VPS o un altro hosting, dovrete configurare SSL (es. Let’s Encrypt con Certbot) e il reverse proxy; in quel caso servono istruzioni specifiche per il vostro server.

---

## 5. Configurazione del sito con il dominio reale

Prima di considerare il sito “in produzione” è necessario sostituire ovunque l’URL di esempio (es. `https://jservice.it`) con il **vostro dominio reale**.

### File da aggiornare (il vostro sviluppatore può farlo per voi)

| File | Cosa sostituire |
|------|------------------|
| `app/layout.tsx` | `metadataBase` e `openGraph.url`: mettere il vostro dominio (es. `https://tuosito.it`) |
| `app/components/StructuredData.tsx` | Tutti gli URL che contengono `https://jservice.it`: sostituire con il vostro dominio |
| `app/sitemap.ts` | `baseUrl`: impostare `https://tuosito.it` (o il dominio scelto) |
| `public/robots.txt` | Riga `Sitemap:`: mettere `https://tuosito.it/sitemap.xml` |

Dopo le modifiche è necessario un **nuovo deploy** (nuovo push su Git se usate deploy automatico).

---

## 6. Contenuti obbligatori prima del lancio

### Immagine Open Graph (condivisione sui social)
- **Scopo**: quando qualcuno condivide un link del sito su Facebook, WhatsApp, LinkedIn, ecc., viene mostrata un’anteprima con titolo, descrizione e immagine.
- **Specifiche**:
  - Dimensioni consigliate: **1200 x 630 pixel**
  - Formato: JPG o PNG
  - Nome file: `og-image.jpg` (o `og-image.png`)
  - Posizione: nella cartella **public** del progetto, quindi accessibile come `https://tuosito.it/og-image.jpg`
- **Contenuto suggerito**: logo aziendale + testo tipo “Pulizie professionali a Jesolo” (o il vostro messaggio). Testo leggibile e non troppo piccolo.

### Favicon e icona Apple
- **favicon.ico**: icona per tab del browser (es. 32x32 o 16x16 px), in `public/favicon.ico`.
- **apple-touch-icon.png**: icona quando si salva il sito sulla home dello smartphone (180x180 px), in `public/apple-touch-icon.png`.

Se non li fornite, il sito userà eventuali icone già presenti nel progetto; averli personalizzati migliora l’immagine del brand.

---

## 7. Checklist pre-lancio

Da spuntare prima di considerare il sito “live”:

- [ ] Dominio acquistato e credenziali conservate  
- [ ] Hosting / piattaforma di deploy scelta (es. Vercel)  
- [ ] Repository del sito collegato e primo deploy eseguito  
- [ ] Dominio collegato (record DNS inseriti e propagati)  
- [ ] Sito raggiungibile con **https://** (lucchetto attivo)  
- [ ] In tutti i file del progetto sostituito l’URL placeholder con il dominio reale  
- [ ] Nuovo deploy dopo le sostituzioni URL  
- [ ] Immagine Open Graph (`og-image.jpg`) creata e messa in `public/`  
- [ ] Favicon e (opzionale) apple-touch-icon presenti in `public/`  
- [ ] Verifica rapida: tutte le pagine principali si aprono, menu e link funzionano, form di contatto (se presente) invia correttamente  

---

## 8. Dopo il lancio (primi passi consigliati)

1. **Google Search Console**  
   - Andare su [Google Search Console](https://search.google.com/search-console).  
   - Aggiungere la proprietà con l’URL del sito (es. `https://tuosito.it`).  
   - Verificare la proprietà (tramite tag HTML in `layout.tsx`, file HTML o record DNS, come indicato da Google).  
   - Inviare la sitemap: `https://tuosito.it/sitemap.xml`.

2. **Google Analytics (GA4)**  
   - Creare una proprietà GA4 su [Google Analytics](https://analytics.google.com).  
   - Inserire il tag di misurazione nel sito (in `app/layout.tsx` o con Google Tag Manager).  
   Così potrete vedere visite, pagine più viste, provenienza del traffico, ecc.

3. **Google Business Profile (ex Google My Business)**  
   - Creare o rivendicare la scheda dell’attività.  
   - Inserire nome, indirizzo, telefono, orari, categoria, foto.  
   - Collegare il sito e incoraggiare recensioni: aiuta molto la visibilità locale.

Queste tre cose non sono obbligatorie per “andare online”, ma sono fortemente consigliate per visibilità e statistiche.

---

# PARTE 2 — Consigli opzionali (marketing, SEO, design, ottimizzazione)

Questa sezione raccoglie idee per migliorare nel tempo marketing, SEO, design, prestazioni e altro. Sono **opzionali** e si possono introdurre gradualmente.

---

## Marketing

### Presenza sui social
- Aprire e mantenere profili coerenti (Facebook, Instagram, eventualmente LinkedIn per B2B).
- In bio e nelle descrizioni inserire il link al sito.
- Condividere contenuti utili (tips pulizie, novità servizi, recensioni, foto prima/dopo) e link alle pagine del sito (servizi, prezzi, contatti).

### Email marketing
- Raccolta email (form in sito, box “Iscriviti alla newsletter” o “Resta aggiornato”).
- Invio periodico di novità, offerte o consigli (con strumenti come Mailchimp, Sendinblue, ecc.) con link al sito per approfondimenti.

### Offerta “primo contatto”
- Es. “Primo preventivo gratuito” o “10% di sconto sulla prima pulizia” in homepage o in una sezione dedicata, per aumentare le richieste di contatto.

### Recensioni e testimonianze
- Chiedere ai clienti soddisfatti una recensione su Google e, se possibile, una breve testimonianza (con permesso) da pubblicare in una pagina “Recensioni” o “Cosa dicono di noi” nel sito.

### Partnership e passaparola
- Convenzioni con strutture ricettive, agenzie, amministratori di condominio: link al sito su loro siti o materiali, in cambio di visibilità o servizi.

---

## SEO (visibilità sui motori di ricerca)

### Contenuti aggiuntivi
- **Blog**: articoli su “come preparare l’appartamento al cambio”, “pulizia di fondo: quando farla”, “pulizie a Jesolo: cosa offriamo”, ecc. Ogni articolo può puntare a parole chiave locali e di servizio.
- **Pagine servizi dedicate**: una pagina per “Pulizia di cambio”, una per “Pulizia di fondo”, “Ripasso”, “Uffici”, ecc., con testi originali e descrizioni chiare.
- **Pagina “Zone servite”**: elenco comuni/zone (Jesolo, Lido di Jesolo, Cavallino, Eraclea, ecc.) con brevi testi; possibile integrare una mappa (Google Maps) per migliorare la SEO locale.

### Local SEO
- Nome, indirizzo e telefono (NAP) **identici** su sito, Google Business, biglietti da visita, social.
- In footer e in una pagina “Contatti” ripetere indirizzo completo e link a Google Maps.
- Struttured data (LocalBusiness, Organization) sono già previsti nel progetto; assicurarsi che gli URL e i dati siano aggiornati al dominio e ai dati reali.

### Link e citazioni
- Iscrizione a directory locali (Pagine Gialle, Yelp, TripAdvisor se applicabile, portali turistici di Jesolo/Lido).
- Citazioni su siti di strutture ricettive, blog locali, associazioni di categoria: ogni link verso il vostro sito può aiutare il posizionamento.

### Strumenti utili
- **Google Search Console**: per vedere query, impressioni, click e errori di indicizzazione.
- **Google Analytics**: per capire da dove arriva il traffico e quali pagine performano meglio.
- **PageSpeed Insights** e **Mobile-Friendly Test**: per controllare velocità e usabilità da mobile.

---

## Design e esperienza utente

### Chiarezza e gerarchia
- Titoli chiari (H1 per la pagina, H2/H3 per le sezioni), paragrafi brevi, elenchi puntati dove serve.
- Call-to-action evidenti (“Chiedi preventivo”, “Contattaci”, “Scopri i servizi”) con pulsanti ben visibili.

### Coerenza visiva
- Uso coerente di logo, colori e font in tutto il sito (e sui social).
- Se cambiate logo o palette, aggiornare anche favicon e immagine Open Graph.

### Mobile
- Il sito è già responsive; verificare su smartphone che menu, form e pulsanti siano comodi da usare e che i testi siano leggibili senza zoom.

### Accessibilità
- Contrasto adeguato tra testo e sfondo.
- Bottoni e link sufficientemente grandi per il tocco.
- Testi alternativi (alt) per le immagini importanti (già previsti nel progetto; mantenerli aggiornati se cambiate le immagini).

### Contatto
- Numero di telefono e/o email visibili (es. in header e footer).
- Se usate un form, conferma chiara dopo l’invio (“Grazie, ti contatteremo entro 24 ore”) e notifica via email quando arriva una richiesta.

---

## Prestazioni e ottimizzazione tecnica

### Immagini
- Usare formati moderni (WebP dove possibile; Next.js può gestirli).
- Dimensioni adeguate (non caricare immagini enormi per anteprime).
- L’uso del componente `Image` di Next.js (già nel progetto) aiuta; mantenere buone dimensioni in fase di upload.

### Velocità
- Controllare periodicamente con **PageSpeed Insights** (mobile e desktop).
- Ridurre script di terze parti non necessari; eventualmente caricare analytics o chat in modo asincrono per non bloccare la pagina.

### Aggiornamenti
- Aggiornare periodicamente i contenuti (prezzi, servizi, zone, orari) e, se avete un blog, pubblicare con una certa regolarità; aiuta SEO e dà un’impressione di sito “vivo”.

---

## Sicurezza e affidabilità

- **Backup**: se i contenuti sono gestiti da un CMS esterno, fare backup regolari. Se il sito è solo statico/Next.js su Vercel, il codice è nel repository (Git); assicurarsi che il repo sia backuppato.
- **Form di contatto**: se il form invia email, proteggere da spam (es. reCAPTCHA o servizi come Formspree) e non esporre indirizzi email in chiaro nel codice lato client se possibile.
- **HTTPS**: mantenere sempre il sito in HTTPS (con Vercel/Netlify è automatico).

---

## Altre idee

- **Chat / WhatsApp**: pulsante “Scrivi su WhatsApp” in evidenza per chi preferisce il contatto immediato.
- **Multilingua**: se avete clienti stranieri (es. turisti), valutare una versione in inglese o tedesco delle pagine principali.
- **Certificazioni e assicurazioni**: se avete certificazioni, polizze RC o adesioni a categorie, una piccola sezione “Garanzie e certificazioni” aumenta la fiducia.
- **Galleria lavori**: foto (con permesso) di appartamenti o locali prima/dopo la pulizia, in una pagina dedicata o in “Servizi”.
- **FAQ**: ampliare la pagina FAQ con domande che vi fanno spesso i clienti; aiuta SEO e riduce dubbi prima del contatto.
- **Calendario / prenotazioni**: in futuro, integrare un sistema di richiesta prenotazione o preventivo con scelta data (anche solo per fasi successive). - MA IN REALTà GIà PRESENTE SU HALOMORA.COM

---

## Riepilogo consigli opzionali

| Area        | Esempi di azione |
|------------|-------------------|
| **Marketing** | Social, email, recensioni, offerte primo contatto, partnership |
| **SEO**       | Blog, pagine servizi/zone, NAP coerente, directory, link building |
| **Design**    | CTA chiare, coerenza brand, mobile e accessibilità, feedback sul form |
| **Prestazioni** | Immagini ottimizzate, meno script inutili, controlli PageSpeed |
| **Altro**      | WhatsApp, multilingua, certificazioni, galleria, FAQ, prenotazioni |

Potete scegliere solo alcune di queste idee e introdurle a poco a poco, in base a tempo e budget.

---

*Documento preparato per il cliente. Per domande tecniche su dominio, DNS o deploy rivolgersi al proprio sviluppatore o fornitore di hosting.*
