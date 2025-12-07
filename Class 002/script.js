// Script para la página educativa de HTML Básico

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar características
    initializeNavigation();
    initializeExamples();
    initializeScrollEffects();
});

/**
 * Inicializar la navegación con scroll suave
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Scroll suave hacia la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Resaltar la sección
                highlightSection(targetSection);
            }
        });
    });
}

/**
 * Resaltar una sección cuando se hace clic
 */
function highlightSection(section) {
    // Remover resaltado previo
    document.querySelectorAll('.concept-section').forEach(s => {
        s.style.borderLeft = 'none';
    });
    
    // Agregar resaltado a la sección actual
    section.style.borderLeft = '5px solid #3498db';
    section.style.transition = 'border-left 0.3s ease';
    
    // Remover resaltado después de 2 segundos
    setTimeout(() => {
        section.style.borderLeft = 'none';
    }, 2000);
}

/**
 * Inicializar ejemplos interactivos
 */
function initializeExamples() {
    const examples = document.querySelectorAll('.example');
    
    examples.forEach((example, index) => {
        // Agregar botón para copiar código
        const codeBlock = example.querySelector('.example-code pre code');
        if (codeBlock) {
            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copiar código';
            copyButton.className = 'copy-btn';
            copyButton.onclick = () => copyCode(codeBlock, copyButton);
            
            const codeContainer = example.querySelector('.example-code');
            codeContainer.style.position = 'relative';
            codeContainer.appendChild(copyButton);
            
            // Agregar estilos al botón si no existen
            if (!document.getElementById('copy-btn-styles')) {
                const style = document.createElement('style');
                style.id = 'copy-btn-styles';
                style.textContent = `
                    .copy-btn {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        padding: 8px 12px;
                        background-color: #3498db;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 0.9rem;
                        font-weight: 600;
                        transition: background-color 0.3s ease;
                        z-index: 10;
                    }
                    
                    .copy-btn:hover {
                        background-color: #2980b9;
                    }
                    
                    .copy-btn.copied {
                        background-color: #27ae60;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    });
}

/**
 * Copiar código al portapapeles
 */
function copyCode(codeElement, button) {
    const code = codeElement.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        // Cambiar texto del botón
        const originalText = button.textContent;
        button.textContent = '¡Copiado!';
        button.classList.add('copied');
        
        // Restaurar después de 2 segundos
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
        button.textContent = 'Error al copiar';
        setTimeout(() => {
            button.textContent = 'Copiar código';
        }, 2000);
    });
}

/**
 * Efectos de scroll
 */
function initializeScrollEffects() {
    const sections = document.querySelectorAll('.concept-section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Función para mostrar información de depuración en la consola
 */
function logPageInfo() {
    console.log('=== Página Educativa HTML Básico ===');
    console.log('Navegador:', navigator.userAgent);
    console.log('Resolución:', window.innerWidth + 'x' + window.innerHeight);
    console.log('Secciones encontradas:', document.querySelectorAll('.concept-section').length);
    console.log('Ejemplos encontrados:', document.querySelectorAll('.example').length);
}

// Registrar información de la página
logPageInfo();

// Exposer funciones útiles en el console
window.htmlBasico = {
    logPageInfo: logPageInfo,
    copyCode: copyCode,
    highlightSection: highlightSection
};

console.log('💡 Funciones disponibles en window.htmlBasico:');
console.log('- logPageInfo(): Muestra información de la página');
console.log('- copyCode(element, button): Copia código al portapapeles');
console.log('- highlightSection(section): Resalta una sección');
