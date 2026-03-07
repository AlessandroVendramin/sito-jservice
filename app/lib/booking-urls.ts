/**
 * URL di fallback: landing azienda su halomora (tutti i servizi).
 * Usato quando il link diretto al booking flow non è raggiungibile.
 */
export const HALOMORA_LANDING_URL = 'https://halomora.com/c/JService';

/**
 * Link diretti all'inizio del booking flow per ogni servizio.
 * Chiavi usate solo per riferimento; i valori sono gli URL completi.
 */
export const BOOKING_URLS = {
  ripassoControllo:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/d79a959a-ddcc-4738-a3f3-18e8e1bc77d6',
  puliziaFondoMonolocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/ddfb096c-af88-41a8-8f37-101b51567e96',
  puliziaCambioMonolocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/4525e382-2ecf-416e-a342-e6f9de48e4ea',
  puliziaFondoBilocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/b66b98ba-1239-4ed0-b668-8f655101d261',
  puliziaCambioBilocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/08b60c68-13c2-4b10-b5ec-1fa30fea1b31',
  puliziaFondoTrilocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/ac07c96a-7061-4410-b2d6-094fd69eb62f',
  puliziaCambioTrilocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/a91092ee-9ef0-489d-ba49-b36390e86ab3',
  puliziaFondoQuadrilocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/68c78f28-ed2d-4e6a-b738-f9058aba5dc3',
  puliziaCambioQuadrilocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/fda3ef54-202f-49aa-9a11-7af446509ab0',
  puliziaFondoPentalocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/cb5e3943-6d65-4c4d-9369-07ce641f4525',
  puliziaCambioPentalocale:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/2ae9e6d7-7c41-4397-9a9b-e781359fea9d',
  pulizieStraordinarieVarie:
    'https://halomora.com/booking/ed671b0b-9a12-4883-83f2-95c25abb4e5b/60f19d3a-df95-40ea-a763-819668147603',
} as const;

export type BookingServiceKey = keyof typeof BOOKING_URLS;
