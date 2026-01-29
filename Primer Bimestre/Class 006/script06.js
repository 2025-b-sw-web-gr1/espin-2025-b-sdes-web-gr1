document.querySelectorAll('article').forEach(card => {
card.addEventListener('focus', () => {
console.log('Elemento enfocado para navegación por teclado');
});
});