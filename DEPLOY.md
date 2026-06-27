# Guía de despliegue — Afan Marketing Digital

## Flujo de trabajo

```
dev  ──→  Preview URL de Vercel   (para revisar cambios)
main ──→  afanmarketing.com        (producción)
```

Cada push a `dev` genera una URL preview automática en Vercel.
Solo los merges a `main` actualizan el sitio en vivo.

---

## Paso 1 — Crear repositorio en GitHub

1. Ir a [github.com/new](https://github.com/new)
2. Nombre: `afan-marketing`
3. Visibilidad: **Private**
4. **NO** marcar "Add README" (ya viene en el ZIP)
5. Click **Create repository**
6. GitHub te mostrará la URL del repo: `https://github.com/TU_USUARIO/afan-marketing.git`

---

## Paso 2 — Subir el código a GitHub

Descomprimir el ZIP, abrir terminal dentro de la carpeta y ejecutar:

```bash
# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/afan-marketing.git

# Subir rama main (producción)
git push -u origin main

# Subir rama dev (desarrollo)
git push -u origin dev
```

Verificar en GitHub que aparezcan las dos ramas: **main** y **dev**.

---

## Paso 3 — Conectar con Vercel

1. Ir a [vercel.com](https://vercel.com) → **Add New Project**
2. Click **Import Git Repository**
3. Conectar tu cuenta de GitHub si no lo has hecho
4. Seleccionar el repositorio `afan-marketing`
5. Vercel detecta Next.js automáticamente — no cambiar nada
6. Click **Deploy**

Vercel despliega `main` como producción automáticamente.

---

## Paso 4 — Configurar ramas en Vercel

Una vez importado el proyecto:

1. Ir a tu proyecto en Vercel → **Settings** → **Git**
2. En **Production Branch** confirmar que dice `main`
3. En **Preview Branches** verificar que `dev` aparece en la lista

A partir de aquí:
- Push a `dev` → URL preview tipo `afan-marketing-git-dev-tuusuario.vercel.app`
- Push a `main` → sitio en producción

---

## Paso 5 — Agregar dominio (afanmarketing.com)

1. Vercel → tu proyecto → **Settings** → **Domains**
2. Click **Add Domain** → escribir `afanmarketing.com`
3. Vercel te da dos opciones de DNS:
   - **Recomendado:** Cambiar nameservers a los de Vercel
   - **Alternativo:** Agregar registro A y CNAME en tu proveedor DNS actual
4. Seguir las instrucciones en pantalla
5. SSL se configura automáticamente (gratis)

---

## Flujo diario de trabajo

### Hacer un cambio

```bash
# Siempre trabajar en dev
git checkout dev

# Editar archivos...

# Guardar y subir
git add .
git commit -m "feat: descripción del cambio"
git push origin dev
# → Vercel genera preview automáticamente en ~1 min
```

### Pasar a producción

```bash
# Revisar el preview y si está OK, merge a main
git checkout main
git merge dev
git push origin main
# → Vercel despliega en producción automáticamente
```

---

## Variables de entorno en Vercel

Para agregar variables (Analytics, Supabase, etc.):

1. Vercel → tu proyecto → **Settings** → **Environment Variables**
2. Agregar cada variable con su valor
3. Seleccionar en qué entornos aplica:
   - `Production` → rama main
   - `Preview` → rama dev
   - `Development` → local (no aplica en este caso)

Variables que necesitarás en la próxima fase:
```
NEXT_PUBLIC_SUPABASE_URL      → en Production y Preview
NEXT_PUBLIC_SUPABASE_ANON_KEY → en Production y Preview
NEXT_PUBLIC_GA_ID             → solo en Production
```

---

## Estructura de archivos

```
afan-marketing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Metadata SEO + fuentes
│   │   ├── page.tsx            # Página principal
│   │   └── page.module.css     # Estilos de la página
│   ├── components/
│   │   ├── ConsentModal.tsx    # Modal Ley 21.719
│   │   └── ImageTicker.tsx     # Ticker estilo Monks
│   └── styles/
│       └── globals.css         # Variables CSS + globales
├── .env.example                # Plantilla de variables
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── vercel.json                 # Config de ramas Vercel
```
