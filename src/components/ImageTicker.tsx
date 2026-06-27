'use client';

import { useEffect, useRef } from 'react';
import styles from './ImageTicker.module.css';

const ROW1 = [
  { industry: 'Automotriz · Servimaq', result: '−60%', label: 'Reducción costo CPA', img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Business team' },
  { industry: 'Fintech · Xcala', result: '+87%', label: 'Tasa de conversión', img: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Analytics dashboard' },
  { industry: 'Google Ads · Certificado', result: '+3.500', label: 'Anuncios gestionados', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Strategy meeting' },
  { industry: 'Inmobiliaria', result: '−55%', label: 'Costo por lead captado', img: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Real estate' },
  { industry: 'Captación · Lead Nurturing', result: '250K+', label: 'Prospectos generados', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Marketing team' },
  { industry: 'Automotriz · Piamonte', result: '+114%', label: 'Tasa de conversión', img: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Sales growth' },
  { industry: 'Meta Ads · Redes Sociales', result: 'USD 1M+', label: 'Inversión administrada', img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Digital marketing' },
];

const ROW2 = [
  { industry: 'Textil y Moda', result: 'CRM', label: 'Automatización comercial', img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Team collaboration' },
  { industry: 'B2B · Prospección', result: 'Ventas', label: 'Ciclos complejos optimizados', img: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'B2B meeting' },
  { industry: 'Agronegocios', result: 'B2C/B2B', label: 'Estrategia digital completa', img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Agriculture business' },
  { industry: 'Search Engine Marketing', result: 'Google', label: 'Partner certificado oficial', img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Digital strategy' },
  { industry: 'Segmentación · Audiencias', result: 'Leads', label: 'Prospectos calificados', img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Audience targeting' },
  { industry: 'Optimización Comercial', result: '+250%', label: 'Mejora en cierre de ventas', img: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Sales optimization' },
  { industry: 'Experiencia corporativa', result: 'Desde 2019', label: 'Resultados comprobados', img: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Corporate experience' },
];

function Card({ item }: { item: typeof ROW1[0] }) {
  return (
    <div className={styles.card}>
      <img src={item.img} alt={item.alt} className={styles.cardImg} loading="lazy" />
      <div className={styles.cardOverlay} />
      <div className={styles.cardInfo}>
        <div className={styles.industry}>{item.industry}</div>
        <div className={styles.result}>{item.result}</div>
        <div className={styles.label}>{item.label}</div>
      </div>
    </div>
  );
}

export default function ImageTicker() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [ref1, ref2].forEach((ref) => {
      if (!ref.current) return;
      ref.current.innerHTML += ref.current.innerHTML;
    });
  }, []);

  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Casos de éxito · Industrias · Resultados</p>
      <div className={styles.overflow}>
        <div className={`${styles.track} track-left`} ref={ref1}>
          {ROW1.map((item, i) => <Card key={i} item={item} />)}
        </div>
      </div>
      <div className={styles.overflow}>
        <div className={`${styles.track} track-right`} ref={ref2}>
          {ROW2.map((item, i) => <Card key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}
