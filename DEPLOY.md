# Opciones de Alojamiento para MkDocs

## 🚀 Netlify (Recomendado)

Netlify es muy fácil de usar y funciona excelente con MkDocs.

### Pasos:

1. **Crea una cuenta en [Netlify](https://www.netlify.com/)** (gratis)

2. **Conecta tu repositorio:**
   - Ve a tu dashboard de Netlify
   - Click en "Add new site" > "Import an existing project"
   - Conecta con GitHub y selecciona el repositorio `MAR ![Logo MAR](assets/images/MAR_logo_full.png)`

3. **Configuración automática:**
   - Netlify detectará automáticamente el archivo `netlify.toml`
   - Build command: `pip install -r requirements.txt && mkdocs build`
   - Publish directory: `site`

4. **Deploy:**
   - Netlify desplegará automáticamente en cada push a `main`
   - Tu sitio estará disponible en: `https://MAR ![Logo MAR](assets/images/MAR_logo_full.png).netlify.app/`
   - Puedes configurar un dominio personalizado si quieres

### Ventajas:
- ✅ Funciona perfectamente con MkDocs
- ✅ Deploy automático en cada push
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Muy fácil de configurar

---

## ⚡ Vercel

Vercel también es una excelente opción.

### Pasos:

1. **Crea una cuenta en [Vercel](https://vercel.com/)** (gratis)

2. **Conecta tu repositorio:**
   - Ve a tu dashboard de Vercel
   - Click en "Add New Project"
   - Importa el repositorio `MAR ![Logo MAR](assets/images/MAR_logo_full.png)` desde GitHub

3. **Configuración:**
   - Framework Preset: Other
   - Build Command: `pip install -r requirements.txt && mkdocs build`
   - Output Directory: `site`
   - Install Command: `pip install -r requirements.txt`

4. **Deploy:**
   - Vercel desplegará automáticamente
   - Tu sitio estará en: `https://tu-sitio.vercel.app`

### Ventajas:
- ✅ Muy rápido
- ✅ Deploy automático
- ✅ HTTPS automático
- ✅ CDN global

---

## 📦 Cloudflare Pages

Otra opción gratuita y confiable.

### Pasos:

1. **Crea una cuenta en [Cloudflare](https://pages.cloudflare.com/)**

2. **Conecta tu repositorio:**
   - Ve a Pages > Create a project
   - Conecta con GitHub y selecciona `MAR ![Logo MAR](assets/images/MAR_logo_full.png)`

3. **Configuración:**
   - Build command: `pip install -r requirements.txt && mkdocs build`
   - Build output directory: `site`
   - Python version: `3.11`

4. **Deploy:**
   - Cloudflare desplegará automáticamente
   - Tu sitio estará en: `https://tu-sitio.pages.dev`

---

## 🔧 Render

Otra alternativa gratuita.

### Pasos:

1. **Crea una cuenta en [Render](https://render.com/)**

2. **Crea un Static Site:**
   - New > Static Site
   - Conecta con GitHub y selecciona `MAR ![Logo MAR](assets/images/MAR_logo_full.png)`

3. **Configuración:**
   - Build Command: `pip install -r requirements.txt && mkdocs build`
   - Publish Directory: `site`

---

## 💡 Recomendación

**Netlify** es la opción más recomendada porque:
- Tiene el mejor soporte para MkDocs
- Es muy fácil de configurar
- Tiene un excelente rendimiento
- El archivo `netlify.toml` ya está configurado en tu proyecto

Solo necesitas:
1. Crear cuenta en Netlify
2. Conectar el repositorio
3. ¡Listo! Se desplegará automáticamente

**Sitio activo:** [https://MAR ![Logo MAR](assets/images/MAR_logo_full.png).netlify.app/](https://MAR ![Logo MAR](assets/images/MAR_logo_full.png).netlify.app/)

---

## 🔄 Migrar desde GitHub Pages

Si ya tienes GitHub Pages configurado, puedes:
1. Mantener ambos (GitHub Pages + Netlify)
2. O deshabilitar GitHub Pages y usar solo Netlify

No hay conflicto, puedes tener ambos activos si quieres.
