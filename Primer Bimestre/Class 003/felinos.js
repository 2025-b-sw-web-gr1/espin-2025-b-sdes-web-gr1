// Script ligero para páginas tradicionales: marca el enlace activo según la ruta
(function() {
    function setActiveLink() {
        const links = document.querySelectorAll('.nav-link');
        const path = window.location.pathname.split('/').pop();
        links.forEach(link => {
            const href = link.getAttribute('href');
            // Comparar nombres de archivos (sin query)
            if (href === path || (href === '' && (path === '' || path === 'index.html'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', setActiveLink);
})();
