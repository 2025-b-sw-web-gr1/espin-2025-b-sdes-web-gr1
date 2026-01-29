const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Página principal
app.get('/', (req, res) => {
    res.render('index07', {
        titulo: 'Ferretería El Cóndor',
        categorias: [
            { nombre: 'Tuberías', ruta: 'tuberias' },
            { nombre: 'Pinturas', ruta: 'pinturas' },
            { nombre: 'Pernos', ruta: 'pernos' },
            { nombre: 'Electricidad', ruta: 'electricidad' }
        ]
    });
});

// Página por categoría
app.get('/categoria/:tipo', (req, res) => {
    const data = {
    tuberias: {
        titulo: 'Tuberías',
        descripcion: 'Materiales utilizados para la conducción de agua, gas y otros fluidos.',
        imagen: '/tuberias.jpg',
        materiales: [
            {
                nombre: 'PVC',
                descripcion: 'Plástico resistente y liviano, usado en instalaciones de agua potable y desagües.'
            },
            {
                nombre: 'Cobre',
                descripcion: 'Material metálico duradero, ideal para agua caliente y sistemas de calefacción.'
            },
            {
                nombre: 'Hierro Galvanizado',
                descripcion: 'Tubería de acero recubierta de zinc, resistente a la corrosión.'
            }
        ]
    },

    pinturas: {
        titulo: 'Pinturas',
        descripcion: 'Productos utilizados para proteger y decorar superficies.',
        imagen: '/pinturas.jpg',
        materiales: [
            {
                nombre: 'Látex',
                descripcion: 'Pintura a base de agua, fácil de aplicar y de secado rápido.'
            },
            {
                nombre: 'Esmalte',
                descripcion: 'Pintura resistente ideal para superficies metálicas y de madera.'
            },
            {
                nombre: 'Acrílica',
                descripcion: 'Pintura duradera, resistente al clima y de uso interior y exterior.'
            }
        ]
    },

    pernos: {
        titulo: 'Pernos',
        descripcion: 'Elementos de fijación utilizados para unir piezas de manera segura.',
        imagen: '/pernos.jpg',
        materiales: [
            {
                nombre: 'Hexagonales',
                descripcion: 'Pernos comunes que se ajustan con llave fija o ajustable.'
            },
            {
                nombre: 'Allen',
                descripcion: 'Pernos que utilizan una llave hexagonal interna.'
            },
            {
                nombre: 'Rosca fina',
                descripcion: 'Pernos de alta precisión para uniones más firmes.'
            }
        ]
    },

    electricidad: {
        titulo: 'Electricidad',
        descripcion: 'Materiales necesarios para instalaciones eléctricas seguras.',
        imagen: '/electricidad.jpg',
        materiales: [
            {
                nombre: 'Cables',
                descripcion: 'Conductores eléctricos que transportan corriente.'
            },
            {
                nombre: 'Interruptores',
                descripcion: 'Dispositivos que controlan el paso de la electricidad.'
            },
            {
                nombre: 'Tomacorrientes',
                descripcion: 'Puntos de conexión para aparatos eléctricos.'
            }
        ]
    }
};


    const categoria = data[req.params.tipo];

    if (!categoria) {
        return res.send('Categoría no encontrada');
    }

    res.render('categoria07', categoria);
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
