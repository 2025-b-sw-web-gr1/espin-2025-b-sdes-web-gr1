# Demo: Formas de cargar estilos (CSS)

Proyecto educativo que muestra varias formas de aplicar CSS a una página web:

- Atributo `style` en elementos (inline)
- Bloques `<style>` internos en el documento
- Hoja externa con `<link rel="stylesheet">`
- `@import` dentro de una hoja CSS
- Carga dinámica mediante creación de `<link>` con JavaScript
- Carga mediante `fetch()` y aplicación en un `<style>` insertado
- Aplicar estilos vía `element.style` desde JS

Cómo ejecutar (Windows PowerShell):

1) Instalar dependencias (local):

```powershell
cd "class 006\estilos-carga-demo"
npm install
```

2) Levantar servidor con el script (usa `http-server` local):

```powershell
npm run serve
```

3) Abrir en el navegador: http://localhost:8080/

Alternativa: instalar `http-server` globalmente y servir la carpeta:

```powershell
npm install -g http-server
cd "class 006\estilos-carga-demo"
http-server . -p 8080
```

Explicación rápida de archivos:

- `index.html`: página educativa con ejemplos interactivos.
- `styles/external.css`: hoja principal que hace `@import "imported.css"`.
- `styles/imported.css`: archivo importado con más reglas.
- `styles/dynamic.css`: hoja usada para demostrar carga dinámica vía `<link>`.
- `styles/fetch-applied.css`: CSS que se carga con `fetch()` y se aplica con `<style>`.
- `script.js`: funciones JS para cargar CSS dinámicamente.
- `package.json`: script `npm run serve` que ejecuta `http-server`.

¿Quieres que ejecute `npm install` y levante el servidor aquí mismo? Puedo hacerlo si quieres.
