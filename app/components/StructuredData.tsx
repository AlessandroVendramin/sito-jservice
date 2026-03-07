export function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jservicejesolo.com/#organization', // Sostituisci con il tuo dominio
    name: 'JService S.R.L.',
    legalName: 'JService S.R.L.',
    image: 'https://jservicejesolo.com/logo.svg', // Sostituisci con il tuo dominio
    url: 'https://jservicejesolo.com', // Sostituisci con il tuo dominio
    telephone: '+39393668673',
    email: 'jservicesrljesolo@gmail.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Levantina, 57',
      addressLocality: 'Jesolo',
      postalCode: '30016',
      addressRegion: 'VE',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.5333', // Coordinate approssimative di Jesolo
      longitude: '12.6333',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Jesolo',
      },
      {
        '@type': 'City',
        name: 'Cavallino-Treporti',
      },
      {
        '@type': 'City',
        name: 'Eraclea',
      },
      {
        '@type': 'City',
        name: 'San Donà di Piave',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Pulizia',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pulizia di Cambio',
            description: 'Servizio di pulizia per cambio ospite/inquilino',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pulizia di Fondo',
            description: 'Intervento straordinario e approfondito di pulizia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ripasso e Controllo',
            description: 'Intervento leggero di verifica generale',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pulizie Straordinarie',
            description: 'Servizi personalizzati per esigenze specifiche',
          },
        },
      ],
    },
    sameAs: [
      // Aggiungi i link ai social media quando disponibili
      // 'https://www.facebook.com/jservice',
      // 'https://www.instagram.com/jservice',
    ],
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JService S.R.L.',
    legalName: 'JService S.R.L.',
    url: 'https://jservicejesolo.com', // Sostituisci con il tuo dominio
    logo: 'https://jservicejesolo.com/logo.svg', // Sostituisci con il tuo dominio
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+39393668673',
      contactType: 'customer service',
      areaServed: 'IT',
      availableLanguage: ['Italian'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Levantina, 57',
      addressLocality: 'Jesolo',
      postalCode: '30016',
      addressRegion: 'VE',
      addressCountry: 'IT',
    },
    taxID: 'IT04914180270',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
