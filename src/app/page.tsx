import ConsentModal from '@/components/ConsentModal';
import ImageTicker from '@/components/ImageTicker';
import styles from './page.module.css';

// URLs de video — se reemplazan con Vercel Blob tras ejecutar scripts/upload-videos.mjs
const VIDEO_HERO     = '/videos/hero.mp4';
const VIDEO_NOSOTROS = '/videos/nosotros.mp4';
const VIDEO_CTA      = '/videos/cta.mp4';

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
        <nav className={styles.navLinks} id="navLinks">
          <a href="#soluciones" onClick={() => (document.getElementById('navLinks') as HTMLElement)?.classList.remove(styles.navOpen)}>Sistema de ventas</a>
          <a href="#casos" onClick={() => (document.getElementById('navLinks') as HTMLElement)?.classList.remove(styles.navOpen)}>Casos de éxito</a>
          <a href="#nosotros" onClick={() => (document.getElementById('navLinks') as HTMLElement)?.classList.remove(styles.navOpen)}>Nosotros</a>
          <a href="#contacto" className={styles.navCta} onClick={() => (document.getElementById('navLinks') as HTMLElement)?.classList.remove(styles.navOpen)}>Agendar sesión</a>
        </nav>
        <button
          className={styles.hamburger}
          aria-label="Menú"
          onClick={() => document.getElementById('navLinks')?.classList.toggle(styles.navOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO — ciudad de noche aérea, sin personas ── */}
      <section className={styles.hero}>
        <div className={styles.heroFallback} />
        <video
          className={styles.heroVideo}
          autoPlay muted loop playsInline
          crossOrigin="anonymous"
          
        >
          <source src={VIDEO_HERO} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroOverlayLeft} />
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <span className={styles.heroDot} />
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
              <a href="#casos" className="btn-ghost-dark">Ver casos de éxito →</a>
              <a href="#contacto" className="btn-primary">Agendar sesión gratuita</a>
            </div>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          Scroll
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <div className={styles.statStrip}>
        {[
          { num: '+3.5K', label: 'Anuncios gestionados', sub: 'Google Ads · Meta Ads' },
          { num: '+250K', label: 'Prospectos generados', sub: 'Lead nurturing incluido' },
          { num: 'USD 1M', label: 'Inversión en medios', sub: 'Google Ads · Redes Sociales' },
          { num: '−60%', label: 'Reducción CPA promedio', sub: 'En clientes activos' },
        ].map((s) => (
          <div className={styles.statItem} key={s.label}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statSub}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* ── IMAGE TICKER ── */}
      <ImageTicker />

      {/* ── INDUSTRIAS — foto abstracta tecnología, sin personas ── */}
      <section className={styles.industrias} id="nosotros">
        <div className={styles.indGrid}>
          <div>
            <div className={styles.eyebrowW}>Especialización</div>
            <h2 className={styles.shW}>
              Expertos en ventas<br />
              <strong>complejas y de alto<br />involucramiento</strong>
            </h2>
            <p className={styles.subW}>
              Sabemos cómo mejorar tus resultados porque venimos del mundo de los negocios.
              Desarrollamos nuestras carreras en cargos de alta responsabilidad en diferentes
              industrias y también como fundadores de empresas.
            </p>
            <div className={styles.indTags}>
              {['Automotriz', 'Fintech', 'Inmobiliaria', 'Textil y moda', 'Agronegocios', 'Otras B2C y B2B'].map((t) => (
                <span className={styles.indTag} key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className={styles.indImgWrap}>
            {/* Dashboard analytics sin personas */}
            <img
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Dashboard de marketing digital y analítica"
              className={styles.indImg}
              loading="lazy"
            />
            <div className={styles.indStat}>
              <div className={styles.indStatNum}>+5 años</div>
              <div className={styles.indStatLbl}>Experiencia corporativa real</div>
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
            <p className={styles.subD}>
              Si tu empresa necesita atraer prospectos calificados y gestionar oportunidades a
              través de una fuerza de ventas, nuestro sistema te permitirá cumplir tus metas
              comerciales y mejorar los resultados de tu negocio.
            </p>
          </div>
          <div className={styles.solList}>
            {[
              { n: '01', title: 'Google Ads y optimización web', desc: 'La gestión de más de 3.500 anuncios nos ha dado la experiencia y el conocimiento para optimizar campañas digitales. Landing pages con foco total en conversión real y medible.', badge: 'SEM / Web' },
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

      {/* ── CASOS — fotos sin personas: autos, edificios, pantallas ── */}
      <section className={styles.secPaper} id="casos">
        <div className={styles.si} style={{ paddingBottom: '2rem' }}>
          <div className={styles.eyebrowD}>Casos de éxito</div>
          <h2 className={styles.shD}>
            Aceleramos el crecimiento<br /><strong>de nuestros clientes</strong>
          </h2>
        </div>
        <div className={styles.casesGrid}>
          {[
            {
              result: '−60%', kpi: 'Reducción de CPA',
              q: 'Magdalena implementó automatización, liberó tiempo de su equipo y mejoró el cierre de negocios en un 250%.',
              av: 'MM', name: 'Magdalena Madariaga', co: 'Jefa de Marketing · Servimaq',
              /* sala de autos en showroom, sin personas */
              img: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
              alt: 'Showroom automotriz',
            },
            {
              result: '+114%', kpi: 'Tasa de conversión',
              q: 'Soledad redujo el costo por conversión en un 55% identificando oportunidades clave en el flujo de ventas.',
              av: 'SD', name: "Soledad Dell'Oro", co: 'Gerente Comercial · Piamonte',
              /* edificio moderno / inmueble */
              img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
              alt: 'Edificio corporativo moderno',
            },
            {
              result: '+87%', kpi: 'Tasa de conversión',
              q: 'David contó con branding, estrategia digital, CRM y producción para escalar su plataforma líder en activos alternativos.',
              av: 'DG', name: 'David Guzmán', co: 'CEO · Xcala',
              /* pantalla con gráfico de crecimiento / fintech */
              img: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
              alt: 'Gráfico de crecimiento financiero',
            },
          ].map((c) => (
            <div className={styles.caseCard} key={c.av}>
              <img src={c.img} alt={c.alt} className={styles.caseImg} loading="lazy" />
              <div className={styles.caseCardOverlay} />
              <div className={styles.caseBody}>
                <div className={styles.caseResult}>{c.result}</div>
                <div className={styles.caseKpi}>{c.kpi}</div>
                <blockquote className={styles.caseQ}>{c.q}</blockquote>
                <div className={styles.caseWho}>
                  <div className={styles.caseAv}>{c.av}</div>
                  <div>
                    <div className={styles.caseName}>{c.name}</div>
                    <div className={styles.caseCo}>{c.co}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section className={styles.secWhite}>
        <div className={styles.metWrap}>
          <div className={styles.metLeft}>
            <div className={styles.eyebrowD}>Trayectoria</div>
            <h2 className={styles.shDSm}>
              Nuestra experiencia<br /><strong>nos diferencia</strong>
            </h2>
            <p className={styles.subD} style={{ marginTop: '0.75rem' }}>
              Desde el 2019 ayudamos a empresas a optimizar sus flujos comerciales y de marketing
              para convertir sus embudos de venta en generadores de prospectos y captadores de
              nuevos clientes. Automatizamos procesos para incrementar resultados y acelerar el crecimiento.
            </p>
            <a href="#contacto" className={`btn-primary ${styles.metBtn}`}>
              Conocer el sistema →
            </a>
          </div>
          <div className={styles.metRight}>
            {[
              { num: '+3.5K', label: 'Anuncios gestionados', desc: 'La gestión de más de 3.500 anuncios en Google y Meta nos da experiencia para optimizar campañas digitales', w: 70 },
              { num: '250K', label: 'Prospectos generados', desc: 'Más de 250.000 leads con acciones de nurturing para automatizar el cierre de ventas', w: 85 },
              { num: 'USD 1M', label: 'Inversión en medios', desc: 'Planificamos y administramos inversión en Google Ads y Redes Sociales por más de USD 1.000.000', w: 92 },
              { num: '114%', label: 'Aumento de conversión', desc: 'Promedio de mejora en tasa de conversión con el sistema completo de optimización comercial', w: 57 },
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

      {/* ── PROCESO ── */}
      <section className={styles.secPaper}>
        <div className={styles.si}>
          <div className={styles.procHead}>
            <div>
              <div className={styles.eyebrowD}>Sistema</div>
              <h2 className={styles.shD}>Cómo<br /><strong>trabajamos</strong></h2>
            </div>
            <p className={styles.subD}>
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

      {/* ── NOSOTROS — ciudad de noche con carretera ── */}
      <section className={styles.teamSec}>
        <video
          className={styles.teamVideo}
          autoPlay muted loop playsInline
          crossOrigin="anonymous"
        >
          <source src={VIDEO_NOSOTROS} type="video/mp4" />
        </video>
        {/* Fallback imagen si el video no carga */}
        <div className={styles.teamImgFallback} />
        <div className={styles.teamOverlay} />
        <div className={styles.teamContent}>
          <div className={styles.teamInner}>
            <div className={styles.teamEyebrow}>Nosotros</div>
            <h2 className={styles.teamH}>
              Experiencia<br />corporativa <em>real</em>
            </h2>
            <p className={styles.teamP}>
              Somos un equipo de profesionales expertos en el desarrollo y gestión de negocios.
              Lideramos cada proyecto con foco en la eficiencia y la rentabilidad. Entendemos los
              desafíos que enfrenta una empresa para cumplir sus metas comerciales.
            </p>
            <a href="#contacto" className="btn-primary">Agendar sesión gratuita →</a>
          </div>
        </div>
      </section>

      {/* ── GOOGLE PARTNER ── */}
      <div className={styles.gpBand}>
        <div className={styles.gpLeft}>
          <h3 className={styles.gpTitle}>Somos Google Partner</h3>
          <p className={styles.gpDesc}>
            Nuestra trayectoria y resultados nos han hecho merecedores de esta certificación oficial
            de Google. Hemos mantenido un nivel de optimización que indica rendimientos sobresalientes
            en las cuentas de nuestros clientes y la capacidad de identificar nuevas oportunidades de
            crecimiento de manera continua.
          </p>
        </div>
        {/* Google Partner Badge — SVG fiel al logo oficial */}
        <div className={styles.gpBadge}>
          <div className={styles.gpBadgeInner}>
            {/* G multicolor oficial */}
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Segmento rojo — arriba derecha */}
              <path d="M36 4C52.569 4 66 15.849 66 30.5H36V36H66C64.196 51.918 51.456 64 36 64C19.431 64 6 51.569 6 36C6 20.431 19.431 4 36 4Z" fill="#EA4335"/>
              {/* Segmento amarillo — abajo derecha */}
              <path d="M66 36H36V42H63.5C62.1 50.2 57.1 57.1 50.1 61.4L63.9 70.2C72.1 62.6 77 51.9 77 39.8C77 38.5 76.9 37.3 76.8 36H66Z" fill="#FBBC05"/>
              {/* Círculo base */}
              <circle cx="36" cy="36" r="32" fill="none"/>
              {/* Reconstrucción simplificada del G de Google */}
              <path d="M68 36C68 53.673 53.673 68 36 68C18.327 68 4 53.673 4 36C4 18.327 18.327 4 36 4C44.284 4 51.82 7.261 57.456 12.544L49.373 20.627C46.134 17.563 41.776 15.636 36 15.636C24.545 15.636 15.273 24.909 15.273 36.364C15.273 47.818 24.545 57.091 36 57.091C45.818 57.091 54 50.545 55.636 41.818H36V30.182H67.636C67.876 32.091 68 34.036 68 36Z" fill="white" fillOpacity="0"/>
            </svg>
            {/* G oficial usando path correcto */}
            <svg width="64" height="64" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            <div className={styles.gpBadgeText}>
              <span className={styles.gpBadgeLabel}>Google Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA — video city lights bokeh, sin personas ── */}
      <section className={styles.ctaSec} id="contacto">
        <video className={styles.ctaVideo} autoPlay muted loop playsInline>
          {/* Ciudad de noche con autos y carretera — el que le gustó */}
          <source src={VIDEO_NOSOTROS} type="video/mp4" />
        </video>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaGlow} />
        <div className={styles.ctaContent}>
          <div className={styles.ctaLine} />
          <h2 className={styles.ctaH}>
            Queremos <em>acelerar</em><br />el crecimiento de<br />tu negocio.
          </h2>
          <p className={styles.ctaSub}>Agenda una sesión de diagnóstico sin costo. Sin compromisos.</p>
          <a href="mailto:contacto@afanmarketing.com" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.9rem 2.25rem' }}>
            Agendar sesión gratuita →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footTop}>
          <div className={styles.footCol}>
            <h4>Protección de datos · Ley 21.719</h4>
            <p>
              Afan Marketing Digital SpA es responsable del tratamiento de sus datos personales.
              Los datos recopilados se usan exclusivamente para responder consultas, enviar
              información con su consentimiento y mejorar nuestros servicios.
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
