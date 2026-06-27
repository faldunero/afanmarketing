# Afan Marketing Digital — Sitio Web

Sitio web corporativo de Afan Marketing Digital. Construido con **Next.js 14**, **TypeScript** y **CSS Modules**. Listo para deploy en **Vercel**.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** CSS Modules + CSS Variables
- **Fuentes:** Plus Jakarta Sans + Inter (Google Fonts)
- **Deploy:** Vercel
- **Base de datos (próxima fase):** Supabase

## Inicio rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/afan-marketing.git
cd afan-marketing

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
# → http://localhost:3000

# 4. Build de producción
npm run build
npm start
```

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Root layout con metadata SEO
│   ├── page.tsx            # Página principal (Home)
│   └── page.module.css     # Estilos de la página
├── components/
│   ├── ConsentModal.tsx    # Modal consentimiento Ley 21.719
│   ├── ConsentModal.module.css
│   ├── ImageTicker.tsx     # Ticker infinito estilo Monks
│   └── ImageTicker.module.css
└── styles/
    └── globals.css         # Variables CSS + estilos globales
```

## Deploy en Vercel

### Opción 1 — Vercel CLI (recomendado)

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Opción 2 — Desde GitHub

1. Subir este repositorio a GitHub
2. Ir a [vercel.com](https://vercel.com) → **Add New Project**
3. Importar el repositorio
4. Vercel detecta Next.js automáticamente
5. Click **Deploy** → listo en ~2 minutos

## Integrar a Git

```bash
git init
git add .
git commit -m "feat: sitio web Afan Marketing con diseño navy estilo Monks"
git remote add origin https://github.com/TU_USUARIO/afan-marketing.git
git branch -M main
git push -u origin main
```

## Cumplimiento Ley 21.719 (Protección de Datos Personales - Chile)

El sitio incluye:
- **Modal de consentimiento** bloqueante antes de navegación
- **Toggles granulares** por tipo de cookie (analíticas, marketing, funcionales, comerciales)
- **Registro de consentimiento** en `localStorage` con timestamp
- **Listado de derechos** del titular (acceso, rectificación, eliminación, oposición, portabilidad, revocación)
- **Datos del responsable** del tratamiento y contacto DPO
- **Links** a Política de Privacidad, Cookies y Términos (crear páginas `/privacidad`, `/cookies`, `/terminos`)
- **Opción de revocar** consentimiento desde el footer

## Próxima fase — Supabase

Para formulario de contacto y registro de leads:

```bash
npm install @supabase/supabase-js
```

Agregar a `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
```

## Variables de entorno

Crear `.env.local` en la raíz (no se sube a Git):

```bash
# Supabase (próxima fase)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Analytics (próxima fase)
NEXT_PUBLIC_GA_ID=
```

---

**Afan Marketing Digital SpA** · Santiago, Chile · [afanmarketing.com](https://afanmarketing.com)
