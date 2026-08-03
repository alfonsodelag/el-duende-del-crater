# El Duende del Cráter

Sitio oficial de **El Duende del Cráter**, una marca panameña de cerveza artesanal hecha en El Valle de Antón, Panamá.

La página presenta la marca, el universo del Duende, fotos reales, cervezas destacadas en modo demo y canales de contacto para pedidos personales o consultas comerciales.

## Sitio en Producción

- Vercel: https://alfonsodelag-el-duende-del-crater.vercel.app
- GitHub: https://github.com/alfonsodelag/el-duende-del-crater

## Estado del Contenido

El sitio ya incluye:

- Logo oficial en header, hero y footer.
- Fotografías reales en hero, sección del brewer y comunidad.
- WhatsApp real: `6337-0513`.
- Estructura para catálogo de cervezas, lote destacado, puntos de venta, eventos y oportunidades B2B.

Información pendiente antes de considerar el contenido final:

- Instagram oficial.
- Email público, si aplica.
- Catálogo real de cervezas: nombres, estilos, ABV, IBU, notas, formatos, disponibilidad, lotes e imágenes de etiqueta/producto.
- Datos del brewer: nombre, biografía breve, filosofía de elaboración y redes.
- Historia oficial de la marca y la leyenda del Duende.
- Puntos de venta confirmados.
- Calendario de ferias, eventos o colaboraciones.
- Detalles comerciales para negocios: formatos, mínimos, zona de entrega y proceso de contacto.

## Stack

- Astro
- TypeScript
- Vue islands donde el template original lo requiere
- Tailwind CSS / CSS moderno
- Vercel adapter
- Storyblok integrado en el template base, aunque la home actual usa datos locales en `src/data`

## Estructura Principal

```text
src/
  components/layout/      Header y footer del sitio del Duende
  components/sections/    Secciones de la home
  components/ui/          Componentes pequeños reutilizables
  data/                   Datos locales de marca y cervezas demo
  layouts/                Layout del sitio del Duende
  pages/index.astro       Home principal
  styles/duende.css       Estilos de marca
public/images/            Logo y fotos reales
```

## Comandos

Instalar dependencias:

```bash
npm install
```

Levantar desarrollo local:

```bash
npm run dev
```

Validar y construir producción:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

## Deploy

El proyecto está desplegado en Vercel como:

```text
alfonsodelag-el-duende-del-crater
```

Para desplegar manualmente desde esta carpeta:

```bash
vercel deploy --prebuilt --prod --yes --project alfonsodelag-el-duende-del-crater
```

Si se hacen cambios de código, primero corre:

```bash
npm run build
```

## Notas de Desarrollo

- No inventar datos de producto, precios, disponibilidad, distribuidores o testimonios.
- Cualquier contenido provisional debe quedar marcado como `TODO` o `DEMO`.
- El sitio representa una marca de cerveza artesanal, no un restaurante, bar o taproom.
- Mantener el logo como activo oficial; no redibujarlo ni recolorearlo.
