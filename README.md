# Active Solutions

Web responsive de mecánica y electromecánica, basada en el diseño azul aprobado.

## Estructura

- `dist/index.html`: contenido y metadatos.
- `dist/style.css`: estilos responsive.
- `dist/app.js`: menú móvil, selección de servicio y preparación de consultas.
- `dist/assets/`: imágenes optimizadas para web.

Sitio estático, sin dependencias ni paso de compilación. Para abrirlo localmente desde este directorio:

```sh
python3 -m http.server 8000 --directory dist
```

Visitar http://localhost:8000.

## Contacto

El formulario prepara un mensaje, permite copiarlo y abre el perfil de Instagram. No transmite información a un servidor, no almacena datos y no confirma reservas. El visitante debe pegar y enviar su consulta; el taller confirma el turno.

Pendiente para la versión comercial: confirmar servicios y reemplazar las imágenes ilustrativas generadas por fotos reales; incorporar teléfono de WhatsApp, dirección y horarios verificados si corresponde. El enlace de Instagram fue provisto por el usuario.
