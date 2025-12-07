// ==========================================
// SPA - Single Page Application para Caninos
// ==========================================

// Objeto que contiene todas las páginas
const pages = {
    'caninos-generales': {
        title: 'Caninos Generales',
        content: () => `
            <h2 class="section-title">Caninos: Información General</h2>
            
            <div class="intro-text">
                Los caninos (familia Canidae) son mamíferos carnívoros domesticados y salvajes que 
                se encuentran en casi todos los continentes. Son depredadores inteligentes con una 
                estructura social compleja, una excelente capacidad sensorial y una gran adaptabilidad 
                a diversos ambientes. La familia Canidae incluye perros domésticos, lobos, zorros, 
                coyotes, chacales y otras especies relacionadas.
            </div>

            <div class="content-card">
                <h3>🧬 Características Generales</h3>
                <p>
                    Los caninos son mamíferos con características físicas y comportamentales distintas:
                </p>
                <ul class="feature-list">
                    <li>Olfato excepcional con hasta 300 millones de receptores olfativos</li>
                    <li>Audición aguda, pueden escuchar frecuencias hasta 65,000 Hz</li>
                    <li>Ojos adaptados para detectar movimiento y visión nocturna</li>
                    <li>Garras no retráctiles para tracción durante la caza</li>
                    <li>Dientes especializados para desgarrar carne (caninos prominentes)</li>
                    <li>Cuerpo musculoso y ágil diseñado para la resistencia en la caza</li>
                    <li>Comportamiento social complejo, especialmente en manadas</li>
                    <li>Comunicación verbal y corporal sofisticada</li>
                </ul>
            </div>

            <h3 class="section-subtitle">Clasificación de Caninos</h3>
            
            <div class="animals-grid">
                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐺</div>
                        <h4>Lobos</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            Los lobos son los ancestros del perro doméstico y son depredadores ápice. 
                            Viven en manadas jerarquizadas y son animales muy sociales e inteligentes.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">1.3-2m</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">20-80 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Distribución:</span>
                                <span class="stat-value">Hemisferio norte</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🦊</div>
                        <h4>Zorros</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            Los zorros son caninos más pequeños y generalmente solitarios. 
                            Son cazadores oportunistas muy inteligentes y adaptables.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">0.4-0.9m</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">2-7 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Distribución:</span>
                                <span class="stat-value">Mundial</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕</div>
                        <h4>Perros Domésticos</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            Domesticados hace más de 15,000 años, los perros son animales 
                            altamente adaptables y se han convertido en compañeros humanos ideales.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">Variable</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">2-90 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Distribución:</span>
                                <span class="stat-value">Mundial</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-card">
                <h3>🧠 Inteligencia y Comportamiento</h3>
                <p>
                    Los caninos son animales altamente inteligentes con capacidad de aprendizaje compleja. 
                    Utilizan el reconocimiento facial, la comunicación vocal y gestual, y poseen excelente 
                    memoria. Los lobos demostraron capacidad de resolver problemas colaborativamente, 
                    mientras que los perros domésticos desarrollaron una comprensión excepcional de 
                    las intenciones humanas.
                </p>
            </div>

            <div class="content-card">
                <h3>🌍 Distribución y Hábitat</h3>
                <p>
                    Los caninos habitan en una variedad de ambientes desde tundra ártica hasta desiertos tropicales, 
                    bosques templados y regiones montañosas. Su adaptabilidad les permite prosperar en 
                    diferentes condiciones climáticas. Algunos, como los perros domésticos, ahora viven 
                    prácticamente en todas partes del planeta donde hay humanos.
                </p>
            </div>
        `
    },

    'perros-salvajes': {
        title: 'Perros Salvajes',
        content: () => `
            <h2 class="section-title">Perros Salvajes del Mundo</h2>
            
            <div class="intro-text">
                Los perros salvajes representan la diversidad de la familia Canidae en estado natural. 
                Desde los poderosos lobos hasta los adaptables zorros, estos animales juegan un papel 
                crucial en los ecosistemas como depredadores ápice y controladores de poblaciones de presas.
            </div>

            <h3 class="section-subtitle">Grandes Depredadores Caninos</h3>

            <div class="animals-grid">
                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐺</div>
                        <h4>Lobo Gris</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            El lobo gris es el canino salvaje más grande. Vive en manadas jerarquizadas 
                            lideradas por una pareja alfa. Son cazadores coordinados que pueden derribar 
                            presas mucho más grandes que ellos.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">30-80 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Velocidad:</span>
                                <span class="stat-value">60 km/h</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Manada:</span>
                                <span class="stat-value">5-10 individuos</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕‍🦺</div>
                        <h4>Licaón Africano</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            El licaón es el depredador más exitoso de África. Tienen una tasa de éxito 
                            en caza superior al 80%, muy por encima de otros depredadores. Son cazadores 
                            altamente coordinados con excelente resistencia.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">20-30 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Velocidad:</span>
                                <span class="stat-value">70 km/h</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Éxito de caza:</span>
                                <span class="stat-value">80%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐺</div>
                        <h4>Lobo Rojo</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            El lobo rojo es una especie en peligro crítico de extinción. Más pequeño 
                            que el lobo gris, caza presas más pequeñas. Está siendo reintroducido 
                            en Carolina del Norte.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">15-30 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Estado:</span>
                                <span class="stat-value">Peligro crítico</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Distribución:</span>
                                <span class="stat-value">Estados Unidos</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕</div>
                        <h4>Coyote</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            El coyote es un canino muy adaptable que ha expandido su rango en América del Norte. 
                            Son cazadores oportunistas que cazan en parejas o grupos. Son más pequeños 
                            que los lobos pero igualmente inteligentes.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">8-20 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Velocidad:</span>
                                <span class="stat-value">65 km/h</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Distribución:</span>
                                <span class="stat-value">América</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🦊</div>
                        <h4>Zorro Rojo</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            El zorro rojo es el canino más distribuido en el mundo. Es cazador solitario 
                            muy inteligente con capacidad para resolver problemas complejos. Pueden adaptarse 
                            a ambientes urbanos.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">4-7 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Velocidad:</span>
                                <span class="stat-value">50 km/h</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Distribución:</span>
                                <span class="stat-value">Global</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🦊</div>
                        <h4>Zorro Ártico</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            El zorro ártico es un experto en ambientes extremos. Tienen un pelaje 
                            extremadamente denso que cambia de color con las estaciones. Pueden sobrevivir 
                            a temperaturas de -70°C.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Peso:</span>
                                <span class="stat-value">3-4 kg</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Resistencia:</span>
                                <span class="stat-value">-70°C</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Distribución:</span>
                                <span class="stat-value">Ártico</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-card">
                <h3>🎯 Estrategias de Caza</h3>
                <p>
                    Los perros salvajes utilizan diversas estrategias de caza según su tamaño y ambiente:
                </p>
                <ul class="feature-list">
                    <li><strong>Caza en manada:</strong> Lobos y licaones coordinan ataques complejos</li>
                    <li><strong>Acecho y sorpresa:</strong> Zorros se acercan sigilosamente a sus presas</li>
                    <li><strong>Persecución:</strong> Coyotes persiguen a sus presas hasta agotar su energía</li>
                    <li><strong>Especialización:</strong> Cada especie desarrolló técnicas según su tamaño</li>
                </ul>
            </div>

            <div class="content-card">
                <h3>⚠️ Conservación</h3>
                <p>
                    Muchos caninos salvajes enfrentan amenazas significativas. La pérdida de hábitat, 
                    la caza y los conflictos con humanos han reducido sus poblaciones. Los esfuerzos de 
                    reintroducción y protección de hábitat son cruciales para la supervivencia de estas especies.
                </p>
            </div>
        `
    },

    'perros-domesticos': {
        title: 'Perros Domésticos',
        content: () => `
            <h2 class="section-title">Perros Domésticos: Compañeros del Hombre</h2>
            
            <div class="intro-text">
                El perro doméstico es el resultado de más de 15,000 años de domesticación del lobo. 
                Se han convertido en el compañero animal más cercano de los humanos, desarrollando una 
                comprensión única de nuestras emociones e intenciones. Existen cientos de razas con 
                características y temperamentos variados.
            </div>

            <h3 class="section-subtitle">Razas Populares y Características</h3>

            <div class="animals-grid">
                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🦮</div>
                        <h4>Labrador Retriever</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            El Labrador es una de las razas más populares. Son perros amigables, 
                            inteligentes y energéticos. Excelentes perros de servicio y mascotas familiares.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">Grande (55-80 lbs)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Temperamento:</span>
                                <span class="stat-value">Amigable, juguetón</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Esperanza de vida:</span>
                                <span class="stat-value">10-12 años</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕</div>
                        <h4>Pastor Alemán</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            Perros muy inteligentes y entrenable. Son excelentes para tareas de protección, 
                            búsqueda y rescate. Requieren mucho ejercicio y entrenamiento mental.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">Grande (50-90 lbs)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Temperamento:</span>
                                <span class="stat-value">Leal, protector</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Esperanza de vida:</span>
                                <span class="stat-value">9-13 años</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕</div>
                        <h4>Golden Retriever</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            Perros generalmente amables y gentiles. Excelentes con familias y niños. 
                            Requieren ejercicio regular y cepillado frecuente debido a su pelaje largo.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">Grande (55-75 lbs)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Temperamento:</span>
                                <span class="stat-value">Gentil, leal</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Esperanza de vida:</span>
                                <span class="stat-value">10-12 años</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕</div>
                        <h4>Bulldog Inglés</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            Perros compactos y musculosos. Tienen un temperamento calmado y amigable. 
                            Requieren poco ejercicio y se adaptan bien a apartamentos.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">Mediano (40-50 lbs)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Temperamento:</span>
                                <span class="stat-value">Obstinado, cariñoso</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Esperanza de vida:</span>
                                <span class="stat-value">8-10 años</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕</div>
                        <h4>Poodle</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            Disponibles en tres tamaños (Estándar, Mediano y Miniatura). Son muy inteligentes 
                            y entrenable. Requieren aseo regular del pelaje.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">Variable (6-70 lbs)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Temperamento:</span>
                                <span class="stat-value">Inteligente, activo</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Esperanza de vida:</span>
                                <span class="stat-value">12-15 años</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="animal-card">
                    <div class="animal-card-header">
                        <div class="animal-card-icon">🐕</div>
                        <h4>Chihuahua</h4>
                    </div>
                    <div class="animal-card-body">
                        <p>
                            La raza más pequeña de perros. A pesar de su tamaño, tienen mucha personalidad 
                            y son sorprendentemente valientes. Se adaptan bien a espacios pequeños.
                        </p>
                        <div class="animal-stats">
                            <div class="stat-item">
                                <span class="stat-label">Tamaño:</span>
                                <span class="stat-value">Pequeño (2-6 lbs)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Temperamento:</span>
                                <span class="stat-value">Valiente, leal</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Esperanza de vida:</span>
                                <span class="stat-value">12-20 años</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-card">
                <h3>🧠 Inteligencia Canina</h3>
                <p>
                    Los perros domésticos han desarrollado una comprensión única de las emociones humanas. 
                    Pueden reconocer emociones faciales, responder a nuestro tono de voz y hasta anticipar 
                    nuestras necesidades. Algunos estudios sugieren que tienen una inteligencia comparable 
                    a la de un niño de 2-3 años.
                </p>
            </div>

            <div class="content-card">
                <h3>🏥 Salud y Cuidados</h3>
                <p>
                    Los perros domésticos requieren cuidados específicos para una vida saludable:
                </p>
                <ul class="feature-list">
                    <li>Alimentación balanceada y de calidad según edad y tamaño</li>
                    <li>Ejercicio regular para mantener peso y salud cardiovascular</li>
                    <li>Visitas regulares al veterinario y vacunaciones</li>
                    <li>Cuidado dental para prevenir enfermedades bucales</li>
                    <li>Socialización temprana para desarrollo comportamental óptimo</li>
                    <li>Entrenamientos mentales para estimulación cognitiva</li>
                    <li>Control de parásitos externos e internos</li>
                </ul>
            </div>

            <div class="content-card">
                <h3>❤️ Vínculo Humano-Canino</h3>
                <p>
                    El perro es conocido como "el mejor amigo del hombre" por buena razón. Han sido 
                    seleccionados evolutivamente para entender y conectar con nosotros. Los perros 
                    muestran capacidad de empatía, pueden detectar cambios en nuestro estrés y 
                    temperamento, y ofrecen un apoyo emocional invaluable a sus dueños.
                </p>
            </div>

            <div class="highlight-box">
                <strong>💡 Dato Interesante:</strong>
                Los perros pueden ser entrenados para detectar hipoglucemia en diabéticos, 
                convulsiones en epilépticos y otros cambios médicos. Su olfato sensible puede 
                detectar cambios químicos en nuestro cuerpo antes de que los síntomas aparezcan.
            </div>
        `
    }
};

// ==========================================
// Lógica Principal de la SPA
// ==========================================

class CaninosApp {
    constructor() {
        this.currentPage = 'caninos-generales';
        this.appContainer = document.getElementById('app');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        // Agregar event listeners a los enlaces de navegación
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Cargar la página inicial
        this.loadPage('caninos-generales');
    }

    handleNavClick(event) {
        event.preventDefault();
        const pageId = event.target.getAttribute('data-page');
        
        // Actualizar estilo activo
        this.navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
        
        // Cargar la nueva página
        this.loadPage(pageId);
    }

    loadPage(pageId) {
        // Validar que la página existe
        if (!pages[pageId]) {
            console.error(`Página '${pageId}' no encontrada`);
            return;
        }

        // Obtener la página
        const page = pages[pageId];
        
        // Crear elemento temporal para animación
        const wrapper = document.createElement('div');
        wrapper.className = 'page-section';
        wrapper.innerHTML = page.content();
        
        // Limpiar y agregar nuevo contenido
        this.appContainer.innerHTML = '';
        this.appContainer.appendChild(wrapper);
        
        // Actualizar título de la página
        document.title = `${page.title} | Enciclopedia de Caninos`;
        
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Guardar página actual
        this.currentPage = pageId;
    }
}

// ==========================================
// Inicialización
// ==========================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('🐕 Aplicación de Caninos iniciada');
    new CaninosApp();
});
