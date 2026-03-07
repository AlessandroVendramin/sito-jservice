# Requirements Document

## Introduction

Questo progetto prevede la creazione di un sito web statico completo per un'azienda di pulizie italiana. Il sito deve essere veloce, responsive e seguire un design essenziale che trasmetta freschezza e igiene. Tutte le funzionalità di prenotazione devono rimandare a una piattaforma esterna (Flowhome), mentre il sito si concentra sulla presentazione dei servizi e sulla generazione di lead qualificati.

## Requirements

### Requirement 1

**User Story:** Come visitatore del sito, voglio navigare un sito web veloce e responsive che mi presenti chiaramente i servizi di pulizia disponibili, così da poter valutare se l'azienda soddisfa le mie esigenze.

#### Acceptance Criteria

1. WHEN un utente accede al sito da qualsiasi dispositivo THEN il sito SHALL essere completamente responsive e ottimizzato per mobile-first
2. WHEN un utente naviga tra le pagine THEN il sito SHALL caricare con performance Lighthouse ≥ 95 su mobile e desktop
3. WHEN un utente visualizza il contenuto THEN tutto il testo SHALL essere in lingua italiana con tono professionale e rassicurante
4. WHEN un utente naviga il sito THEN il design SHALL seguire la palette colori specificata (bianco #FFFFFF, grigio #F6F7F9, verde/acqua #2CC3A5/#2EB797, blu #3AA1FF)

### Requirement 2

**User Story:** Come potenziale cliente, voglio prenotare facilmente i servizi di pulizia attraverso pulsanti chiari e visibili, così da poter procedere rapidamente con la richiesta.

#### Acceptance Criteria

1. WHEN un utente clicca su qualsiasi pulsante "Prenota ora" o "Richiedi un preventivo" THEN il sistema SHALL reindirizzare a {{BOOKING_URL}} in una nuova scheda
2. WHEN un utente visualizza una pagina THEN SHALL essere sempre presente almeno una CTA di prenotazione visibile
3. WHEN un utente accede alla homepage THEN SHALL vedere una CTA primaria "Prenota ora" nella sezione hero
4. WHEN un utente naviga il sito THEN il pulsante "Prenota" nell'header SHALL essere sempre visibile e accessibile

### Requirement 3

**User Story:** Come visitatore, voglio accedere facilmente alle informazioni sui servizi offerti, prezzi indicativi e zone coperte, così da capire se l'azienda opera nella mia area e con quale fascia di prezzo.

#### Acceptance Criteria

1. WHEN un utente accede alla pagina servizi THEN SHALL vedere tutti i servizi principali (domestiche, uffici, post-ristrutturazione, condominiali, sanificazioni, vetrate, trattamenti pavimenti)
2. WHEN un utente visualizza un servizio THEN SHALL vedere cosa include, cosa esclude, durata tipica ed eventuali extra
3. WHEN un utente accede alla pagina prezzi THEN SHALL vedere tabelle trasparenti con range indicativi in euro
4. WHEN un utente cerca informazioni sulla copertura THEN SHALL trovare la lista delle zone servite usando {{SERVICE_AREAS}}

### Requirement 4

**User Story:** Come utente con esigenze di accessibilità, voglio navigare un sito che rispetti gli standard WCAG AA, così da poter accedere a tutte le informazioni indipendentemente dalle mie capacità.

#### Acceptance Criteria

1. WHEN un utente naviga con la tastiera THEN tutti gli elementi interattivi SHALL essere raggiungibili e avere focus visibile
2. WHEN un utente utilizza screen reader THEN tutte le immagini SHALL avere attributi alt appropriati
3. WHEN un utente visualizza il contenuto THEN il contrasto dei colori SHALL rispettare gli standard WCAG AA
4. WHEN un utente accede al sito THEN la struttura HTML SHALL essere semantica con heading gerarchici corretti

### Requirement 5

**User Story:** Come proprietario dell'azienda, voglio poter facilmente aggiornare le informazioni aziendali (contatti, servizi, prezzi) attraverso un sistema di configurazione centralizzato, così da mantenere il sito sempre aggiornato.

#### Acceptance Criteria

1. WHEN il proprietario vuole modificare informazioni aziendali THEN SHALL poter editare un singolo file di configurazione con tutte le variabili
2. WHEN vengono aggiornate le variabili di configurazione THEN il sito SHALL riflettere automaticamente i cambiamenti in tutte le pagine
3. WHEN il proprietario consulta la documentazione THEN SHALL trovare istruzioni chiare su come modificare {{COMPANY_NAME}}, {{TAGLINE}}, {{BOOKING_URL}}, {{PHONE}}, {{EMAIL}}, {{ADDRESS}}, {{SERVICE_AREAS}} e altre variabili
4. WHEN il proprietario vuole pubblicare il sito THEN SHALL avere istruzioni chiare per il deploy su piattaforme statiche

### Requirement 6

**User Story:** Come visitatore interessato, voglio trovare facilmente informazioni di contatto e poter fare domande attraverso un form di contatto, così da poter ottenere chiarimenti prima di prenotare.

#### Acceptance Criteria

1. WHEN un utente cerca i contatti THEN SHALL trovare {{PHONE}} cliccabile (tel:), {{EMAIL}} (mailto:), {{ADDRESS}} e mappa
2. WHEN un utente vuole fare una domanda THEN SHALL poter utilizzare un form di contatto funzionante
3. WHEN un utente accede alla sezione FAQ THEN SHALL trovare 10-15 domande frequenti con markup Schema.org FAQPage
4. WHEN un utente cerca informazioni sull'azienda THEN SHALL trovare mission, valori, certificazioni e informazioni sul team

### Requirement 7

**User Story:** Come motore di ricerca, voglio poter indicizzare correttamente il sito web, così da poter mostrare l'azienda nei risultati di ricerca pertinenti.

#### Acceptance Criteria

1. WHEN un crawler accede al sito THEN ogni pagina SHALL avere title e meta description unici
2. WHEN un crawler analizza la struttura THEN SHALL trovare H1 unico per pagina, H2 chiari e breadcrumb semantici
3. WHEN un crawler cerca dati strutturati THEN SHALL trovare markup Schema.org per LocalBusiness, Service, Product/Offer e FAQPage
4. WHEN un crawler accede al sito THEN SHALL trovare sitemap.xml, robots.txt e canonical URL corretti

### Requirement 8

**User Story:** Come visitatore che condivide il sito sui social media, voglio che i link appaiano con anteprima attraente e informazioni corrette, così da invogliare altri a visitare il sito.

#### Acceptance Criteria

1. WHEN un utente condivide una pagina sui social THEN SHALL apparire con OpenGraph e Twitter Card appropriati
2. WHEN un utente salva il sito nei preferiti THEN SHALL vedere favicon e manifest corretti
3. WHEN un utente visualizza il sito su dispositivi mobili THEN SHALL vedere icone e colori del tema appropriati
4. WHEN un utente condivide il sito THEN le immagini di anteprima SHALL essere ottimizzate e rappresentative

### Requirement 9

**User Story:** Come visitatore, voglio navigare un sito che rispetti la privacy e sia conforme alle normative, così da sentirmi sicuro nel fornire i miei dati di contatto.

#### Acceptance Criteria

1. WHEN un utente accede al sito THEN SHALL vedere un banner cookie semplice con preferenze essenziali
2. WHEN un utente cerca informazioni legali THEN SHALL trovare pagine privacy, cookie e termini strutturate
3. WHEN un utente utilizza il form di contatto THEN SHALL vedere informazioni chiare sul trattamento dei dati
4. WHEN un utente visualizza il footer THEN SHALL trovare {{PIVA}} e link alle pagine legali