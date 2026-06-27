import ConsentModal from '@/components/ConsentModal';
import ImageTicker from '@/components/ImageTicker';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <ConsentModal />

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoSq}>
            <svg viewBox="0 0 10 10" width="11" height="11" fill="white">
              <path d="M1 9L5 1L9 9L5 6Z" />
            </svg>
          </div>
          <div>
            <div className={styles.logoName}>Afan Marketing</div>
            <div className={styles.logoSub}>Marketing Digital</div>
          </div>
        </div>
        <nav className={styles.navLinks}>
          <a href="#soluciones">Sistema de ventas</a>
          <a href="#casos">Casos de éxito</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto" className={styles.navCta}>Agendar sesión</a>
        </nav>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>
          <span className={styles.eyebrowDot} />
          Agencia de Marketing · Google Partner · Chile · Desde 2019
        </div>
        <h1 className={styles.heroH1}>
          Mejora los resultados<br />
          de tu negocio.<br />
          <em>Aumenta tus ventas.</em>
        </h1>
        <div className={styles.heroBottom}>
          <p className={styles.heroSub}>
            Optimizamos tus procesos comerciales y de marketing para atraer prospectos
            calificados, automatizar flujos y cerrar más negocios con experiencia corporativa real.
          </p>
          <div className={styles.heroCtas}>
            <a href="#casos" className="btn-ghost-dark">
              Ver casos de éxito →
            </a>
            <a href="#contacto" className="btn-primary">
              Agendar sesión gratuita
            </a>
          </div>
        </div>
      </section>

      {/* ── STAT TICKER ── */}
      <div className={styles.statTicker}>
        {[
          { num: '+3.5K', label: 'Anuncios gestionados', sub: 'Google Ads · Meta Ads' },
          { num: '+250K', label: 'Prospectos generados', sub: 'Lead nurturing incluido' },
          { num: 'USD 1M', label: 'Inversión en medios', sub: 'Google Ads · Redes Sociales' },
          { num: '−60%', label: 'Reducción CPA promedio', sub: 'En clientes activos' },
        ].map((s, i) => (
          <div className={styles.statItem} key={i}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statSub}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* ── IMAGE TICKER ── */}
      <ImageTicker />

      {/* ── INDUSTRIAS ── */}
      <section className={styles.industrias} id="nosotros">
        <div className={styles.indInner}>
          <div>
            <div className={styles.eyebrowW}>Especialización</div>
            <h2 className={styles.shW}>
              Expertos en ventas<br />
              <strong>complejas y de alto<br />involucramiento</strong>
            </h2>
            <p className={styles.ssubW}>
              Sabemos cómo mejorar tus resultados porque venimos del mundo de los negocios.
              Desarrollamos nuestras carreras en cargos de alta responsabilidad en diferentes
              industrias y también como fundadores de empresas.
            </p>
          </div>
          <div>
            <p className={styles.ssubW} style={{ marginBottom: '1.5rem' }}>
              Trabajamos con empresas que necesitan atraer prospectos calificados y gestionar
              oportunidades a través de una fuerza de ventas:
            </p>
            <div className={styles.indTags}>
              {['Automotriz', 'Fintech', 'Inmobiliaria', 'Textil y moda', 'Agronegocios', 'Otras B2C y B2B'].map((t) => (
                <span className={styles.indTag} key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUCIONES ── */}
      <section className={styles.secWhite} id="soluciones">
        <div className={styles.si}>
          <div className={styles.twoCol}>
            <div>
              <div className={styles.eyebrowD}>Soluciones</div>
              <h2 className={styles.shD}>
                Nuestro sistema de<br /><strong>optimización comercial</strong>
              </h2>
            </div>
            <p className={styles.ssubD}>
              Si tu empresa necesita atraer prospectos calificados y gestionar oportunidades a
              través de una fuerza de ventas, nuestro sistema te permitirá cumplir tus metas
              comerciales y mejorar los resultados de tu negocio.
            </p>
          </div>
          <div className={styles.solList}>
            {[
              { n: '01', title: 'Google Ads y optimización web', desc: 'La gestión de más de 3.500 anuncios nos ha dado la experiencia y conocimiento para optimizar campañas digitales. Landing pages con foco total en conversión real y medible.', badge: 'SEM / Web' },
              { n: '02', title: 'Redes sociales y anuncios digitales', desc: 'Estrategia de contenido y pauta en Meta e Instagram orientada a captación de leads calificados para tu industria específica.', badge: 'Social Media' },
              { n: '03', title: 'CRM y automatización comercial', desc: 'Más de 250.000 prospectos generados con acciones de lead nurturing para automatizar y optimizar el cierre de ventas. Medición de indicadores en tiempo real.', badge: 'Automatización' },
              { n: '04', title: 'Prospección y ventas B2B', desc: 'Identificación de oportunidades de alto valor, eficiencia en flujos de ventas y mejora continua de la experiencia del usuario en cada punto del embudo comercial.', badge: 'B2B Sales' },
            ].map((s) => (
              <div className={styles.solRow} key={s.n}>
                <div className={styles.solN}>{s.n}</div>
                <div>
                  <div className={styles.solTitle}>{s.title}</div>
                  <div className={styles.solDesc}>{s.desc}</div>
                </div>
                <span className={styles.solBadge}>{s.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section className={styles.secPaper}>
        <div className={styles.metWrap}>
          <div className={styles.metLeft}>
            <div className={styles.eyebrowD}>Trayectoria</div>
            <h2 className={styles.shDSm}>
              Nuestra experiencia<br /><strong>nos diferencia</strong>
            </h2>
            <p className={styles.ssubD} style={{ marginTop: '0.75rem' }}>
              Desde el 2019 ayudamos a empresas a optimizar sus flujos comerciales y de marketing
              para convertir sus embudos de venta en generadores de prospectos. Automatizamos
              procesos comerciales para incrementar resultados y acelerar el crecimiento.
            </p>
            <a href="#contacto" className={`btn-primary ${styles.metBtn}`}>
              Conocer el sistema →
            </a>
          </div>
          <div className={styles.metRight}>
            {[
              { num: '+3.5K', label: 'Anuncios gestionados', desc: 'La gestión de más de 3.500 anuncios en Google y Meta nos da experiencia para optimizar campañas digitales', w: 70 },
              { num: '250K', label: 'Prospectos generados', desc: 'Más de 250.000 leads generados con acciones de nurturing para automatizar el cierre de ventas', w: 85 },
              { num: 'USD 1M', label: 'Inversión en medios', desc: 'Planificamos y administramos inversión en medios digitales como Google Ads y Redes Sociales por más de USD 1.000.000', w: 92 },
              { num: '114%', label: 'Aumento de conversión', desc: 'Promedio de mejora en tasa de conversión en clientes que implementaron el sistema completo', w: 57 },
            ].map((m) => (
              <div className={styles.metCell} key={m.label}>
                <div className={styles.metNum}>{m.num}</div>
                <div className={styles.metLabel}>{m.label}</div>
                <div className={styles.metDesc}>{m.desc}</div>
                <div className={styles.metBar}>
                  <div className={styles.metFill} style={{ width: `${m.w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS ── */}
      <section className={styles.secWhite} id="casos">
        <div className={styles.si}>
          <div className={styles.eyebrowD}>Casos de éxito</div>
          <h2 className={styles.shD}>
            Aceleramos el crecimiento<br /><strong>de nuestros clientes</strong>
          </h2>
        </div>
        <div className={styles.casesRow}>
          {[
            { result: '−60%', kpi: 'Reducción de CPA', q: 'Magdalena implementó herramientas de automatización, liberó tiempo de su equipo y mejoró la tasa de cierre de negocios en un 250%.', av: 'MM', name: 'Magdalena Madariaga', co: 'Jefa de Marketing · Servimaq' },
            { result: '+114%', kpi: 'Tasa de conversión', q: 'Soledad redujo el costo por conversión en un 55% gracias a que identificamos y priorizamos oportunidades de mejora en su flujo de ventas.', av: 'SD', name: 'Soledad Dell\'Oro', co: 'Gerente Comercial · Piamonte' },
            { result: '+87%', kpi: 'Tasa de conversión', q: 'David contó con un equipo especialista en branding, estrategia digital, CRM y producción para escalar su plataforma de inversión en activos alternativos.', av: 'DG', name: 'David Guzmán', co: 'CEO · Xcala' },
          ].map((c) => (
            <div className={styles.caseCard} key={c.av}>
              <div>
                <div className={styles.caseResult}>{c.result}</div>
                <div className={styles.caseKpi}>{c.kpi}</div>
              </div>
              <blockquote className={styles.caseQ}>{c.q}</blockquote>
              <div className={styles.caseWho}>
                <div className={styles.caseAv}>{c.av}</div>
                <div>
                  <div className={styles.caseName}>{c.name}</div>
                  <div className={styles.caseCo}>{c.co}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className={styles.secPaper}>
        <div className={styles.si}>
          <div className={styles.procHead}>
            <div>
              <div className={styles.eyebrowD}>Sistema</div>
              <h2 className={styles.shD}>Cómo<br /><strong>trabajamos</strong></h2>
            </div>
            <p className={styles.ssubD}>
              Automatizamos procesos comerciales para incrementar resultados, mejorar la experiencia
              de usuarios y aumentar la eficiencia en los flujos de ventas.
            </p>
          </div>
          <div className={styles.procList}>
            {[
              { n: '01', title: 'Diagnóstico comercial', desc: 'Analizamos tu embudo de ventas, identificamos cuellos de botella y oportunidades con datos reales de tu negocio e industria.' },
              { n: '02', title: 'Estrategia y captación', desc: 'Diseñamos campañas en Google y Meta para atraer prospectos calificados al menor costo. Creatividades y copy optimizados para tu vertical.' },
              { n: '03', title: 'Automatización y nurturing', desc: 'Implementamos CRM y flujos de lead nurturing para que ningún prospecto se pierda durante el proceso comercial.' },
              { n: '04', title: 'Medición y escalamiento', desc: 'Monitoreamos KPIs en tiempo real y optimizamos continuamente para escalar los resultados y alcanzar tus metas comerciales.' },
            ].map((p) => (
              <div className={styles.procRow} key={p.n}>
                <div className={styles.procN}>{p.n}</div>
                <div className={styles.procTitle}>{p.title}</div>
                <div className={styles.procDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE PARTNER ── */}
      <div className={styles.gpBand}>
        <div>
          <h3 className={styles.gpTitle}>Somos Google Partner</h3>
          <p className={styles.gpDesc}>
            Nuestra trayectoria y resultados nos han hecho merecedores de esta certificación oficial
            de Google. Hemos mantenido un nivel de optimización que indica rendimientos
            sobresalientes en las cuentas de nuestros clientes y la capacidad de identificar nuevas
            oportunidades de crecimiento de manera continua.
          </p>
        </div>
        <div className={styles.gpBadge}>
          <div className={styles.gpLogo}>
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </div>
          <div>
            <div className={styles.gpCert}>Partner Certificado</div>
            <div className={styles.gpTxt}>Rendimiento sobresaliente<br />en cuentas de clientes</div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className={styles.ctaSec} id="contacto">
        <div className={styles.ctaLine} />
        <h2 className={styles.ctaH}>
          Queremos <em>acelerar</em><br />el crecimiento de<br />tu negocio.
        </h2>
        <p className={styles.ctaSub}>Agenda una sesión de diagnóstico sin costo. Sin compromisos.</p>
        <a href="mailto:contacto@afanmarketing.com" className="btn-primary" style={{ fontSize: '0.88rem', padding: '0.9rem 2.25rem' }}>
          Agendar sesión gratuita →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footTop}>
          <div className={styles.footCol}>
            <h4>Protección de datos · Ley 21.719</h4>
            <p>
              Afan Marketing Digital SpA es responsable del tratamiento de sus datos personales.
              Los datos recopilados se usan exclusivamente para responder consultas, enviar
              información con su consentimiento y mejorar nuestros servicios. No compartimos sus
              datos con terceros sin autorización expresa.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              DPO: <a href="mailto:datos@afanmarketing.com">datos@afanmarketing.com</a>
            </p>
          </div>
          <div className={styles.footCol}>
            <h4>Sus derechos como titular</h4>
            <ul>
              {['Acceso a sus datos personales', 'Rectificación de datos inexactos', 'Eliminación (derecho al olvido)', 'Oposición al tratamiento', 'Portabilidad de datos', 'Revocación del consentimiento'].map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p style={{ marginTop: '0.6rem' }}>
              Ejercer derechos: <a href="mailto:datos@afanmarketing.com">datos@afanmarketing.com</a>
            </p>
          </div>
          <div className={styles.footCol}>
            <h4>Navegación</h4>
            <ul>
              {[['/', 'Home'], ['#soluciones', 'Sistema de ventas'], ['#casos', 'Casos de éxito'], ['#nosotros', 'Nosotros'], ['#contacto', 'Agendar sesión']].map(([href, label]) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
            <ul style={{ marginTop: '0.5rem' }}>
              {[['/privacidad', 'Política de privacidad'], ['/cookies', 'Política de cookies'], ['/terminos', 'Términos y condiciones'], ['/datos', 'Política de tratamiento de datos']].map(([href, label]) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footBottom}>
          <div className={styles.footLogo}>Afan Marketing Digital</div>
          <div className={styles.footCopy}>
            © 2026 Afan Marketing Digital SpA · Santiago, Chile · Todos los derechos reservados
          </div>
          <div className={styles.footSocial}>
            <a href="https://www.linkedin.com/company/afanmarketing" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://www.instagram.com/afanmarketing" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
            <a href="https://www.facebook.com/afanmarketingdigital" target="_blank" rel="noopener noreferrer" aria-label="Facebook">fb</a>
          </div>
        </div>
      </footer>
    </>
  );
}
