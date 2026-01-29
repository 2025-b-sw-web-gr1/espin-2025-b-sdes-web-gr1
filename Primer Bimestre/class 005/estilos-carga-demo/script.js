// script.js: funciones para demostrar carga dinámica de CSS

function loadLinkDynamically() {
  if (document.getElementById('dynamic-link')) return alert('Link dinámico ya cargado');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'styles/dynamic.css';
  link.id = 'dynamic-link';
  document.head.appendChild(link);
  link.onload = () => alert('Hoja dinámica cargada: styles/dynamic.css');
}

async function fetchAndApplyStyle() {
  try {
    const res = await fetch('styles/fetch-applied.css');
    if (!res.ok) throw new Error('Error al obtener CSS');
    const cssText = await res.text();
    const style = document.createElement('style');
    style.textContent = cssText;
    style.id = 'fetch-style';
    document.head.appendChild(style);
    alert('CSS aplicado desde fetch()');
  } catch (err) {
    alert('No se pudo cargar CSS via fetch: ' + err.message);
  }
}

function applyInlineViaJS() {
  const p = document.createElement('p');
  p.textContent = 'Párrafo con estilo aplicado vía element.style (JS)';
  p.style.color = '#fff';
  p.style.background = '#333';
  p.style.padding = '8px';
  p.style.borderRadius = '4px';
  document.body.appendChild(p);
}

document.getElementById('btn-load-link').addEventListener('click', loadLinkDynamically);
document.getElementById('btn-fetch-style').addEventListener('click', fetchAndApplyStyle);
document.getElementById('btn-inline-js').addEventListener('click', applyInlineViaJS);
