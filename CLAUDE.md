Sí. Aquí está el contenido completo del archivo:

````markdown
# El Duende del Cráter

## Misión del proyecto

Construir el sitio oficial de **El Duende del Cráter**, una marca independiente de cerveza artesanal hecha en El Valle, Panamá.

Es una **web de marca y catálogo de producto**. No es restaurante, bar, taproom ni SaaS.

Prioridades:

1. Presentar las cervezas como productos con personalidad.
2. Convertir al duende, el cráter y El Valle en un universo memorable.
3. Facilitar pedidos y consultas por WhatsApp e Instagram.
4. Mostrar puntos de venta, eventos, lotes limitados y colaboraciones.
5. Generar oportunidades B2B con bares, restaurantes, hoteles, tiendas y distribuidores.

## Fuente de verdad

- Antes de editar, inspecciona `package.json`, `astro.config.*`, `src/`, estilos y componentes existentes.
- El código y los datos reales del repositorio prevalecen sobre este documento.
- No migres framework, package manager, CMS o librería de estilos sin solicitud explícita.
- No inventes cervezas, ABV, IBU, precios, stock, distribuidores, testimonios ni puntos de venta.
- Todo contenido ficticio de desarrollo debe marcarse como `TODO` o `DEMO`.

## Stack y arquitectura

- Astro como framework principal.
- TypeScript estricto.
- Tailwind CSS si ya está configurado; si no, CSS moderno con variables y capas claras.
- Componentes `.astro` por defecto. Añade islas solo cuando una interacción lo justifique.
- Prefiere HTML renderizado y JavaScript mínimo en cliente.
- Usa Astro Content Collections para cervezas y artículos, salvo que ya exista un CMS.
- Sanity es el CMS preferido, pero no lo añadas sin aprobación.
- Usa `astro:assets` para imágenes optimizadas.
- Despliegue previsto: Vercel.
- Mantén componentes pequeños; extrae datos repetidos; evita valores de marca dispersos.

Estructura sugerida para proyectos nuevos:

```text
src/
  components/{layout,sections,ui}/
  content/{beers,blog}/
  data/
  layouts/
  pages/
  styles/
public/images/{brand,beers}/
```

## Modelo de cerveza

Usa solo campos respaldados por datos reales:

```ts
interface Beer {
  name: string;
  slug: string;
  style: string;
  shortDescription: string;
  story?: string;
  abv?: number;
  ibu?: number;
  tastingNotes?: string[];
  aromaNotes?: string[];
  pairings?: string[];
  formats?: string[];
  availability?: string;
  batch?: string;
  limitedEdition?: boolean;
  featured?: boolean;
  heroImage: string;
  labelImage?: string;
  accentColor?: string;
  orderUrl?: string;
}
```

Los campos desconocidos se omiten; no se rellenan con datos plausibles.

## Arquitectura de información

Navegación recomendada:

- Inicio
- Cervezas
- La leyenda
- El brewer
- Dónde conseguirlas
- Para negocios
- Bitácora
- Contacto

Orden sugerido de la home:

1. Hero con producto, logo y propuesta de valor.
2. Cervezas destacadas.
3. La leyenda del Duende.
4. Nuevo lanzamiento o lote limitado.
5. El brewer y su proceso.
6. Dónde conseguirlas.
7. Colaboraciones o eventos.
8. Bloque B2B.
9. Instagram y contacto.

No añadas reservas, mesas, carta gastronómica, horarios de local ni delivery de restaurante.

## Identidad visual

La marca debe sentirse **colorida, artesanal, divertida, cálida, pícara y ligeramente fantástica**; nunca corporativa, minimalista genérica ni infantil.

El logo oficial combina duende, fuego, montaña, cerveza y paisaje volcánico. Usa el activo suministrado por el propietario; no lo redibujes, deformes ni recolorees.

```css
:root {
  --foam: #fbf9f7;
  --warm-cream: #f1d4a1;
  --malt-gold: #f19d27;
  --sunset-gold: #f7b96a;
  --volcanic-orange: #d1641a;
  --terracotta: #8e4525;
  --duende-red: #d51c06;
  --deep-red: #9b1307;
  --crater-burgundy: #5e160a;
  --crater-brown: #29100a;
}
```

Distribución aproximada:

- 60% fondos claros: `--foam`, `--warm-cream`.
- 25% texto y estructura: `--crater-brown`, `--crater-burgundy`.
- 10% CTA y focos: `--duende-red`.
- 5% detalles: dorados y naranja volcánico.

Reglas de color:

- Usa marrón cráter en vez de negro puro y crema en vez de blanco clínico.
- Reserva el rojo para CTA, estados activos y lanzamientos.
- Usa dorado y naranja como acentos, no como fondo permanente de todo el sitio.
- Cada cerveza puede tener un acento propio, manteniendo neutrales cálidos y CTA rojos.
- Evita azul corporativo, grises fríos, verde tecnológico y degradados SaaS.

## Tipografía y composición

- Usa una display expresiva para titulares y una sans serif legible para cuerpo e interfaz.
- Pareja sugerida si no existe sistema tipográfico: Bree Serif + Nunito Sans.
- Titulares grandes, breves y teatrales; cuerpo claro y cómodo de leer.
- Usa marcos de etiqueta, formas redondeadas, stickers e ilustraciones con moderación.
- No conviertas cada bloque en una tarjeta. Alterna composiciones abiertas y producto grande.
- Producto y personaje dominan; la interfaz acompaña.

## Voz de marca

El contenido público debe estar en español salvo solicitud bilingüe.

Tono: cercano, ingenioso, artesanal, mítico sin solemnidad, pícaro sin infantilismo y panameño sin caricatura.

Evita “pasión por la cerveza”, “experiencia única”, “calidad premium” y “el mejor sabor”. Prefiere detalles concretos, proceso, ingredientes e historias.

CTA preferidos:

- Conoce las cervezas
- Pide al Duende
- Descubre el lote
- Dónde encontrarla
- Lleva al Duende a tu negocio

## Movimiento e interacción

- CSS para transiciones simples; GSAP solo si ya existe o aporta narrativa real.
- Anima burbujas, humo, etiquetas, latas o apariciones del duende con sutileza.
- Evita scroll-jacking, parallax agresivo, cursores invasivos y movimiento continuo.
- Respeta `prefers-reduced-motion` y navegación por teclado.

## Responsive, accesibilidad y rendimiento

- Diseña mobile-first y verifica 360 px, 768 px y 1440 px.
- Evita overflow horizontal.
- Mantén contraste WCAG AA.
- Incluye `hover`, `focus-visible`, `active` y `disabled` cuando corresponda.
- Todo visual informativo necesita alt text; no incrustes texto esencial en imágenes.
- Define dimensiones de imágenes, usa formatos modernos y lazy loading fuera del hero.
- Evita autoplay y dependencias pesadas sin beneficio claro.
- Incluye consumo responsable y mayoría de edad en el footer; no implementes age gate bloqueante sin aprobación.

## SEO y conversión

- Cada página debe tener title, description, canonical y Open Graph.
- Añade sitemap y robots.txt al preparar producción.
- Usa datos estructurados solo con información real.
- Cada cerveza debe tener URL estable e indexable, no depender de modales.
- WhatsApp debe usar mensajes precargados breves y contextuales.
- No publiques teléfonos, correos ni redes no confirmados.

## Flujo de trabajo

Antes de implementar:

1. Lee los archivos relevantes y entiende patrones existentes.
2. Define el cambio mínimo necesario.
3. Reutiliza componentes y tokens antes de crear variantes.
4. Conserva compatibilidad con rutas y contenido existentes.

Después de implementar:

1. Ejecuta los scripts reales de `package.json`.
2. Ejecuta como mínimo el build de producción.
3. Ejecuta typecheck, lint, format y tests cuando existan.
4. Corrige errores causados por tus cambios.
5. Revisa móvil y escritorio cuando haya herramientas disponibles.

Comandos esperados con npm:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run astro -- check
```

Si `package.json` difiere, usa los comandos del repositorio.

## Criterios de aceptación

- Se entiende en segundos que es una marca de cerveza artesanal, no un restaurante.
- Producto y universo del Duende son protagonistas.
- La paleta deriva del logo y conserva espacio visual.
- Los CTA funcionan y son claros.
- No hay datos comerciales inventados.
- Funciona con teclado, móvil y movimiento reducido.
- El build termina sin errores.
- No se añadieron dependencias ni abstracciones innecesarias.
````
