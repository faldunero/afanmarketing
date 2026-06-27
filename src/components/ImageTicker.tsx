'use client';

import { useEffect, useRef } from 'react';
import styles from './ImageTicker.module.css';

/* Todas las fotos son sin personas — tecnología, ciudad, dashboards, autos, edificios */
const ROW1 = [
  { industry: 'Automotriz · Servimaq', result: '−60%', label: 'Reducción costo CPA',
    img: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Auto moderno en showroom' },
  { industry: 'Fintech · Xcala', result: '+87%', label: 'Tasa de conversión',
    img: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Gráfico financiero crecimiento' },
  { industry: 'Google Ads · Certificado', result: '+3.500', label: 'Anuncios gestionados',
    img: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Pantalla digital analytics' },
  { industry: 'Inmobiliaria', result: '−55%', label: 'Costo por lead captado',
    img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Edificio corporativo moderno' },
  { industry: 'Captación · Lead Nurturing', result: '250K+', label: 'Prospectos generados',
    img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Dashboard marketing digital' },
  { industry: 'Automotriz · Piamonte', result: '+114%', label: 'Tasa de conversión',
    img: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Autos en concesionaria' },
  { industry: 'Meta Ads · Redes Sociales', result: 'USD 1M+', label: 'Inversión administrada',
    img: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Redes sociales en pantalla' },
];

const ROW2 = [
  { industry: 'Textil y Moda', result: 'CRM', label: 'Automatización comercial',
    img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Tienda de moda moderna' },
  { industry: 'B2B · Prospección', result: 'Ventas', label: 'Ciclos complejos optimizados',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Estadísticas de ventas' },
  { industry: 'Agronegocios', result: 'B2C/B2B', label: 'Estrategia digital completa',
    img: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Campo agrícola moderno' },
  { industry: 'Search Engine Marketing', result: 'Google', label: 'Partner certificado oficial',
    img: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Computador con Google' },
  { industry: 'Segmentación · Audiencias', result: 'Leads', label: 'Prospectos calificados',
    img: 'https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Gráfico de audiencias digital' },
  { industry: 'Optimización Comercial', result: '+250%', label: 'Mejora en cierre de ventas',
    img: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Estadísticas de crecimiento' },
  { industry: 'Experiencia corporativa', result: 'Desde 2019', label: 'Resultados comprobados',
    img: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Ciudad de noche abstracto' },
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
