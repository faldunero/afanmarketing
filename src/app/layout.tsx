import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Afan Marketing Digital — Agencia de Marketing en Chile',
  description:
    'Optimizamos tus procesos comerciales y de marketing para atraer prospectos calificados, automatizar flujos y aumentar las ventas. Google Partner certificado. Desde 2019.',
  keywords:
    'agencia marketing digital chile, google ads chile, marketing automotriz, crm chile, leads calificados, marketing inmobiliaria chile',
  authors: [{ name: 'Afan Marketing Digital SpA' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Afan Marketing Digital — Aumenta tus ventas',
    description:
      'Sistema de optimización de procesos comerciales y marketing para empresas con ventas complejas. Google Partner certificado.',
    url: 'https://afanmarketing.com',
    siteName: 'Afan Marketing Digital',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afan Marketing Digital',
    description: 'Optimizamos procesos comerciales y marketing para aumentar tus ventas.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
