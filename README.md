# Active Solutions

Web responsive de mecánica y electromecánica, basada en el diseño azul aprobado.

## Estructura

- `dist/index.html`: contenido y metadatos.
- `dist/style.css`: estilos responsive.
- `dist/app.js`: menú móvil, selección de servicio y preparación de consultas.
- `dist/assets/`: imágenes optimizadas para web.

Sitio estático sin dependencias de ejecución. Un paso de build con Node genera los metadatos absolutos, robots.txt y sitemap.xml. Para abrirlo localmente:

```sh
node scripts/build.mjs
python3 -m http.server 8000 --directory public
```

Visitar http://localhost:8000.

## Contacto

El formulario prepara un mensaje, permite copiarlo y abre https://wa.link/gytz4k. El visitante debe pegarlo en WhatsApp y enviarlo; el taller confirma el turno. El formulario no envía ni almacena información en un servidor. El enlace corto se mantiene intacto, sin inventar un número de teléfono ni parámetros de mensaje que no están confirmados.

## Vercel y dominio

`vercel.json` configura Framework Other, build `node scripts/build.mjs` y salida `public`. Conservar Root Directory `./`. Si el proyecto ya tiene overrides de build/salida en Vercel, dejarlos coincidir con estos valores.

El dominio se obtiene de `SITE_URL` (opcional) o de `VERCEL_PROJECT_PRODUCTION_URL`. Este último necesita las variables de sistema de Vercel habilitadas. Al agregar un dominio propio, desplegar de nuevo; también se puede fijar `SITE_URL=https://dominio.com`. No se usa el dominio temporal de cada deployment como canonical.

Las previews incluyen `noindex,follow`. El build local sin dominio usa localhost y también noindex. La producción permite indexación. `public/` es salida generada y no se versiona.

## SEO, ubicación y marca

- Metadescripción, canonical, Open Graph, Twitter Card con imagen PNG 1200×630, favicon SVG/PNG y apple-touch-icon.
- Datos estructurados AutoRepair, WebSite, WebPage y catálogo de servicios, generados con el dominio de producción. No se inventan reseñas, horarios, teléfono ni dirección postal.
- Sitemap con la única página indexable; las anclas no son URLs independientes. La 404 queda fuera del sitemap y tiene noindex.
- `404.html` en la salida de Vercel: página personalizada sin reescritura comodín a la portada que esconda errores. Breadcrumb visible Inicio / Página no encontrada; la portada de una sola página no inventa una jerarquía.
- Preguntas frecuentes visibles, enlaces internos descriptivos, contenidos accesibles sin JavaScript y respeto por movimiento reducido.
- Coordenadas indicadas por el propietario: -34.516272707591455, -58.72331865300859. Mapa con carga diferida y enlace para obtener indicaciones en Google Maps.
- Logo original adjunto conservado en `dist/assets/logo-original.png`; wrapper SVG con el encuadre de la marca para el header. El favicon es un monograma A con motivo de circuito. La imagen social se compone con la marca y textos del sitio.

Pendiente de confirmación del propietario: dirección postal (calle, altura, localidad), horarios, servicios definitivos y fotos reales del taller que reemplacen las ilustrativas. Para SEO local, mantener esos datos consistentes con Google Business Profile. Tras publicar, enviar `/sitemap.xml` en Search Console y verificar el dominio. Los cambios técnicos no garantizan posiciones ni citas en respuestas de IA.

## Actualización de servicios y cobertura

Incluye diagnósticos avanzados (escaneo, flujometría de datos, verificación de voltajes, sensores, oscilogramas y cableado), reparación y programación de ECUs, tableros, airbags y ABS (clonación, blanqueo y reparación), mecánica general, grúa, electricidad y arranque/carga. Cobertura informada por el propietario: Buenos Aires, Misiones, Salta, Catamarca, San Luis y Santiago del Estero. Cada localidad y servicio requieren confirmar disponibilidad. Contenido, preguntas frecuentes y datos estructurados sincronizados.
