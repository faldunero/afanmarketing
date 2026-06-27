'use client';

import { useEffect, useRef } from 'react';
import styles from './ImageTicker.module.css';

const CARDS_ROW1 = [
  { industry: 'Automotriz · Servimaq', result: '−60%', label: 'Reducción costo CPA', bg: 'card1' },
  { industry: 'Fintech · Xcala', result: '+87%', label: 'Tasa de conversión', bg: 'card2' },
  { industry: 'Google Ads · Certificado', result: '+3.500', label: 'Anuncios gestionados', bg: 'card3' },
  { industry: 'Inmobiliaria', result: '−55%', label: 'Costo por lead captado', bg: 'card4' },
  { industry: 'Captación · Lead Nurturing', result: '250K+', label: 'Prospectos generados', bg: 'card5' },
  { industry: 'Automotriz · Piamonte', result: '+114%', label: 'Tasa de conversión', bg: 'card6' },
  { industry: 'Meta Ads · Redes Sociales', result: 'USD 1M+', label: 'Inversión administrada', bg: 'card7' },
];

const CARDS_ROW2 = [
  { industry: 'Textil y Moda', result: 'CRM', label: 'Automatización comercial', bg: 'card8' },
  { industry: 'B2B · Prospección', result: 'Ventas', label: 'Ciclos complejos optimizados', bg: 'card9' },
  { industry: 'Agronegocios', result: 'B2C / B2B', label: 'Estrategia digital completa', bg: 'card10' },
  { industry: 'Search Engine Marketing', result: 'Google', label: 'Partner certificado oficial', bg: 'card11' },
  { industry: 'Segmentación · Audiencias', result: 'Leads', label: 'Prospectos calificados', bg: 'card12' },
  { industry: 'Optimización Comercial', result: '+250%', label: 'Mejora en cierre de ventas', bg: 'card13' },
  { industry: 'Resultados · ROI', result: 'Desde 2019', label: 'Experiencia corporativa real', bg: 'card14' },
];

function TickerCard({ card }: { card: (typeof CARDS_ROW1)[0] }) {
  return (
    <div className={`${styles.card} ${styles[card.bg]}`}>
      <div className={styles.cardInner}>
        <div className={styles.industry}>{card.industry}</div>
        <div className={styles.result}>{card.result}</div>
        <div className={styles.label}>{card.label}</div>
      </div>
    </div>
  );
}

export default function ImageTicker() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate children for seamless loop
    [track1Ref, track2Ref].forEach((ref) => {
      if (!ref.current) return;
      const original = ref.current.innerHTML;
      ref.current.innerHTML = original + original;
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.label}>Casos de éxito · Industrias · Resultados</div>

      <div className={styles.overflow}>
        <div className={`${styles.track} ${styles.trackLeft}`} ref={track1Ref}>
          {CARDS_ROW1.map((c, i) => <TickerCard key={i} card={c} />)}
        </div>
      </div>

      <div className={styles.overflow}>
        <div className={`${styles.track} ${styles.trackRight}`} ref={track2Ref}>
          {CARDS_ROW2.map((c, i) => <TickerCard key={i} card={c} />)}
        </div>
      </div>
    </section>
  );
}
