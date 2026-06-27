'use client';

import { useState, useEffect } from 'react';
import styles from './ConsentModal.module.css';

interface ConsentPrefs {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  commercial: boolean;
  timestamp: string;
  type: 'accept' | 'necessary' | 'reject';
}

const CONSENT_KEY = 'afan_consent_v1';

export default function ConsentModal() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [commercial, setCommercial] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (type: 'accept' | 'necessary' | 'reject') => {
    const prefs: ConsentPrefs = {
      analytics: type === 'accept' ? analytics : false,
      marketing: type === 'accept' ? marketing : false,
      functional: type === 'accept' ? functional : false,
      commercial: type === 'accept' ? commercial : false,
      timestamp: new Date().toISOString(),
      type,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="consent-title">
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.head}>
          <div className={styles.logoRow}>
            <div className={styles.logoSq}>
              <svg viewBox="0 0 10 10" width="11" height="11" fill="white">
                <path d="M1 9L5 1L9 9L5 6Z" />
              </svg>
            </div>
            <span className={styles.logoName}>Afan Marketing Digital</span>
          </div>
          <div className={styles.shieldRow}>
            <div className={styles.shieldIcon}>🔒</div>
            <div>
              <h2 className={styles.title} id="consent-title">
                Privacidad y cookies
              </h2>
              <p className={styles.titleSub}>
                Ley 21.719 · Protección de Datos Personales · Chile
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          <p className={styles.intro}>
            Antes de continuar, necesitamos su consentimiento para el uso de cookies y el
            tratamiento de sus datos personales, en cumplimiento de la{' '}
            <strong>Ley 21.719 de Protección de Datos Personales</strong> de Chile, vigente desde
            diciembre 2026. Puede personalizar sus preferencias o{' '}
            <strong>revocar este consentimiento en cualquier momento</strong>.
          </p>

          {/* Siempre activas */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Siempre activas</div>
            <div className={styles.toggleRow}>
              <div className={styles.toggleInfo}>
                <div className={styles.toggleLabel}>Cookies estrictamente necesarias</div>
                <div className={styles.toggleDesc}>
                  Funcionamiento básico del sitio: navegación, seguridad y sesión. No pueden
                  desactivarse.
                </div>
                <span className={styles.required}>Obligatorias</span>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" checked disabled readOnly />
                <span className={styles.slider} />
              </label>
            </div>
          </div>

          {/* Opcionales */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Puede elegir</div>
            {[
              {
                id: 'analytics',
                val: analytics,
                set: setAnalytics,
                label: 'Cookies analíticas',
                desc: 'Nos ayudan a entender cómo interactúan los visitantes con el sitio. Los datos son anónimos (Google Analytics, Vercel Analytics).',
              },
              {
                id: 'marketing',
                val: marketing,
                set: setMarketing,
                label: 'Marketing y remarketing',
                desc: 'Permiten mostrarle publicidad relevante en Google Ads y Meta basada en su navegación.',
              },
              {
                id: 'functional',
                val: functional,
                set: setFunctional,
                label: 'Cookies funcionales',
                desc: 'Recuerdan sus preferencias para mejorar su experiencia en visitas futuras.',
              },
              {
                id: 'commercial',
                val: commercial,
                set: setCommercial,
                label: 'Comunicaciones comerciales',
                desc: 'Si agenda una sesión, autoriza recibir información sobre nuestros servicios. Puede darse de baja en cualquier mensaje.',
              },
            ].map((item) => (
              <div className={styles.toggleRow} key={item.id}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>{item.label}</div>
                  <div className={styles.toggleDesc}>{item.desc}</div>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={item.val}
                    onChange={(e) => item.set(e.target.checked)}
                  />
                  <span className={styles.slider} />
                </label>
              </div>
            ))}
          </div>

          {/* Derechos */}
          <div className={styles.rightsBox}>
            <div className={styles.rightsTitle}>Sus derechos como titular — Ley 21.719</div>
            <div className={styles.rightsGrid}>
              {[
                'Acceso a sus datos',
                'Rectificación',
                'Eliminación (derecho al olvido)',
                'Oposición al tratamiento',
                'Portabilidad de datos',
                'Revocación del consentimiento',
              ].map((r) => (
                <div className={styles.rightItem} key={r}>
                  <span className={styles.check}>✓</span> {r}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.foot}>
          <div className={styles.footBtns}>
            <button className={styles.btnReject} onClick={() => save('reject')}>
              Rechazar
            </button>
            <button className={styles.btnNecessary} onClick={() => save('necessary')}>
              Solo necesarias
            </button>
            <button className={styles.btnAccept} onClick={() => save('accept')}>
              Aceptar selección →
            </button>
          </div>
          <p className={styles.legalNote}>
            Responsable del tratamiento: Afan Marketing Digital SpA, Santiago, Chile.
            Contacto DPO:{' '}
            <a href="mailto:datos@afanmarketing.com">datos@afanmarketing.com</a>
            {' · '}
            <a href="/privacidad">Política de Privacidad</a>
            {' · '}
            <a href="/cookies">Política de Cookies</a>
            {' · '}
            <a href="/terminos">Términos de uso</a>
          </p>
        </div>
      </div>
    </div>
  );
}
